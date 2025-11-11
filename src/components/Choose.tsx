"use client";

import Image from "next/image";

export default function WhyChooseFXMaster() {
  const features = [
    {
      id: 1,
      title: "Bank-Level Security",
      desc: "Your money and data are protected with 256-bit SSL encryption and regulated by the FCA.",
      image: "/images/d1.jpg",
    },
    {
      id: 2,
      title: "Lightning Fast",
      desc: "Send money in minutes, not days. Most transfers complete within hours.",
      image: "/images/d2.jpg",
    },
    {
      id: 3,
      title: "200+ Countries",
      desc: "Send money to over 200 countries and territories worldwide with ease.",
      image: "/images/d31.png",
    },
    {
      id: 4,
      title: "Complete Transparency",
      desc: "See exactly what you pay upfront. No hidden fees, no surprises.",
      image: "/images/D3.png",
    },
    {
      id: 5,
      title: "Mobile App",
      desc: "Send money on the go with our award-winning mobile app for iOS and Android.",
      image: "/images/d5.png",
    },
    {
      id: 6,
      title: "24/7 Support",
      desc: "Get help whenever you need it with our round-the-clock customer support team.",
      image: "/images/d6.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#f9fbff] to-[#f3f6fa] flex justify-center">
      <div className="w-full max-w-[1200px] px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Why Choose FX Master?
        </h2>
        <p className="text-gray-600 max-w-[700px] mx-auto mb-12">
          We’re revolutionizing international money transfers with transparent
          pricing, cutting-edge security, and unmatched speed.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative w-[385px] h-[416px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-[10px] w-[366px] h-[128px] px-4 py-2 rounded-lg bg-[rgba(0,0,0,0.34)] text-center text-white backdrop-blur-sm">
                {/* Title */}
                <h3
                  className='text-white font-["Bricolage Grotesque"] text-[20px] font-bold leading-normal w-full'
                  style={{ alignSelf: "stretch" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className='text-white font-["Bricolage Grotesque"] text-[20px] font-normal leading-normal w-full'
                  style={{ alignSelf: "stretch" }}
                >
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
