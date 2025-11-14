"use client";

export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9fbff] to-[#f3f6fa] flex justify-center px-4 py-14">
      <div
        className="
          w-full
          max-w-[890px]
          rounded-2xl

          shadow-[0_2px_18px_rgba(0,0,0,0.08)]
          flex flex-col
          items-center
          text-center
          py-10
          px-6
        "
      >
        {/* Heading */}
        <h2
          className="text-[#0F172B] font-semibold"
          style={{
            fontFamily: "var(--font-family-Font-1, 'Bricolage Grotesque')",
            fontSize: "1.45rem",
            lineHeight: "32px"
          }}
        >
          Still have questions?
        </h2>

        {/* Sub Text */}
        <p className="mt-1 text-sm text-[#67758D] max-w-[420px]">
          Our payroll experts are standing by to help you get started.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          {/* Contact Support Button */}
          <button
            className="text-white text-sm font-medium px-5 py-3 rounded-xl w-full sm:w-auto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0)",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 7.29%, rgba(255, 255, 255, 0.00) 65.62%), linear-gradient(0deg, #0739AA 0%, #0739AA 100%), #6240ED",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.16), 0 0 0 1px #DAD4F4"
            }}
          >
            Contact Support
          </button>

          {/* Book Consultation Button */}
          <button
            className="text-[#0F172B] text-sm font-medium px-5 py-3 rounded-xl w-full sm:w-auto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "12px",
              border: "1px solid #DDD",
              background:
                "linear-gradient(180deg, #FFF 7.29%, rgba(255, 255, 255, 0.00) 65.62%), #F2F2F2",
              boxShadow:
                "0 6px 10px -4px rgba(0, 0, 0, 0.12), 0 0 0 1px #EEE"
            }}
          >
            Book Consultation
          </button>

        </div>
      </div>
    </section>
  );
}
