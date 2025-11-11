"use client";

import Image from "next/image";

export default function MobileAppSection() {
  return (
    <section className="w-full flex justify-center bg-gradient-to-b from-[#f9fbff] to-[#f3f6fa] py-20">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between px-6 gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="w-[736px] flex flex-col justify-center">

          {/* Heading with Centered Icon */}
          <div className="flex items-center mb-8 ml-4 gap-3">
            <div className="flex justify-center items-center w-[49px] h-[49px] rounded-[29px] flex-shrink-0 border border-[rgba(255,255,255,0.40)] bg-[rgba(255,255,255,0.25)] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]">
              <Image
                src="/icons/Vector.svg"
                alt="Available Icon"
                width={28}
                height={28}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Available on iOS & Android
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 max-w-[540px] mb-10 ml-4">
            Take control of your mortgage with our powerful mobile app. Track
            payments, view statements, and get instant updates wherever you are.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 ml-4">
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white shadow-sm border border-gray-100 w-[320px] h-[60px]">
              <Image src="/images/m1.png" alt="Icon" width={54} height={54} className="relative top-[4px]" />
              <p className="text-gray-800 font-medium text-base">Real-time notifications</p>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white shadow-sm border border-gray-100 w-[320px] h-[60px]">
              <Image src="/images/m2.png" alt="Icon" width={54} height={54} className="relative top-[4px]" />
              <p className="text-gray-800 font-medium text-base">Easy payment management</p>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white shadow-sm border border-gray-100 w-[320px] h-[60px]">
              <Image src="/images/m3.png" alt="Icon" width={54} height={54} className="relative top-[4px]" />
              <p className="text-gray-800 font-medium text-base">Secure authentication</p>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white shadow-sm border border-gray-100 w-[320px] h-[60px]">
              <Image src="/images/m4.png" alt="Icon" width={54} height={54} className="relative top-[4px]" />
              <p className="text-gray-800 font-medium text-base">Track your equity</p>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex flex-col items-center text-center mt-12">
            <p className="font-semibold text-gray-800 mb-4">Download The Free App from Our Store</p>

            {/* QR Code */}
            <Image src="/images/qr1.png" alt="QR Code" width={140} height={140} className="rounded-lg mb-8" />

            {/* Store Buttons */}
            <div className="flex flex-row items-center justify-center gap-8 mb-6">

              {/* Google Play */}
              <div className="inline-flex px-[12px] py-[10px] items-center gap-[12px] rounded-[12px] border-[1.56px] border-[#0D2040]">
                <Image src="/icons/Playstore.svg" alt="Playstore Icon" width={32.76} height={37.44} />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[15.6px] font-extrabold uppercase text-[#060707]">GET IT ON</span>
                  <span className="text-[16px] font-normal text-[#060707]">Google Play</span>
                </div>
              </div>

              {/* App Store */}
              <div className="inline-flex px-[12px] py-[10px] items-center gap-[12px] rounded-[12px] border-[1.56px] border-[#0D2040]">
                <Image src="/icons/Apple.svg" alt="Apple Icon" width={32.76} height={37.44} />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[11.6px] font-extrabold uppercase text-[#060707]">Download on the</span>
                  <span className="text-[16px] font-extrabold text-[#060707]">App Store</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE PHONE IMAGE */}
        <div
          className="relative flex items-center justify-center translate-x-6 -translate-y-6"
          style={{
            width: "460px",
            height: "760px",
            flexShrink: 0,
            aspectRatio: "313 / 678",
          }}
        >
          <Image
            src="/images/mb.png"
            alt="FXMaster Mobile App Preview"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
