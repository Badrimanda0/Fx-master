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
            <Image src="/icons/S1.svg" alt="Security badge" width={28} height={28} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D2338]">
            Your Security. Our Core Commitment. 
          </h2>

          <p className="max-w-[760px] text-sm sm:text-base text-gray-500">
             Every transfer you make through FX Master is shielded by enterprise-grade protection and global compliance standards We combine encryption, regulatory oversight, and 24/7 monitoring to safeguard your funds and data, always. 
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-lg bg-gradient-to-br from-[#2B7FFF] to-[#385DB8] shadow-lg flex-shrink-0">
              <Image src="/images/C3.png" alt="Bank-level encryption" width={78} height={78} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">FCA Authorized & Regulated</h3>
              <p className="mt-1 text-sm text-gray-500">
                ully compliant with UK financial regulations
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-lg bg-gradient-to-br from-[#2B7FFF] to-[#385DB8] shadow-lg flex-shrink-0">
              <Image src="/images/C4.png" alt="Secure data storage" width={78} height={78} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">Full Encryption</h3>
              <p className="mt-1 text-sm text-gray-500">
               Every transaction is protected with bank-grade encryption.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-lg bg-gradient-to-br from-[#2B7FFF] to-[#385DB8] shadow-lg flex-shrink-0">
              <Image src="/images/C5.png" alt="Privacy first" width={78} height={78} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">Fraud Prevention & Monitoring</h3>
              <p className="mt-1 text-sm text-gray-500">
               24/7 intelligent monitoring to detect and prevent fraud.  
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,43,0.06)] border border-[#EEF3F8]">
            <div className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-lg bg-gradient-to-br from-[#2B7FFF] to-[#385DB8] shadow-lg flex-shrink-0">
              <Image src="/images/C6.png" alt="Compliant and certified" width={78} height={78} />
            </div>
            <div>
              <h3 className="text-[#0D2338] font-semibold text-base">Licensed & Compliant</h3>
              <p className="mt-1 text-sm text-gray-500">
                Adhering to KYC, AML, and PCI DSS standards for every
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Centered Feature Strip */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl border border-[#c7ced6] shadow-sm px-8 py-8 flex flex-wrap justify-center gap-12 text-sm text-gray-800 font-medium w-full max-w-[1200px]">
            {/* SOC 2 */}
            <div className="flex flex-col items-center">
              <div>Bank-Grade</div>
              <div className="text-xs text-gray-700">
Encryption </div>
            </div>

            <div className="hidden md:block h-6 border-l border-gray-200" />

            {/* 256-bit SSL */}
            <div className="flex flex-col items-center">
              <div>24/7</div>
              <div className="text-xs text-gray-700">Fraud Alerts</div>
            </div>

            <div className="hidden md:block h-6 border-l border-gray-200" />

            {/* CFPB */}
            <div className="flex flex-col items-center">
              <div>Global</div>
              <div className="text-xs text-gray-700">Compliance</div>
            </div>

            <div className="hidden md:block h-6 border-l border-gray-200" />

            {/* 24/7 Monitoring */}
            <div className="flex flex-col items-center">
              <div>Real Time</div>
              <div className="text-xs text-gray-700">Tarcking</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
