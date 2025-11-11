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

          {/* Left Section */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 relative">
              <Image
                src="/images/fx.png"
                alt="FXMaster Logo"
                fill
                className="object-contain"
              />
            </div>

            <span className="hidden sm:block font-semibold text-[20px] text-[#0f172b]">
              FX Master
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12 text-[17px] font-medium text-[#45556c]">
            <Link
              href="#"
              className="border-b border-black font-semibold bg-gradient-to-r from-[#155dfc] to-[#f54900] text-transparent bg-clip-text"
            >
              Personal
            </Link>

            <Link href="#" className="hover:nav-hover">Business</Link>
            <Link href="#" className="hover:nav-hover">About Us</Link>
            <Link href="#" className="hover:nav-hover">Contact Us</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Desktop Signup */}
            <button className="hidden lg:block px-5 py-2 rounded-full bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] text-white text-sm font-medium shadow-[0_4px_10px_rgba(37,99,235,0.3)] hover:opacity-90 transition">
              Signup
            </button>

            {/* Mobile Join */}
            <button className="lg:hidden px-4 py-2 rounded-full bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] text-white text-xs font-medium shadow-[0_4px_10px_rgba(37,99,235,0.3)]">
              Join
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-white/40 transition"
            >
              <Menu className="w-6 h-6 text-[#0f172b]" />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-[260px] h-full bg-white shadow-xl p-6 flex flex-col gap-6 animate-slideIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg text-[#0f172b]">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X className="w-6 h-6 text-[#0f172b]" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-[15px] font-medium text-[#45556c]">
                <Link href="#" className="mobile-link">Personal</Link>
                <Link href="#" className="mobile-link">Business</Link>
                <Link href="#" className="mobile-link">About Us</Link>
                <Link href="#" className="mobile-link">Contact Us</Link>
              </nav>

              <button className="mt-auto px-5 py-2 rounded-full bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] text-white text-sm font-medium shadow-[0_4px_10px_rgba(37,99,235,0.3)] hover:opacity-90 transition">
                Signup
              </button>
            </div>
          </div>
        )}
      </header>
    );
  }
