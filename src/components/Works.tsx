"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HowFXMasterWorks() {
  return (
    <section className="w-full pt-20 pb-17 bg-[#F6F9FF] flex justify-center relative">
      <div className="relative w-full max-w-[1200px] px-6 flex flex-col gap-14">
        {/* SECTION TITLE */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-white border border-gray-200 shadow flex items-center gap-2">
            <Image src="/images/graph.png" alt="Live Icon" width={16} height={16} />
            Live Market Data
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]">
            Fast Setup. Faster Payments.
          </h2>

          <p className="max-w-[640px] text-gray-600 text-sm sm:text-base">
            Helping you go from sign-up to first transfer in just a few clicks.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* LEFT IMAGE AREA */}
          <div className="relative flex justify-center items-center w-full lg:w-[580px]">
            <div className="relative w-full h-[480px] sm:h-[570px] lg:h-[590px] rounded-[16px] overflow-hidden shadow-xl">
              <Image
                src="/images/wt.png"
                alt="How FX Works"
                fill
                className="object-cover rounded-[16px]"
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE STEPS */}
          <div className="flex flex-col gap-4 w-full lg:w-[560px]">
            {/* STEP 1 */}
            <div className="flex flex-col gap-2 rounded-[12px] bg-white border border-gray-200 shadow-sm p-5 w-full">
              <div className="flex items-center gap-4">
                <div className="inline-flex w-[40px] h-[40px] justify-center items-center border border-[#C3BDBD66] bg-white/25 rounded-full shadow">
                  <Image src="/icons/w1.svg" width={22} height={22} alt="Transfer" />
                </div>
                <h3 className="text-[#0C1B35] text-[18px] font-semibold">
                  1. Enter Transfer Details
                </h3>
              </div>
              <p className="text-gray-700 text-sm pl-[64px]">
                Choose amount, currency & recipient location. See real exchange rates instantly.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col gap-2 rounded-[12px] bg-white border border-gray-200 shadow-sm p-5 w-full">
              <div className="flex items-center gap-4">
                <div className="inline-flex w-[40px] h-[40px] justify-center items-center border border-[#C3BDBD66] bg-white/25 rounded-full shadow">
                  <Image src="/icons/w2.svg" width={22} height={22} alt="Recipient" />
                </div>
                <h3 className="text-[#0C1B35] text-[18px] font-semibold">
                  2. Add Recipient Information
                </h3>
              </div>
              <p className="text-gray-700 text-sm pl-[64px]">
                Securely save recipient details with full bank-level encryption.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col gap-2 rounded-[12px] bg-white border border-gray-200 shadow-sm p-5 w-full">
              <div className="flex items-center gap-4">
                <div className="inline-flex w-[40px] h-[40px] justify-center items-center border border-[#C3BDBD66] bg-white/25 rounded-full shadow">
                  <Image src="/icons/w3.svg" width={22} height={22} alt="Track" />
                </div>
                <h3 className="text-[#0C1B35] text-[18px] font-semibold">
                  3. Confirm & Track
                </h3>
              </div>
              <p className="text-gray-700 text-sm pl-[64px]">
                Track your transfer in real-time with status updates until delivered.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="flex flex-col gap-2 rounded-[12px] bg-white border border-gray-200 shadow-sm p-5 w-full">
              <div className="flex items-center gap-4">
                <div className="inline-flex w-[40px] h-[40px] justify-center items-center border border-[#C3BDBD66] bg-white/25 rounded-full shadow">
                  <Image src="/icons/w1.svg" width={22} height={22} alt="Completed" />
                </div>
                <h3 className="text-[#0C1B35] text-[18px] font-semibold">
                  4. Transfer Completed
                </h3>
              </div>
              <p className="text-gray-700 text-sm pl-[64px]">
                Your funds reach the destination securely. Get instant confirmation of delivery.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-6 py-3 bg-[#163577] text-white rounded-xl font-medium shadow hover:bg-[#0f45c4] transition flex items-center justify-center gap-2">
                Start Transfer
                <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 border border-gray-400 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                View Exchange Rates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP/LAPTOP LEFT BOTTOM FLOATING ICON (md and up) */}
      <div
        className="hidden md:flex absolute left-[322px] bottom-[20px] flex justify-center items-center"
        style={{
          width: "108.424px",
          height: "105.61px",
          transform: "rotate(1.903deg)",
          padding: "14.921px 15.806px 13.796px 15.725px",
          borderRadius: "68.165px",
          border: "1.634px solid #fff",
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow:
            "0 32.677px 40.846px -8.169px rgba(0, 0, 0, 0.10), 0 13.071px 16.339px -9.803px rgba(0, 0, 0, 0.10)",
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/hi.png"
          alt="Floating Icon"
          className="w-full h-full object-contain"
          width={88}
          height={88}
        />
      </div>

      {/* MOBILE-ONLY FLOATING ICON (visible only on small screens) */}
      <div
        className="flex md:hidden absolute left-[-7px] bottom-[880px] justify-center items-center z-40"
        style={{
          width: "88px",
          height: "84px",
          transform: "rotate(1.903deg)",
          padding: "10px",
          borderRadius: "56px",
          border: "1.2px solid #fff",
          background: "rgba(255, 255, 255, 0.6)",
          boxShadow:
            "0 20px 26px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/hi.png"
          alt="Floating Icon Mobile"
          className="w-full h-full object-contain"
          width={72}
          height={72}
        />
      </div>
    </section>
  );
}
