export default function BestTransferSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F0EDF9] to-white flex justify-center py-10 md:py-14">
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center text-center px-4">

        {/* Responsive Heading */}
        <h2 className="font-urbanist font-bold text-[26px] sm:text-[30px] md:text-[36px] leading-[130%] mb-2">
          <span className="text-[#394784]">Why </span>
          <span className="text-[#1A54CF]">Best Transfer?</span>
        </h2>

        {/* Subheading */}
        <p className="text-sm sm:text-base text-[#6F7287] mb-10 sm:mb-12 max-w-[600px]">
          The Most Secure Way to Trade Crypto and Transfer Money Worldwide
        </p>

        {/* Feature section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14 lg:gap-16 mb-12">

          {/* Feature 1 */}
          <div
            className="
              group flex flex-col items-center justify-center
              px-4 py-4
              relative rounded-2xl transition-all duration-300
              h-[180px] sm:h-[190px] md:h-[200px]
              hover:bg-[#F3F6FF] hover:shadow-md hover:-translate-y-1
              w-full sm:w-auto
            "
          >
            {/* ICON */}
            <div className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] p-[8px] rounded-[12px] bg-white shadow-md flex justify-center items-center mt-2 mb-2">
              <span className="text-lg sm:text-xl">🛡️</span>
            </div>

            <h3 className="text-base sm:text-lg font-medium mb-1">Bank level Security</h3>

            <p className="text-[#6F7287] text-xs sm:text-sm text-center max-w-[220px]">
              KYC, 2FA, encryption & monitoring to keep your assets safe.
            </p>
          </div>

          {/* Divider — Hidden on mobile */}
          <div className="hidden md:block h-[100px] border-r border-[#d9d9d993]" />

          {/* Feature 2 */}
          <div
            className="
              group flex flex-col items-center justify-center
              px-4 py-4
              relative rounded-2xl transition-all duration-300
              h-[180px] sm:h-[190px] md:h-[200px]
              hover:bg-[#FFF9E8] hover:shadow-md hover:-translate-y-1
              w-full sm:w-auto
            "
          >
            {/* ICON */}
            <div className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] p-[10px] rounded-[12px] bg-white shadow-md flex justify-center items-center mt-2 mb-2">
              <span className="text-lg sm:text-xl">⚡</span>
            </div>

            <h3 className="text-base sm:text-lg font-medium mb-1">Instant Global Transfers</h3>

            <p className="text-[#6F7287] text-xs sm:text-sm text-center max-w-[230px]">
              Send or receive money worldwide in seconds—no complexity.
            </p>
          </div>

          {/* Divider — Hidden on mobile */}
          <div className="hidden md:block h-[100px] border-r border-[#d9d9d993]" />

          {/* Feature 3 */}
          <div
            className="
              group flex flex-col items-center justify-center
              px-4 py-4
              relative rounded-2xl transition-all duration-300
              h-[180px] sm:h-[190px] md:h-[200px]
              hover:bg-[#EFFFF3] hover:shadow-md hover:-translate-y-1
              w-full sm:w-auto
            "
          >
            {/* ICON */}
            <div className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] p-[8px] rounded-[12px] bg-white shadow-md flex justify-center items-center mt-2 mb-2">
              <span className="text-lg sm:text-xl">💳</span>
            </div>

            <h3 className="text-base sm:text-lg font-medium mb-1">Transparent Pricing</h3>

            <p className="text-[#6F7287] text-xs sm:text-sm text-center max-w-[220px]">
              No hidden charges—you always know what you're paying for.
            </p>
          </div>

        </div>

        {/* Text Above Button */}
        <p className="text-[#394784] font-urbanist font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[130%] max-w-[500px] text-center mb-6">
          Create account and Explore Best Transfer
        </p>

        {/* BUTTON (Responsive + Arrow Appears on Hover) */}
        <button
          className="
            group flex items-center justify-center
            py-3 px-6 sm:px-8
            rounded-[28px]
            border border-[#194DA8]
            bg-[#1A54CF]
            text-white text-sm sm:text-base font-semibold
            shadow-md transition-all duration-300
            hover:bg-[#1546b5] hover:shadow-lg hover:scale-[1.03]
          "
        >
          <span className="flex items-center justify-center gap-2 w-[120px] sm:w-[140px]">
            <span>Sign Up Now</span>

            <span
              className="
                text-lg opacity-0 translate-x-[-6px]
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-x-1
              "
            >
              →
            </span>
          </span>
        </button>

      </div>
    </section>
  );
}
