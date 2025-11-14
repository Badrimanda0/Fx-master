"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center py-4 bg-[rgba(190,219,255,0.18)]">
      <div className="flex w-full max-w-[1252px] py-[17px] px-[25px] items-center rounded-full border border-[rgba(226,232,240,0.60)] bg-[rgba(255,255,255,0.25)] shadow-[0_10px_15px_-3px_rgba(15,23,43,0.05),0_4px_6px_-4px_rgba(15,23,43,0.05)] backdrop-blur-md justify-between">

        {/* LEFT SECTION */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 relative">
            <Image
              src="/images/logo.png"
              alt="FXMaster Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-[19px] sm:text-[25px] text-[#0f172b]">
            FX Master
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-12 text-[17px] font-medium text-[#45556c]">
          {["Personal", "Business", "About Us", "Contact Us"].map((item, idx) => (
            <Link
              key={idx}
              href="#"
              className="relative hover:underline cursor-pointer transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* DESKTOP SIGNUP */}
          <button className="hidden lg:block px-5 py-2 rounded-[12px] bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] text-white text-[16px] font-medium shadow-[0_4px_10px_rgba(37,99,235,0.3)] hover:opacity-90 cursor-pointer transition">
            Signup
          </button>

          {/* MOBILE JOIN */}
          <button className="lg:hidden px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] text-white text-[16px] font-medium shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
            Join
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-white/40 cursor-pointer transition"
          >
            <Menu className="w-6 h-6 text-[#0f172b]" />
          </button>
        </div>
      </div>

      {/* MOBILE FULL BOX */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-h-[90vh] bg-white shadow-xl p-6 flex flex-col gap-6 animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[16px] text-[#0f172b]">Menu</span>
              <button onClick={() => setOpen(false)} className="cursor-pointer">
                <X className="w-6 h-6 text-[#0f172b]" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-[16px] font-medium text-[#45556c]">
              {["Personal", "Business", "About Us", "Contact Us"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="hover:underline cursor-pointer transition-all duration-300"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>

            <button className="mt-auto px-5 py-2 rounded-[12px] bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] text-white text-[16px] font-medium shadow-[0_4px_10px_rgba(37,99,235,0.3)] hover:opacity-90 cursor-pointer transition">
              Signup
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
