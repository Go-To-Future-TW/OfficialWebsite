import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策 | Go to future Development",
  description: "Go to future Development 隱私權政策與資料使用說明。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-black/96 text-neutral-300 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <main className="max-w-3xl mx-auto px-6 py-32 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">
          隱私權政策
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-10">
          <section>
            <p className="leading-relaxed">
              歡迎使用 <strong>Go to future Development</strong>
              （以下簡稱「我們」）。我們非常重視您的隱私權，本隱私權政策旨在說明我們如何收集、使用及保護您的個人資訊。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. 我們收集的資料
            </h2>
            <p className="mb-4">
              當您使用我們的「專案估價」或「聯絡我們」功能時，我們可能會要求您提供以下資訊：
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-400">
              <li>您的稱呼 / 姓名</li>
              <li>電子郵件地址 (Email)</li>
              <li>專案需求描述與預算範圍</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. 資料使用目的
            </h2>
            <p className="mb-4">我們收集的資料僅用於以下用途：</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-400">
              <li>評估您的專案需求並提供報價。</li>
              <li>與您進行業務聯繫與溝通。</li>
              <li>改善我們的網站服務體驗。</li>
            </ul>
            <p className="mt-4 font-bold text-white">
              我們絕不會將您的個人資料販售或出租給第三方。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. 第三方服務</h2>
            <p className="leading-relaxed">
              本網站使用 EmailJS
              第三方服務來傳送表單資訊。您的資料將透過加密連線傳輸，以確保資訊安全。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. 您的權利</h2>
            <p className="leading-relaxed">
              您有權隨時要求查詢、更正或刪除我們所持有的您的個人資料。若您希望行使此權利，請透過
              Email 與我們聯繫。
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-neutral-500">
              本政策最後更新日期：2026 年 1 月
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
