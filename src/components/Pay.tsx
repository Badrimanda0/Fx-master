"use client";

export default function ThreeFeatureBoxes() {
  return (
    <section className="w-full flex justify-center py-20">
      {/* OUTER WRAPPER 1280px */}
      <div className="flex w-[1280px] justify-center items-start gap-[120px]">

        {/* BOX 1 */}
        <div className="flex flex-col justify-center items-center gap-[32px] pt-[32px] pb-[24px]">
          <div className="w-[64px] h-[64px] rounded-[16px] bg-white shadow-md flex justify-center items-center">
            <img src="/icons/security.svg" className="w-[32px]" />
          </div>
          <h3 className="text-[#394784] font-semibold text-[20px] font-['Urbanist'] text-center">
            Bank Level Security
          </h3>
          <p className="text-[#7983AD] text-center text-[16px] leading-[26px]">
            KYC, 2FA, encryption & monitoring 24/7.
          </p>
        </div>

        {/* ⭐ DIVIDER 1 (1px × 132px) ⭐ */}
        <div className="w-[1px] h-[132px] bg-[#D9D9D9]"></div>

        {/* BOX 2 */}
        <div className="flex flex-col justify-center items-center gap-[32px] pt-[32px] pb-[24px]">
          <div className="w-[64px] h-[64px] rounded-[16px] bg-white shadow-md flex justify-center items-center">
            <img src="/icons/transfer.svg" className="w-[32px]" />
          </div>
          <h3 className="text-[#394784] font-semibold text-[20px] font-['Urbanist'] text-center">
            Instant Global Transfers
          </h3>
          <p className="text-[#7983AD] text-center text-[16px] leading-[26px]">
            Send & receive funds worldwide in seconds.
          </p>
        </div>

        {/* ⭐ DIVIDER 2 (1px × 132px) ⭐ */}
        <div className="w-[1px] h-[132px] bg-[#D9D9D9]"></div>

        {/* BOX 3 */}
        <div className="flex flex-col justify-center items-center gap-[32px] pt-[32px] pb-[24px]">
          <div className="w-[64px] h-[64px] rounded-[16px] bg-white shadow-md flex justify-center items-center">
            <img src="/icons/fees.svg" className="w-[32px]" />
          </div>
          <h3 className="text-[#394784] font-semibold text-[20px] font-['Urbanist'] text-center">
            Low Fees & Transparent Pricing
          </h3>
          <p className="text-[#7983AD] text-center text-[16px] leading-[26px]">
            Zero hidden fees. Clear price breakdown.
          </p>
        </div>

      </div>
    </section>
  );
}
