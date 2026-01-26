"use client";
import LoginBtn from "@/components/Button/LoginBtn";
import Input from "@/components/Input/Input";
import Link from "next/link";
import { useRef, useState } from "react";

const PRICING_RULES: Record<string, number> = {
  // 輕量級
  maintenance: 10000,
  design: 20000,
  landing: 25000,

  // 標準開發
  website: 50000,
  blog: 60000,
  api: 40000,

  // 大型系統
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
      { value: "design", label: "純 UI/UX 設計 (Figma)" }
    ],
  },
  {
    label: "標準開發服務",
    options: [
      { value: "website", label: "企業形象官網 (Corporate Site)" },
      { value: "blog", label: "部落格 / 內容管理系統 (CMS)" },
      { value: "api", label: "後端 API 開發 / 資料庫串接" },
      { value: "ai", label: "AI 應用 / Chatbot / 數據分析" }
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

const inputStyle =
  "text-sm font-normal leading-[22px] border-[1px] border-neutral-200 rounded-sm px-3 py-[9px] focus:outline-none focus:border-[#0E0E0E] focus:ring-[1px] w-full bg-white text-[#1A1A1A]";

const QuoteClient = () => {
  const formRef = useRef<HTMLFormElement>(null);

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

    if (basePrice > maxBudget) {
      return "consult";
    }

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

    // setTimeout(() => {
    //   const priceResult = calculateQuote();
    //   setResult(priceResult);

    //   const emailData = {
    //     ...formData,
    //     calculated_price:
    //       priceResult === "consult"
    //         ? "需人工評估 (預算低於行情)"
    //         : `${priceResult.min} ~ ${priceResult.max}`,
    //   };
    //   // 記得註冊Emailjs並替換這裡的ID
    //   emailjs.send("SERVICE_ID", "TEMPLATE_ID", emailData, "PUBLIC_KEY").then(
    //     (res) => console.log("Email sent:", res.text),
    //     (err) => console.error("Email failed:", err.text),
    //   );

    //   setStatus("success");
    // }, 1000);
  };

  return (
    <div className="bg-gray-50 text-[#1A1A1A] font-sans">

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
            專案開發詢價
          </h1>
          <p className="text-lg text-neutral-500">
            請選擇您的需求與預算，系統將提供初步評估建議。
          </p>
        </div>

        {status === "analyzing" && (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <div className="w-16 h-16 border-4 border-neutral-200 border-t-[#0E0E0E] rounded-full animate-spin mb-6"></div>
            <h3 className="text-2xl font-bold">正在分析需求複雜度...</h3>
          </div>
        )}

        {status === "success" && (
          <div className="bg-white p-8 rounded-lg shadow-xl border border-neutral-200 text-center animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-4">
              需求已送出
            </div>

            <h2 className="text-2xl font-bold mb-2">專案預估評級</h2>

            {result === "consult" ? (
              <div className="my-6 p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">
                  需要進一步諮詢
                </h3>
                <p className="text-neutral-600">
                  您選擇的功能需求較為複雜，建議由架構師針對細節進行客製化規劃，以符合您的預算效益。
                </p>
              </div>
            ) : (
              <div className="text-4xl font-black text-[#1A1A1A] my-6">
                NT$ {result.min.toLocaleString()} ~{" "}
                {result.max.toLocaleString()}
                <span className="block text-sm font-normal text-neutral-400 mt-2">
                  (此為系統依市價粗估，實際報價可視功能刪減調整)
                </span>
              </div>
            )}

            <div className="bg-gray-50 p-6 rounded text-left text-sm text-neutral-600 mb-8 mt-6">
              <h4 className="font-bold text-base mb-2 text-black">
                接下來我們會...
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  我們的資深工程師將檢視您的描述，尋找<strong>節省預算</strong>
                  或<strong>提升效益</strong>的可能性。
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
              className="text-neutral-500 hover:text-black underline"
            >
              填寫其他需求
            </button>
          </div>
        )}

        {status === "idle" && (
          <form
            ref={formRef}
            className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-bold text-[#1A1A1A]">
                  您的稱呼：
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="希望如何稱呼您？"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[#1A1A1A]">
                  聯絡 Email：
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="我們會寄送報價單至此信箱"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-bold text-[#1A1A1A]">
                  專案類型
                </label>
                <div className="relative">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    {PROJECT_TYPES.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="other">其他諮詢</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-bold text-[#1A1A1A]">
                  預算範圍
                </label>
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-bold text-[#1A1A1A]">
                需求描述
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputStyle} h-32 resize-none`}
                placeholder="請簡述您的想法，例如：我想做一個類似 Uber 的平台，或是需要協助維護現有網站..."
              ></textarea>
            </div>

            <div className="w-full flex justify-center pt-6">
              <LoginBtn label="取得報價與諮詢" onClick={handleSubmit} />
            </div>

            <p className="text-xs text-center text-neutral-400 mt-4">
              點擊按鈕即表示您已閱讀並同意
              <Link
                href="/privacy"
                target="_blank"
                className="underline hover:text-black mx-1 transition"
              >
                隱私權政策
              </Link>
              。
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default QuoteClient;