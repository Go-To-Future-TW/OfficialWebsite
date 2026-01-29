"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { NavbarProps } from "@/types/Navbar/Navbar";

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "首頁", href: "/" },
    { name: "關於我們", href: "/about" },
    { name: "精選案例", href: "/portfolio" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition group"
          >
            {props.logo && (
              <div className="w-9 h-9 relative rounded-full overflow-hidden bg-neutral-800 border border-neutral-700 shadow-sm group-hover:scale-105 transition">
                <Image
                  src={props.logo}
                  alt={props.title || "Logo"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="font-bold text-xl text-white tracking-tight">
              {props.title || "Go to Future"}
            </span>
          </Link>

          {/* 電腦版選單 */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              {navLinks.map((link) => {
                // 判斷是否為當前頁面
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition 
                      ${
                        isActive
                          ? "text-white bg-white/10" // 當前頁面
                          : "text-neutral-400 hover:text-white hover:bg-white/5" // 不是當前頁面
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <Link href="/quote">
              <button
                type="button"
                className="bg-white text-black px-5 py-2.5 rounded-md font-bold text-sm hover:bg-neutral-200 transition shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95"
              >
                專案估價
              </button>
            </Link>
          </div>

          {/* 手機版漢堡按鈕 */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-2 text-white hover:text-neutral-300 focus:outline-none"
            >
              <span className="sr-only">開啟選單</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <title>開啟選單</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 手機版全螢幕選單 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col animate-fade-in">
          <div className="flex justify-end p-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-neutral-400 hover:text-white transition"
            >
              <span className="sr-only">關閉選單</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <title>關閉選單</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 mt-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold transition 
                    ${isActive ? "text-white scale-110" : "text-neutral-400 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link href="/quote" onClick={() => setIsOpen(false)}>
              <button
                type="button"
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition shadow-lg mt-4"
              >
                立即專案估價
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
