"use client";

import Image from "next/image";

export default function WhyChooseFXMaster() {
  const features = [
    {
      id: 1,
      title: "Global Transfers",
      desc: "Send or receive in 100+ currencies with low, transparent FX rates.",
      image: "/images/d1.jpg",
    },
    {
      id: 2,
      title: "Multi-Currency Wallets",
      desc: "Manage, convert, and hold currencies effortlessly in one place.",
      image: "/images/d2.jpg",
    },
    {
      id: 3,
      title: "Dedicated IBAN Accounts",
      desc: "Simplify cross-border transactions with personalized IBANs.",
      image: "/images/d31.png",
    },
    {
      id: 4,
      title: "Mass & Payroll Payments",
      desc: "Pay teams or vendors worldwide in just a few clicks.",
      image: "/images/D3.png",
    },
    {
      id: 5,
      title: "API & Platform Integration",
      desc: "Automate global payments with seamless integration.",
      image: "/images/d5.png",
    },
    {
      id: 6,
      title: "24/7 Human Support",
      desc: "Real-time assistance, anytime, anywhere.",
      image: "/images/d6.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#f9fbff] to-[#f3f6fa] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1200px] px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Built for the Global You.
        </h2>
        <p className="text-gray-600 max-w-[700px] mx-auto mb-12">
          Whether you’re sending money home, managing business payouts, or
          receiving international payments, FX Master is your single, powerful
          platform for global finance.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative w-full max-w-[385px] h-[416px] sm:w-[360px] md:w-[385px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Bottom Text Box */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-[10px] w-[90%] sm:w-[366px] h-auto min-h-[120px] px-4 py-3 rounded-lg bg-[rgba(0,0,0,0.34)] text-center text-white backdrop-blur-sm">
                {/* Title */}
                <h3 className='text-white font-["Bricolage Grotesque"] text-[18px] sm:text-[20px] font-bold leading-normal w-full'>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className='text-white font-["Bricolage Grotesque"] text-[16px] sm:text-[18px] font-normal leading-normal w-full'>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
