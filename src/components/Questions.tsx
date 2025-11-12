"use client";

import { ChevronDown } from "lucide-react";
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
      <div className="w-full max-w-[880px] px-4 sm:px-6 text-center">
        {/* Title */}
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          <div className="text-sm font-medium text-gray-500 mb-2">Got</div>
          <h2 className="text-center font-sans font-bold text-[38px] sm:text-[58px] leading-[44px] sm:leading-[58px] bg-gradient-to-r from-[#155DFC] to-[#F54900] bg-clip-text text-transparent">
            Questions?
          </h2>
          <p className="mt-3 sm:mt-4 text-[#45556C] text-center font-sans font-normal text-[15px] sm:text-[18px] leading-[26px] sm:leading-[32px]">
            Find answers to common questions about FX Master Payroll Payments.
            <br className="hidden sm:block" />
            Can’t find what you’re looking for? Our support team is here to
            help.
          </p>
        </div>

        {/* FAQ List */}
        <dl className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-3 sm:px-5 py-3 sm:py-4 focus:outline-none"
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Gradient Number Badge */}
                    <span
                      className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-[14px] sm:text-[15px] font-semibold text-white rounded-full shrink-0"
                      style={{
                        background:
                          "linear-gradient(150deg, #063FBB 10.35%, #E04401 98.94%)",
                      }}
                    >
                      {faq.id}
                    </span>

                    {/* Question Text with your exact style */}
                    <span
                      className="text-[18px] font-semibold sm:text-[18px]"
                      style={{
                        color: "#0F172B",
                        fontFamily:
                          'var(--font-family-Font-1, "Bricolage Grotesque")',
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "32px",
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Dropdown Icon */}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </dt>

              {/* Answer Text */}
              {openIndex === index && (
                <dd className="px-10 sm:px-14 pb-3 sm:pb-4 text-gray-900 text-left text-[13.5px] sm:text-[15px] leading-6">
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
