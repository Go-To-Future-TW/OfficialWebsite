import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "隱私權政策 | 邁向未來",
  description: "邁向未來 隱私權政策與資料使用說明。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar title={SEO.About.title} logo={SEO.About.image} />

      <main className="max-w-3xl mx-auto px-6 py-20 text-[#1A1A1A]">
        <h1 className="text-3xl font-bold mb-8">隱私權政策</h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600">
          <section>
            <p>
              歡迎使用
              邁向未來（以下簡稱「我們」）。我們非常重視您的隱私權，本隱私權政策旨在說明我們如何收集、使用及保護您的個人資訊。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">
              1. 我們收集的資料
            </h2>
            <p>
              當您使用我們的「專案估價」或「聯絡我們」功能時，我們可能會要求您提供以下資訊：
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>您的稱呼 / 姓名</li>
              <li>電子郵件地址 (Email)</li>
              <li>專案需求描述與預算範圍</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">
              2. 資料使用目的
            </h2>
            <p>我們收集的資料僅用於以下用途：</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>評估您的專案需求並提供報價。</li>
              <li>與您進行業務聯繫與溝通。</li>
              <li>改善我們的網站服務體驗。</li>
            </ul>
            <p className="mt-2 font-bold">
              我們絕不會將您的個人資料販售或出租給第三方。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">3. 第三方服務</h2>
            <p>
              本網站使用 EmailJS
              第三方服務來傳送表單資訊。您的資料將透過加密連線傳輸，以確保資訊安全。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">4. 您的權利</h2>
            <p>
              您有權隨時要求查詢、更正或刪除我們所持有的您的個人資料。若您希望行使此權利，請透過
              Email 與我們聯繫。
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm">
              本政策最後更新日期：{new Date().getFullYear()} 年{" "}
              {new Date().getMonth() + 1} 月
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
