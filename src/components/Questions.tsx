"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "Why should I trust FX Master?",
      answer:
        "FX Master is a regulated platform licensed by the [Authority Name], using bank-level encryption and trusted global payment partners. Millions of users worldwide rely on FX Master for secure, fast, and reliable money transfers.",
    },
    {
      id: 2,
      question: "How long does a money transfer usually take?",
      answer:
        "Transfers typically take between 1–3 business days depending on the destination country and the receiving bank’s processing time.",
    },
    {
      id: 3,
      question: "How much does it cost to send money with FX Master?",
      answer:
        "FX Master offers competitive exchange rates with low, transparent fees displayed upfront before you make a transfer. No hidden charges.",
    },
    {
      id: 4,
      question: "Where can I send and receive money with FX Master?",
      answer:
        "You can send and receive money in over 50 countries worldwide. Our platform supports major global currencies and destinations.",
    },
    {
      id: 5,
      question: "How do I sign up for FX Master?",
      answer:
        "You can sign up online in minutes using your email address and basic identification details. Once verified, you can start sending money immediately.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center items-center py-10 sm:py-14 bg-gradient-to-br from-[#f9fbff] to-[#f4f7fb]">
      <div className="w-full max-w-[780px] px-4 sm:px-6 text-center">
        {/* SECTION TITLE */}
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          {/* GOT LABEL WITH SVG */}
          <div className="flex items-center gap-2 px-[17px] py-[9px] rounded-full border border-white/40 bg-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.10)]">
            <Image
              src="/icons/got.svg" // ✅ replace with your SVG path
              alt="Got Icon"
              width={16}
              height={16}
              className="w-4 h-4 object-contain"
            />
            <div className="text-sm font-medium text-gray-500">Got</div>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-center font-sans font-bold text-[32px] sm:text-[48px] leading-[40px] sm:leading-[54px] bg-gradient-to-r from-[#155DFC] to-[#F54900] bg-clip-text text-transparent mt-3">
            Got Questions? We’ve Got You.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 sm:mt-6 text-[#45556C] text-center font-sans font-normal text-[15px] sm:text-[17px] leading-[24px] sm:leading-[28px] max-w-[600px]">
            Here’s everything you need to know before you hit Send Money.
          </p>
        </div>

        {/* FAQ LIST */}
        <dl className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <dt>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none"
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* GRADIENT NUMBER BADGE */}
                    <span
                      className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-[13px] sm:text-[14px] font-semibold text-white rounded-full shrink-0"
                      style={{
                        background:
                          "linear-gradient(150deg, #063FBB 10.35%, #E04401 98.94%)",
                      }}
                    >
                      {faq.id}
                    </span>

                    {/* QUESTION TEXT */}
                    <span
                      className="text-[16px] sm:text-[17px] font-semibold"
                      style={{
                        color: "#0F172B",
                        fontFamily:
                          'var(--font-family-Font-1, "Bricolage Grotesque")',
                        lineHeight: "28px",
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* CHEVRON ICON */}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </dt>

              {/* ANSWER SECTION */}
              {openIndex === index && (
                <dd className="px-8 sm:px-10 pb-3 sm:pb-4 text-gray-900 text-left text-[14.5px] sm:text-[15.5px] leading-6">
                  {faq.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
