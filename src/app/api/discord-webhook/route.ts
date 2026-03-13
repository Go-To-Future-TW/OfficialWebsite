import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const { name, email, type, budget, priceText, message } =
      await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL is not set");
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 },
      );
    }

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            author: {
              name: "邁向未來 — 詢價系統",
            },
            title: "收到新的專案詢價",
            description: `**${name}** 提交了一份新的專案需求估價單。`,
            color: 0x5865f2,
            fields: [
              {
                name: "客戶稱呼",
                value: `\`${name}\``,
                inline: true,
              },
              {
                name: "聯絡信箱",
                value: `\`${email}\``,
                inline: true,
              },
              { name: "\u200b", value: "\u200b", inline: true },
              {
                name: "專案類型",
                value: type,
                inline: true,
              },
              {
                name: "預算範圍",
                value: budget,
                inline: true,
              },
              {
                name: "系統預估",
                value: `**${priceText}**`,
                inline: true,
              },
              {
                name: "需求描述",
                value:
                  message.length > 1000
                    ? `${message.slice(0, 1000)}...`
                    : message,
              },
            ],
            footer: {
              text: "Go To Future・自動通知",
            },
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Discord webhook error:", error);
    return NextResponse.json(
      { error: "Failed to send webhook" },
      { status: 500 },
    );
  }
}
