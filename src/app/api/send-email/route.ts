import { NextResponse } from "next/server";

export const runtime = "edge";

/** UTF-8 safe base64 encoding */
function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

/** Split base64 into 76-char lines (MIME requirement) */
function wrapBase64(base64: string): string {
  const lines: string[] = [];
  for (let i = 0; i < base64.length; i += 76) {
    lines.push(base64.slice(i, i + 76));
  }
  return lines.join("\r\n");
}

/** Minimal SMTP client using Cloudflare Workers TCP socket */
async function sendSMTPEmail(config: {
  host: string;
  port: number;
  user: string;
  pass: string;
  fromName: string;
  to: string;
  subject: string;
  html: string;
}) {
  // connect() is a Cloudflare Workers global for TCP sockets
  const connectFn = (globalThis as Record<string, unknown>).connect as (
    address: { hostname: string; port: number },
    options: { secureTransport: string },
  ) => {
    readable: ReadableStream<Uint8Array>;
    writable: WritableStream<Uint8Array>;
    close(): Promise<void>;
  };

  if (!connectFn) {
    throw new Error("TCP connect() not available in this runtime");
  }

  const socket = connectFn(
    { hostname: config.host, port: config.port },
    { secureTransport: "on" },
  );

  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  let buf = "";

  async function readResponse(): Promise<string> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const lines = buf.split("\r\n");
      for (let i = 0; i < lines.length; i++) {
        // SMTP final response line: 3-digit code followed by space
        if (/^\d{3} /.test(lines[i])) {
          const resp = lines.slice(0, i + 1).join("\r\n");
          buf = lines.slice(i + 1).join("\r\n");
          return resp;
        }
      }
      const { value, done } = await reader.read();
      if (done) {
        const rest = buf;
        buf = "";
        return rest;
      }
      buf += dec.decode(value, { stream: true });
    }
  }

  async function cmd(command: string): Promise<string> {
    await writer.write(enc.encode(`${command}\r\n`));
    return readResponse();
  }

  try {
    // Server greeting
    await readResponse();

    // EHLO
    await cmd("EHLO worker");

    // AUTH LOGIN
    await cmd("AUTH LOGIN");
    await cmd(btoa(config.user));
    const authResp = await cmd(btoa(config.pass));
    if (!authResp.startsWith("235")) {
      throw new Error(`SMTP auth failed: ${authResp}`);
    }

    // Envelope
    await cmd(`MAIL FROM:<${config.user}>`);
    await cmd(`RCPT TO:<${config.to}>`);
    await cmd("DATA");

    // Build MIME message
    const message = [
      `From: =?UTF-8?B?${utf8ToBase64(config.fromName)}?= <${config.user}>`,
      `To: ${config.to}`,
      `Subject: =?UTF-8?B?${utf8ToBase64(config.subject)}?=`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      `Content-Transfer-Encoding: base64`,
      `Date: ${new Date().toUTCString()}`,
      ``,
      wrapBase64(utf8ToBase64(config.html)),
      ``,
      `.`,
    ].join("\r\n");

    const sendResp = await cmd(message);
    if (!sendResp.startsWith("250")) {
      throw new Error(`SMTP send failed: ${sendResp}`);
    }

    await cmd("QUIT");
  } finally {
    try {
      await writer.close();
    } catch {
      // ignore close errors
    }
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, type, budget, priceResult } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("SMTP environment variables not configured");
      return NextResponse.json(
        { error: "SMTP not configured" },
        { status: 500 },
      );
    }

    const priceText =
      priceResult === "consult"
        ? "需進一步諮詢"
        : `NT$ ${Number(priceResult.min).toLocaleString()} ~ ${Number(priceResult.max).toLocaleString()}`;

    const year = new Date().getFullYear();

    const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#111111;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:1px;">Go To Future</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 20px;font-size:16px;color:#333;">${name} 您好，</p>
              <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.8;">感謝您使用我們的專案估價服務！我們已收到您的需求，以下是您提交的摘要：</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:8px;padding:20px;margin:0 0 24px;">
                <tr>
                  <td style="padding:8px 20px;font-size:14px;color:#888;">專案類型</td>
                  <td style="padding:8px 20px;font-size:14px;color:#333;font-weight:600;">${type}</td>
                </tr>
                <tr>
                  <td style="padding:8px 20px;font-size:14px;color:#888;">預算範圍</td>
                  <td style="padding:8px 20px;font-size:14px;color:#333;font-weight:600;">${budget}</td>
                </tr>
                <tr>
                  <td style="padding:8px 20px;font-size:14px;color:#888;">系統預估</td>
                  <td style="padding:8px 20px;font-size:14px;color:#333;font-weight:600;">${priceText}</td>
                </tr>
              </table>
              <p style="margin:0 0 12px;font-size:15px;color:#555;line-height:1.8;">我們的團隊將於 <strong>24 小時內</strong> 與您聯繫，針對您的需求提供更詳細的規劃建議。</p>
              <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.8;">若有任何問題，歡迎隨時回覆此信件與我們聯繫。</p>
              <p style="margin:0;font-size:14px;color:#999;">Go To Future Development 團隊 敬上</p>
            </td>
          </tr>
          <tr>
            <td style="background:#fafafa;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;font-size:12px;color:#bbb;">此信件由系統自動發送，請勿直接回覆。<br>&copy; ${year} Go To Future Development</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await sendSMTPEmail({
      host,
      port,
      user,
      pass,
      fromName: "邁向未來",
      to: email,
      subject: "感謝您的詢價 — 邁向未來已收到您的需求",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
