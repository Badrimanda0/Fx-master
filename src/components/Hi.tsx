"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-b from-[#071226] to-[#09111a] text-gray-300"
      style={{
        fontFamily: 'var(--font-family-Font-1, "Bricolage Grotesque")',
      }}
    >
      {/* ===== Top Area ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
        {/* ===== FX Master Logo ===== */}
        <div className="flex items-center w-[170px] h-[30px]">
          <Image
            src="/images/white.png"
            alt="FX Master Logo"
            width={170}
            height={30}
            className="object-contain"
            priority
          />
        </div>

        {/* ===== Description ===== */}
        <p
          className="text-sm text-gray-400 leading-relaxed text-center max-w-md"
          style={{
            fontFamily: 'var(--font-family-Font-1, "Bricolage Grotesque")',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            color: "#B0B8C5",
          }}
        >
          The UK’s fastest payroll payment solution. Streamline international
          payroll with compliance, transparency, and dedicated support.
        </p>

        {/* ===== Social Icons ===== */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <Link
            href="https://www.instagram.com/fxmasterpayments/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 flex items-center justify-center bg-white/8 rounded-md hover:bg-white/16 transition"
          >
            <FaInstagram size={14} />
          </Link>
          <Link
            href="https://www.facebook.com/fxmasterpayments"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 flex items-center justify-center bg-white/8 rounded-md hover:bg-white/16 transition"
          >
            <FaFacebookF size={14} />
          </Link>
          <Link
            href="https://www.youtube.com/@FXMaster-uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 flex items-center justify-center bg-white/8 rounded-md hover:bg-white/16 transition"
          >
            <FaYoutube size={14} />
          </Link>
          <Link
            href="https://x.com/FX_Master_UK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-9 h-9 flex items-center justify-center bg-white/8 rounded-md hover:bg-white/16 transition"
          >
            <SiX size={14} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/fx-master-payments/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center bg-white/8 rounded-md hover:bg-white/16 transition"
          >
            <FaLinkedinIn size={14} />
          </Link>
        </div>
      </div>

      {/* ===== Divider + Bottom Bar ===== */}
      <div className="border-t border-gray-700">
        <div
          className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between text-gray-400 text-xs gap-2 sm:gap-0"
          style={{
            fontFamily: 'var(--font-family-Font-1, "Bricolage Grotesque")',
          }}
        >
          <p
            className="text-sm text-gray-400 text-center sm:text-left"
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#B0B8C5",
            }}
          >
            © 2024 FX Master Payroll. All rights reserved. Regulated by the
            FCA.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-sm text-gray-400 whitespace-nowrap text-center sm:text-left"
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#B0B8C5",
            }}
          >
            <span>Made in the UK</span>
            <span className="hidden sm:inline">•</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
