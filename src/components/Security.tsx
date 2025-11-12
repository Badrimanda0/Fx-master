"use client";

import Image from "next/image";

export default function SecuritySection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f7fbff] via-[#f6f9ff] to-[#ffffff] py-20">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <div
            className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-full bg-white border border-gray-100 shadow-[0_8px_20px_rgba(12,27,53,0.06)]"
          >
            <Image src="/icons/a1.svg" alt="Security badge" width={28} height={28} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D2338]">
            Your Security is Our Priority
          </h2>

          <p className="max-w-[760px] text-sm sm:text-base text-gray-500">
            We employ industry-leading security measures to keep your information safe.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-lg bg-white shadow-sm border border-[#E6EEF6]">
              <Image src="/images/s1.png" alt="Bank-level encryption" width={24} height={24} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">Bank-Level Encryption</h3>
              <p className="mt-1 text-sm text-gray-500">
                256-bit SSL encryption protects all your sensitive data with military-grade security.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-lg bg-white shadow-sm border border-[#E6EEF6]">
              <Image src="/icons/a1.svg" alt="Secure data storage" width={24} height={24} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">Secure Data Storage</h3>
              <p className="mt-1 text-sm text-gray-500">
                Your information is stored in SOC 2 certified data centers with 24/7 monitoring.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-lg bg-white shadow-sm border border-[#E6EEF6]">
              <Image src="/icons/a1.svg" alt="Privacy first" width={24} height={24} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">Privacy First</h3>
              <p className="mt-1 text-sm text-gray-500">
                We never share your personal information without your explicit consent.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-lg bg-white shadow-sm border border-[#E6EEF6]">
              <Image src="/icons/a1.svg" alt="Compliant and certified" width={24} height={24} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">Compliant & Certified</h3>
              <p className="mt-1 text-sm text-gray-500">
                Fully compliant with federal lending regulations and industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Centered Feature Strip */}
        <div className="flex justify-center">
  <div className="bg-white rounded-2xl border border-[#EEF3F8] shadow-sm px-8 py-8 flex flex-wrap justify-center gap-12 text-sm text-gray-800 font-medium w-full max-w-[1200px]">

    {/* SOC 2 */}
    <div className="flex flex-col items-center">
      <div>SOC 2 Certified</div>
      <div className="text-xs text-gray-700">Type II Compliant</div>
    </div>

    <div className="hidden md:block h-6 border-l border-gray-200" />

    {/* 256-bit SSL */}
    <div className="flex flex-col items-center">
      <div>256-bit SSL</div>
      <div className="text-xs text-gray-700">AES Encryption</div>
    </div>

    <div className="hidden md:block h-6 border-l border-gray-200" />

    {/* CFPB */}
    <div className="flex flex-col items-center">
      <div>CFPB Compliant</div>
      <div className="text-xs text-gray-700">Regulated Standard</div>
    </div>

    <div className="hidden md:block h-6 border-l border-gray-200" />

    {/* 24/7 Monitoring */}
    <div className="flex flex-col items-center">
      <div>24/7 Monitoring</div>
      <div className="text-xs text-gray-700">Real-Time Alerts</div>
    </div>

  </div>
</div>


      </div>
    </section>
  );
}
