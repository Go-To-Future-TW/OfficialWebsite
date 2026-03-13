import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, type, budget, priceResult } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const priceText =
      priceResult === "consult"
        ? "需進一步諮詢"
        : `NT$ ${Number(priceResult.min).toLocaleString()} ~ ${Number(priceResult.max).toLocaleString()}`;

    const year = new Date().getFullYear();

    await transporter.sendMail({
      from: `"邁向未來" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "感謝您的詢價 — 邁向未來已收到您的需求",
      html: `
<!DOCTYPE html>
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
</html>
      `.trim(),
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
