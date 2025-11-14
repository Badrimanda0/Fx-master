"use client";

import Image from "next/image";

export default function MobileAppSection() {
  return (
    <section className="w-full flex justify-center bg-gradient-to-b from-[#f9fbff] to-[#f3f6fa] py-3 sm:py-12">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 gap-6 lg:gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="w-full lg:w-[736px] flex flex-col justify-start relative">

          {/* HEADING + ICON */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 ml-0 sm:ml-4 gap-4 sm:gap-3 relative">

            {/* ICON */}
            <div
              className="
                flex justify-center items-center
                w-[50px] h-[50px] sm:w-[49px] sm:h-[49px]
                rounded-[29px]
                border border-[rgba(255,255,255,0.40)]
                bg-[rgba(255,255,255,0.25)]
                shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]
                mx-auto sm:mx-0
                sm:absolute sm:-left-[70px] sm:-top-1
                z-50
              "
            >
              <Image
                src="/icons/Vector.svg"
                alt="Available Icon"
                width={28}
                height={28}
                className="w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] object-contain relative top-[5px]"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-2 sm:mt-0">
              Available on iOS & Android
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 max-w-[740px] mb-18 sm:mb-10 ml-0 sm:ml-2 text-[17px] sm:text-[18px] text-center sm:text-left">
            Take your global payments on the go with the FX Master app. Send, receive, and track your international transfers in real time, all from your phone. Manage your wallets, access live FX rates, and stay in control of your money 24/7.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-19 ml-0 sm:ml-4">
            {[
              { img: "/images/m1.png", text: "Real-time notifications" },
              { img: "/images/m2.png", text: "Easy payment management" },
              { img: "/images/m3.png", text: "Secure authentication" },
              { img: "/images/m4.png", text: "Track your equity" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white shadow-sm border border-gray-100 w-full sm:w-[320px] h-[60px] mx-auto sm:mx-0"
              >
                <Image
                  src={feature.img}
                  alt="Feature Icon"
                  width={48}
                  height={48}
                  className="relative top-[2px] sm:top-[4px] w-[44px] h-[44px] sm:w-[54px] sm:h-[54px]"
                />
                <p className="text-gray-800 font-medium text-[14.5px] sm:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* DOWNLOAD SECTION */}
          <div className="flex flex-col items-center text-center mt-6 sm:mt-8">
            <p className="font-semibold text-gray-800 mb-4 text-[15px] sm:text-base">
             Download the FX Master App, your Global Wallet Starts Here. 
            </p>

            {/* QR CODE */}
            <Image
              src="/images/qr1.png"
              alt="QR Code"
              width={120}
              height={120}
              className="rounded-lg mb-4 sm:mb-6"
            />

            {/* STORE BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">

              {/* GOOGLE PLAY */}
              <div className="inline-flex px-[12px] py-[10px] items-center gap-[10px] sm:gap-[12px] rounded-[12px] border-[1.56px] border-[#0D2040]">
                <Image
                  src="/icons/Playstore.svg"
                  alt="Playstore Icon"
                  width={28}
                  height={30}
                  className="sm:w-[32.76px] sm:h-[37.44px]"
                />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[13px] sm:text-[15.6px] font-extrabold uppercase text-[#060707]">
                    GET IT ON
                  </span>
                  <span className="text-[14px] sm:text-[16px] font-normal text-[#060707]">
                    Google Play
                  </span>
                </div>
              </div>

              {/* APP STORE */}
              <div className="inline-flex px-[12px] py-[10px] items-center gap-[10px] sm:gap-[12px] rounded-[12px] border-[1.56px] border-[#0D2040]">
                <Image
                  src="/icons/Apple.svg"
                  alt="Apple Icon"
                  width={28}
                  height={30}
                  className="sm:w-[32.76px] sm:h-[37.44px]"
                />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] sm:text-[11.6px] font-extrabold uppercase text-[#060707]">
                    Download on the
                  </span>
                  <span className="text-[14px] sm:text-[16px] font-extrabold text-[#060707]">
                    App Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE PHONE IMAGE */}
        <div
          className="relative flex items-center justify-center
            w-[320px] sm:w-[420px] lg:w-[460px]  /* increased mobile width */
            aspect-[260/550]  /* slightly taller */
            -translate-y-10 sm:-translate-y-12 lg:-translate-y-12 lg:translate-x-6"
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
