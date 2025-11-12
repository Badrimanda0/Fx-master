"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HowFXMasterWorks() {
  return (
    <section className="w-full py-20 bg-[#F6F9FF] flex justify-center">
      <div className="relative w-full max-w-[1200px] px-6 flex flex-col gap-14">

        {/* SECTION TITLE */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-white border border-gray-200 shadow flex items-center gap-2">
            <Image src="/images/icon.png" alt="Live Icon" width={16} height={16} />
            Live Market Data
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]">
            How FX Master Works
          </h2>

          <p className="max-w-[640px] text-gray-600 text-sm sm:text-base">
            Get the best exchange rates with zero markup. Our rates are updated every minute and always reflect the real mid-market value.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12">

          {/* LEFT IMAGE AREA */}
          <div className="relative flex justify-center items-center w-full lg:w-[593px] h-auto">
            {/* Background Image */}
            <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[568px] rounded-[16px] overflow-hidden shadow-xl">
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
          <div className="flex flex-col gap-6 w-full lg:w-[612px]">

            {/* STEP 1 */}
            <div className="flex flex-col gap-4 rounded-[16px] bg-white border border-gray-200 shadow-sm p-6 w-full">
              <div className="flex items-center gap-5">
                <div className="inline-flex w-[39px] h-[39px] justify-center items-center border border-[#C3BDBD66] bg-white/25 rounded-[29px] shadow">
                  <Image src="/icons/w1.svg" width={26} height={26} alt="Transfer" />
                </div>
                <h3 className="text-[#0C1B35] text-[20px] pl-[20px] font-bold leading-[30px]">
                  1. Enter Transfer Details
                </h3>
              </div>
              <p className="text-gray-600 text-sm pl-[90px]">
                Choose amount, currency & recipient location. See real exchange rates instantly with zero markup.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col gap-4 rounded-[16px] bg-white border border-gray-200 shadow-sm p-6 w-full">
              <div className="flex items-center gap-5">
                <div className="inline-flex w-[49px] h-[49px] justify-center items-center border border-[#C3BDBD66] bg-white/25 rounded-[29px] shadow">
                  <Image src="/icons/w2.svg" width={26} height={26} alt="Recipient" />
                </div>
                <h3 className="text-[#0C1B35] text-[20px] pl-[20px] font-bold leading-[30px]">
                  2. Add Recipient Information
                </h3>
              </div>
              <p className="text-gray-600 text-sm pl-[90px]">
                Securely save recipient details with full bank-level encryption.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col gap-4 rounded-[16px] bg-white border border-gray-200 shadow-sm p-6 w-full">
              <div className="flex items-center gap-8">
                <div className="inline-flex w-[49px] h-[49px] justify-center items-center border border-[#C3BDBD66] bg-white/25 rounded-[29px] shadow">
                  <Image src="/icons/w3.svg" width={26} height={26} alt="Track" />
                </div>
                <h3 className="text-[#0C1B35] text-[20px] pl-[10px] font-bold leading-[50px]">
                  3. Confirm & Track
                </h3>
              </div>
              <p className="text-gray-600 text-sm pl-[90px]">
                Track your transfer in real-time with status updates until delivered.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
    </section>
  );
}
