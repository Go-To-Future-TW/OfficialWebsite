"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavbarProps } from "@/types/Navbar/Navbar";

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "首頁", href: "/" },
    { name: "關於我們", href: "/about" },
    { name: "精選案例", href: "/portfolio" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition group"
          >
            {props.logo && (
              <div className="w-9 h-9 relative rounded-full overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group-hover:scale-105 transition">
                <Image
                  src={props.logo}
                  alt={props.title || "Logo"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="font-bold text-xl text-[#1A1A1A] tracking-tight">
              {props.title || "Bityo"}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-black hover:bg-gray-50 rounded-md transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="/quote">
              <button type="button" className="bg-[#0E0E0E] text-white px-5 py-2.5 rounded-md font-bold text-sm hover:bg-[#383434] transition shadow-sm active:scale-95">
                專案估價
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-2 text-neutral-600 hover:text-black focus:outline-none"
            >
              {/* 漢堡 */}
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

      {isOpen && (
        <div className="fixed inset-0 z-60 bg-white flex flex-col animate-fade-in">
          {/* 關閉按鈕 */}
          <div className="flex justify-end p-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-neutral-500 hover:text-black transition"
            >
              {/* 叉叉 */}
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

          {/* 選單 */}
          <div className="flex flex-col items-center justify-center gap-8 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-neutral-800 hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/quote" onClick={() => setIsOpen(false)}>
              <button type="button" className="bg-[#0E0E0E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#383434] transition shadow-lg mt-4">
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
