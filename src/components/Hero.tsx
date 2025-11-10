"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import countriesData from "world-countries";

type Country = {
  name: string;
  code: string;
  flag: string;
  currency: string;
};

export default function HeroSection() {
  const [amount, setAmount] = useState("1000");
  const [recipientAmount, setRecipientAmount] = useState("0.00");
  const [fromCountry, setFromCountry] = useState("USD");
  const [toCountry, setToCountry] = useState("INR");
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);

 const countries: Country[] = countriesData
  .filter((c: any) => c.currencies && c.flags)
  .map((c: any) => ({
    name: c.name.common,
    code: Object.keys(c.currencies)[0],
    currency: Object.keys(c.currencies)[0],
    flag: c.flags.svg || c.flags.png,
  }));


  // Dummy exchange rates
  const [rates, setRates] = useState<Record<string, number>>({
    USD: 1,
    INR: 83.12,
    EUR: 0.92,
    GBP: 0.78,
    AUD: 1.52,
    CAD: 1.36,
    SGD: 1.34,
    JPY: 151.9,
    CNY: 7.25,
    NZD: 1.67,
    CHF: 0.88,
    AED: 3.67,
    SAR: 3.75,
    HKD: 7.82,
    SEK: 10.95,
    NOK: 10.8,
    DKK: 6.85,
    ZAR: 18.2,
  });

  // Calculate recipient amount
  useEffect(() => {
    const fromRate = rates[fromCountry] || 1;
    const toRate = rates[toCountry] || 1;
    const usdValue = parseFloat(amount || "0");
    const converted = (usdValue * (toRate / fromRate)).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    });
    setRecipientAmount(converted);
  }, [amount, fromCountry, toCountry, rates]);

  return (
    <section className="w-full bg-transparent py-12 flex justify-center font-bricolage relative">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1252px] px-4 sm:px-6 gap-8 sm:gap-12">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/icons/c1.svg" alt="logo" className="w-6 h-6" />
            <span className="font-medium text-[17px] text-[#45556C]">FX Master</span>
          </div>

          <h1 className="text-[#0F172B] font-bold text-[40px] sm:text-[50px] lg:text-[64px] leading-[48px] sm:leading-[64px] lg:leading-[90px]">
            <span className="block">Send Money</span>
            <span className="block bg-[linear-gradient(90deg,#155DFC_0%,#FF6900_50%,#009689_100%)] bg-clip-text text-transparent">
              Globally
            </span>
            <span className="block">with Zero Hidden Fees</span>
          </h1>

          <p className="mt-6 text-[#45556C] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] max-w-[500px]">
            Send money to your business connections or loved ones at lowest fees,
            real-time rates, and lightning fast delivery – hassle-free, secure,
            and trustworthy!
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm shadow-sm">
              <img src="/icons/a1.svg" className="w-5 h-5" /> Instant Transfer
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm shadow-sm">
              <img src="/icons/a2.svg" className="w-5 h-5" /> Best Rates
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm shadow-sm">
              <img src="/icons/a3.svg" className="w-5 h-5" /> Bank-Level Security
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
            <button className="bg-gradient-to-b from-blue-600 to-blue-800 text-white font-medium px-6 py-3 rounded-full shadow hover:opacity-90 transition flex items-center gap-2">
              Start Transfer <ArrowRight size={16} />
            </button>

            <button className="bg-white border border-gray-300 text-gray-800 font-medium px-6 py-3 rounded-full shadow-sm hover:shadow transition">
              Get In Touch With Us
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full md:w-[480px] lg:w-[580px] bg-white rounded-[24px] shadow-[0_6px_30px_rgba(0,0,0,0.06)] p-9 sm:p-8 border border-[#EFF2F7] relative">
          <h2 className="text-[#0F172B] text-[22px] sm:text-[24px] font-semibold text-center">
            Quick Transfer
          </h2>
          <p className="text-[#6F7A88] text-[13px] sm:text-[14px] text-center mt-1">
            Best exchange rates guaranteed
          </p>

          {/* You Send */}
          <div className="mt-8 relative">
            <label className="text-[14px] text-[#6B7280]">You send</label>
            <div className="flex items-center mt-2 bg-white rounded-[14px] border border-[#E5E7EB] px-4 py-3 relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent outline-none text-[18px] sm:text-[20px] font-semibold text-[#111827]"
              />
              <div
                className="flex items-center gap-2 border-l pl-4 cursor-pointer relative"
                onClick={() => {
                  setFromDropdownOpen(!fromDropdownOpen);
                  setToDropdownOpen(false);
                }}
              >
                {countries.find((c) => c.code === fromCountry)?.flag && (
                  <img
                    src={countries.find((c) => c.code === fromCountry)?.flag || undefined}
                    className="w-5 h-5 rounded-sm"
                  />
                )}
                <span className="text-[#111827] font-medium text-[15px]">{fromCountry}</span>
                <ChevronDown size={16} />
              </div>

              {fromDropdownOpen && (
                <div className="absolute right-0 top-[65px] w-[250px] bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-[240px] overflow-y-auto">
                  {countries.map((country) => (
                    <div
                      key={`${country.code}-${country.name}`}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setFromCountry(country.code);
                        setFromDropdownOpen(false);
                      }}
                    >
                      {country.flag && <img src={country.flag} className="w-5 h-5 rounded-sm" />}
                      <span className="text-[14px] text-[#111827]">
                        {country.name} ({country.code})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Switch */}
          <div className="flex justify-center my-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center shadow-md cursor-pointer"
              onClick={() => {
                const temp = fromCountry;
                setFromCountry(toCountry);
                setToCountry(temp);
              }}
            >
              <img src="/icons/ud.svg" className="w-5 h-5 invert brightness-200" />
            </div>
          </div>

          {/* Recipient Gets */}
          <div className="relative">
            <label className="text-[14px] text-[#6B7280]">Recipient gets</label>
            <div className="flex items-center mt-2 bg-white rounded-[14px] border border-[#E5E7EB] px-4 py-3 relative">
              <input
                type="text"
                readOnly
                value={recipientAmount}
                className="w-full bg-transparent outline-none text-[18px] sm:text-[20px] font-semibold text-[#111827]"
              />
              <div
                className="flex items-center gap-2 border-l pl-4 cursor-pointer relative"
                onClick={() => {
                  setToDropdownOpen(!toDropdownOpen);
                  setFromDropdownOpen(false);
                }}
              >
                {countries.find((c) => c.code === toCountry)?.flag && (
                  <img
                    src={countries.find((c) => c.code === toCountry)?.flag || undefined}
                    className="w-5 h-5 rounded-sm"
                  />
                )}
                <span className="text-[#111827] font-medium text-[15px]">{toCountry}</span>
                <ChevronDown size={16} />
              </div>

              {toDropdownOpen && (
                <div className="absolute right-0 top-[65px] w-[250px] bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-[240px] overflow-y-auto">
                  {countries.map((country) => (
                    <div
                      key={`${country.code}-${country.name}`}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setToCountry(country.code);
                        setToDropdownOpen(false);
                      }}
                    >
                      {country.flag && <img src={country.flag} className="w-5 h-5 rounded-sm" />}
                      <span className="text-[14px] text-[#111827]">
                        {country.name} ({country.code})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Exchange Rate */}
          <div className="mt-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] p-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="text-[14px] text-[#6B7280]">
              Exchange Rate{" "}
              <span className="text-[#2563EB] font-medium ml-1">
                1 {fromCountry} = {(rates[toCountry] || 0).toFixed(2)} {toCountry}
              </span>
            </div>
            <div className="text-[14px] text-green-600 font-medium">₹0 - Transfer free!</div>
          </div>

          {/* Button */}
          <button className="mt-8 w-full bg-gradient-to-b from-[#2563EB] to-[#1E40AF] text-white text-[15px] sm:text-[16px] font-medium py-4 rounded-full shadow hover:opacity-90 transition flex items-center justify-center gap-2">
            Start Transfer <ArrowRight size={18} />
          </button>

          {/* Footer Info */}
          <div className="flex justify-center gap-6 sm:gap-10 mt-6 text-[12px] sm:text-[13px] text-[#6F7A88]">
            <div className="flex items-center gap-2">
              <img src="/icons/tk.svg" className="w-4" /> <span>Secure transfer</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/tk.svg" className="w-4" /> <span>Arrives in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
