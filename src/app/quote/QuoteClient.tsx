"use client";

import { useRef, useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";

// import emailjs from "@emailjs/browser";

const PRICING_RULES: Record<string, number> = {
  maintenance: 10000,
  design: 20000,
  landing: 25000,
  website: 50000,
  blog: 60000,
  api: 40000,
  ecommerce: 150000,
  system: 250000,
  saas: 400000,
  app: 250000,
  ai: 80000,
  other: 10000,
};

const BUDGET_MULTIPLIER: Record<string, number> = {
  "1-5w": 0.8,
  "5-10w": 1.0,
  "10-30w": 1.2,
  "30-50w": 1.4,
  "50-100w": 1.6,
  "100w+": 2.0,
};

const BUDGET_CAP: Record<string, number> = {
  "1-5w": 50000,
  "5-10w": 100000,
  "10-30w": 300000,
  "30-50w": 500000,
  "50-100w": 1000000,
  "100w+": 99999999,
};

const PROJECT_TYPES = [
  {
    label: "輕量級服務 (快速交付)",
    options: [
      { value: "maintenance", label: "輕量網站維運 / Bug修復" },
      { value: "landing", label: "一頁式活動網頁 (Landing Page)" },
      { value: "design", label: "純 UI/UX 設計 (Figma)" },
    ],
  },
  {
    label: "標準開發服務",
    options: [
      { value: "website", label: "企業形象官網 (Corporate Site)" },
      { value: "blog", label: "部落格 / 內容管理系統 (CMS)" },
      { value: "api", label: "後端 API 開發 / 資料庫串接" },
      { value: "ai", label: "AI 應用 / Chatbot / 數據分析" },
    ],
  },
  {
    label: "大型系統開發",
    options: [
      { value: "ecommerce", label: "電商平台 (E-Commerce)" },
      { value: "system", label: "企業內部系統 (ERP/CRM)" },
      { value: "saas", label: "SaaS 軟體產品開發" },
      { value: "app", label: "雙平台 App (iOS/Android)" },
    ],
  },
];

const BUDGET_OPTIONS = [
  { value: "1-5w", label: "1 - 5 萬 (微型專案/小調整)" },
  { value: "5-10w", label: "5 - 10 萬 (小型專案/MVP)" },
  { value: "10-30w", label: "10 - 30 萬 (標準商業版)" },
  { value: "30-50w", label: "30 - 50 萬 (進階客製版)" },
  { value: "50-100w", label: "50 - 100 萬 (中大型平台)" },
  { value: "100w+", label: "100 萬以上 (企業級方案)" },
];

const darkInputStyle =
  "text-sm font-normal leading-[22px] border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 w-full bg-neutral-900/50 text-white placeholder:text-neutral-600 transition duration-200";

const QuoteClient = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [showPrivacy, setShowPrivacy] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "maintenance",
    budget: "1-5w",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "analyzing" | "success" | "error"
  >("idle");
  const [result, setResult] = useState<
    { min: number; max: number } | "consult"
  >("consult");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateQuote = () => {
    const basePrice = PRICING_RULES[formData.type] || 20000;
    const multiplier = BUDGET_MULTIPLIER[formData.budget] || 1;
    const maxBudget = BUDGET_CAP[formData.budget] || 99999999;

    if (basePrice > maxBudget) return "consult";

    const estimate = basePrice * multiplier;
    const roundTo = estimate < 50000 ? 1000 : 10000;
    const min = Math.round((estimate * 0.9) / roundTo) * roundTo;
    const max = Math.round((estimate * 1.5) / roundTo) * roundTo;

    return { min, max };
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("請填寫完整資訊");
      return;
    }

    setStatus("analyzing");

    setTimeout(() => {
      const priceResult = calculateQuote();
      setResult(priceResult);
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden font-sans">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* --- 隱私權政策彈窗 (Modal) --- */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
            onClick={() => setShowPrivacy(false)}
            aria-label="Close modal"
          />

          <div className="relative bg-[#111] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl pointer-events-auto">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#151515] rounded-t-3xl">
              <h2 className="text-xl font-bold text-white">隱私權政策</h2>
              <button
                type="button"
                onClick={() => setShowPrivacy(false)}
                className="p-2 text-neutral-400 hover:text-white transition rounded-full hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <title>Close</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto text-neutral-300 space-y-6 leading-relaxed custom-scrollbar">
              <p>
                歡迎使用 <strong>Go to future Development</strong>
                （以下簡稱「我們」）。我們非常重視您的隱私權，本隱私權政策旨在說明我們如何收集、使用及保護您的個人資訊。
              </p>

              <section>
                <h3 className="text-white font-bold text-lg mb-2">
                  1. 我們收集的資料
                </h3>
                <p>
                  當您使用我們的「專案估價」或「聯絡我們」功能時，我們可能會要求您提供以下資訊：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-400">
                  <li>您的稱呼 / 姓名</li>
                  <li>電子郵件地址 (Email)</li>
                  <li>專案需求描述與預算範圍</li>
                </ul>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg mb-2">
                  2. 資料使用目的
                </h3>
                <p>我們收集的資料僅用於以下用途：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-400">
                  <li>評估您的專案需求並提供報價。</li>
                  <li>與您進行業務聯繫與溝通。</li>
                  <li>改善我們的網站服務體驗。</li>
                </ul>
                <p className="mt-2 text-white font-bold">
                  我們絕不會將您的個人資料販售或出租給第三方。
                </p>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg mb-2">
                  3. 第三方服務
                </h3>
                <p>
                  本網站使用 EmailJS
                  第三方服務來傳送表單資訊。您的資料將透過加密連線傳輸，以確保資訊安全。
                </p>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg mb-2">
                  4. 您的權利
                </h3>
                <p>
                  您有權隨時要求查詢、更正或刪除我們所持有的您的個人資料。若您希望行使此權利，請透過
                  Email 與我們聯繫。
                </p>
              </section>

              <section className="pt-4 border-t border-white/10 mt-4">
                <p className="text-sm text-neutral-500">
                  本政策最後更新日期：2026 年 1 月
                </p>
              </section>
            </div>

            <div className="p-6 border-t border-white/10 bg-[#151515] rounded-b-3xl flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacy(false)}
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition shadow-lg active:scale-95"
              >
                我已閱讀並了解
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- 主畫面內容 --- */}
      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white bg-clip-text bg-linear-to-b from-neutral-50 to-neutral-400">
            專案開發詢價
          </h1>
          <p className="text-lg text-neutral-400">
            請選擇您的需求與預算，AI 系統將為您提供初步評估建議。
          </p>
        </div>

        {status === "analyzing" && (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse bg-neutral-900/40 border border-white/5 rounded-3xl backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-neutral-700 border-t-white rounded-full animate-spin mb-6" />
            <h3 className="text-2xl font-bold text-white">
              正在分析需求複雜度...
            </h3>
          </div>
        )}

        {status === "success" && (
          <div className="bg-neutral-900/80 p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10 text-center animate-fade-in-up backdrop-blur-md">
            <div className="inline-block px-4 py-1 bg-green-900/30 text-green-400 border border-green-800 rounded-full text-sm font-bold mb-6">
              需求已送出
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">專案預估評級</h2>

            {result === "consult" ? (
              <div className="my-8 p-8 bg-black/40 rounded-2xl border border-dashed border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  需要進一步諮詢
                </h3>
                <p className="text-neutral-400">
                  您選擇的功能需求較為複雜，建議由架構師針對細節進行客製化規劃，以符合您的預算效益。
                </p>
              </div>
            ) : (
              <div className="my-8">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-neutral-400">
                  NT$ {result.min.toLocaleString()} ~{" "}
                  {result.max.toLocaleString()}
                </div>
                <span className="block text-sm font-normal text-neutral-500 mt-4">
                  (此為系統依市價粗估，實際報價可視功能刪減調整)
                </span>
              </div>
            )}

            <div className="bg-white/5 p-8 rounded-2xl text-left text-sm text-neutral-300 mb-10 border border-white/5">
              <h4 className="font-bold text-base mb-4 text-white">
                🚀 接下來我們會...
              </h4>
              <ul className="list-disc pl-5 space-y-2 marker:text-neutral-500">
                <li>
                  資深工程師將檢視您的描述，尋找<strong>節省預算</strong>或
                  <strong>提升效益</strong>的可能性。
                </li>
                <li>若有需要，我們會透過 Email 與您確認規格細節。</li>
                <li>
                  <strong>24 小時內</strong>，您將收到詳細的規劃建議書。
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="text-neutral-500 hover:text-white underline transition"
            >
              填寫其他需求
            </button>
          </div>
        )}

        {status === "idle" && (
          <form
            ref={formRef}
            className="bg-neutral-900/40 p-8 md:p-10 rounded-3xl shadow-xl border border-white/10 space-y-8 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-neutral-300 ml-1"
                >
                  您的稱呼
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="希望如何稱呼您？"
                  className={darkInputStyle}
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-neutral-300 ml-1"
                >
                  聯絡 Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="我們會寄送報價單至此信箱"
                  className={darkInputStyle}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label
                  htmlFor="type"
                  className="text-sm font-bold text-neutral-300 ml-1"
                >
                  專案類型
                </label>
                <div className="relative">
                  <select
                    name="type"
                    id="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={`${darkInputStyle} appearance-none`}
                  >
                    {PROJECT_TYPES.map((group) => (
                      <optgroup
                        key={group.label}
                        label={group.label}
                        className="bg-black text-white"
                      >
                        {group.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="other" className="bg-black">
                      其他諮詢
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="budget"
                  className="text-sm font-bold text-neutral-300 ml-1"
                >
                  預算範圍
                </label>
                <div className="relative">
                  <select
                    name="budget"
                    id="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${darkInputStyle} appearance-none`}
                  >
                    {BUDGET_OPTIONS.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-black text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-sm font-bold text-neutral-300 ml-1"
              >
                需求描述
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className={`${darkInputStyle} h-40 resize-none`}
                placeholder="請簡述您的想法，例如：我想做一個類似 Uber 的平台，或是需要協助維護現有網站..."
              />
            </div>

            <div className="w-full flex justify-center pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 w-full md:w-auto"
              >
                取得報價與諮詢
              </button>
            </div>

            <p className="text-xs text-center text-neutral-500 mt-4">
              點擊按鈕即表示您已閱讀並同意
              <button
                type="button"
                onClick={() => setShowPrivacy(true)}
                className="underline hover:text-white mx-1 transition outline-none cursor-pointer"
              >
                隱私權政策
              </button>
              。
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteClient;
