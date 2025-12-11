export default function CryptoSupportSection() {
  const icons = [
    "/btc.svg",
    "/ava.svg",
    "/eth.svg",
    "/ppt.svg",
    "/xlm.svg",
    "/miota.svg",
    "/neo.svg",
    "/dot.svg",
    "/ada.svg",
    "/busd.svg",
  ];

  return (
    <section className="w-full flex justify-center py-20 px-6 bg-white overflow-hidden">
      <div className="w-full max-w-[992px] flex flex-col items-center gap-10">

        {/* HEADING */}
        <h2 className="font-urbanist font-bold text-[48px] leading-[140%] text-center">
          <span className="text-[#394784]">Most Popular Cryptocurrencies We </span>
          <span className="text-[#1A54CF]">Support</span>
        </h2>

        {/* SUBTITLE */}
        <p className="text-[#7983AD] font-urbanist text-[24px] font-medium leading-[140%] text-center max-w-[600px]">
          Explore a wide range of popular coins supported on our <br />
          secure trading platform.
        </p>

        {/* ICON SCROLLER — EXACT WIDTH 992px, HEIGHT 56px */}
        <div className="relative w-[992px] h-[56px] overflow-hidden flex items-center">

          {/* scrolling track */}
          <div
            className="
              flex flex-nowrap gap-6 w-max
              animate-[scrollIcons_16s_linear_infinite]
            "
          >
            {/* duplicate row TWICE for seamless loop */}
            {[1, 2].map((row) => (
              <div key={row} className="flex flex-nowrap gap-6">
                {icons.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-[56px] h-[56px] object-contain"
                    alt="crypto"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
