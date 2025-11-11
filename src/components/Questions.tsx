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
    <section className="flex justify-center items-center py-20 bg-gradient-to-br from-[#f9fbff] to-[#f4f7fb]">
      <div className="w-full max-w-[930px] px-6 text-center">
        {/* Title */}
        <div className="flex flex-col items-center mb-10">
          <div className="text-sm font-medium text-gray-500 mb-2">Got</div>
          <h2
            className="text-center font-sans font-bold text-[60px] leading-[60px] bg-gradient-to-r from-[#155DFC] to-[#F54900] bg-clip-text text-transparent"
          >
            Questions?
          </h2>
          <p
            className="mt-4 text-[#45556C] text-center font-sans font-normal text-[18.594px] leading-[32.5px]"
          >
            Find answers to common questions about FX Master Payroll Payments. <br />
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </div>

        {/* FAQ List */}
        <dl className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-5 py-4 focus:outline-none"
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  <div className="flex items-center gap-3">
                    {/* Gradient Number Badge */}
                    <span
                      className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white rounded-full"
                      style={{
                        background: "linear-gradient(150deg, #063FBB 10.35%, #E04401 98.94%)",
                        borderRadius: "50%",
                      }}
                    >
                      {faq.id}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </dt>

              {openIndex === index && (
                <dd className="px-14 pb-4 text-gray-900 text-left text-sm sm:text-base leading-8">
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
