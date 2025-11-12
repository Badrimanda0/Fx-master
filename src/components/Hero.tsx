"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type Country = {
  name: string;
  code: string;
  flag: string;
  currency: string;
};

type Rate = {
  currencyCode: string;
  exchangeRate: number;
  transferFee: number;
};

export default function HeroSection() {
  const [amount, setAmount] = useState<string>("1000");
  const [recipientAmount, setRecipientAmount] = useState<string>("0.00");
  const [fromCountry, setFromCountry] = useState<string>("USD");
  const [toCountry, setToCountry] = useState<string>("INR");
  const [fromDropdownOpen, setFromDropdownOpen] = useState<boolean>(false);
  const [toDropdownOpen, setToDropdownOpen] = useState<boolean>(false);

  const [countries, setCountries] = useState<Country[]>([]);
  const [rates, setRates] = useState<Record<string, Rate>>({});

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://fxmaster-prod-apim.azure-api.net/fxmaster-api-prod-clone/API-FX-100-App",
          {
            headers: { fx_key: "d9ca05910ac147cd99d2578c2bd62f5c" },
          }
        );
        const data = await res.json();

        console.log("FX API response:", data); // Debug API structure

        // Safety check: fallback to empty arrays
        const apiCountries: Country[] = data?.countries ?? [];
        const apiRates: Rate[] = data?.rates ?? [];

        setCountries(apiCountries);

        const ratesMap: Record<string, Rate> = {};
        apiRates.forEach((r: any) => {
          if (r?.currencyCode) {
            ratesMap[r.currencyCode] = {
              currencyCode: r.currencyCode,
              exchangeRate: r.exchangeRate,
              transferFee: r.transferFee,
            };
          }
        });
        setRates(ratesMap);
      } catch (err) {
        console.error("Error fetching FX data:", err);
      }
    }
    fetchData();
  }, []);

  // Update recipient amount
  useEffect(() => {
    const fromRate = rates[fromCountry]?.exchangeRate ?? 1;
    const toRate = rates[toCountry]?.exchangeRate ?? 1;
    const numericAmount = parseFloat(amount || "0") || 0;
    const convertedValue = numericAmount * (toRate / fromRate);
    const formatted = convertedValue.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setRecipientAmount(formatted);
  }, [amount, fromCountry, toCountry, rates]);

  const exchangeDisplay =
    (rates[toCountry]?.exchangeRate ?? 1) / (rates[fromCountry]?.exchangeRate ?? 1);
  const exchangeDisplayText =
    exchangeDisplay >= 0.01
      ? exchangeDisplay.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 4,
        })
      : exchangeDisplay.toExponential(2);

  const transferFeeText = rates[toCountry]?.transferFee
    ? `$${rates[toCountry]?.transferFee} - Transfer fee`
    : "$0 - Transfer free!";

  // Helper for flags fallback
  const getFlag = (code: string) => {
    const country = countries.find((c) => c.code === code);
    return country?.flag ?? "/icons/default-flag.svg"; // fallback
  };

  return (
    <section className="w-full py-12 flex justify-center font-bricolage relative bg-[rgba(190,219,255,0.18)]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1252px] px-4 sm:px-6 gap-10 sm:gap-12">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-6 p-[9px_17px] rounded-[16777200px] border border-[rgba(255,255,255,0.40)] bg-[rgba(255,255,255,0.25)] shadow-[0_8px_32px_0_rgba(0,0,0,0.10)] cursor-pointer">
            <img src="/icons/c1.svg" alt="logo" className="w-6 h-6" />
            <span className="font-medium text-[17px] text-[#45556C]">FX Master</span>
          </div>

          <h1 className="text-[#0F172B] font-bold text-[30px] sm:text-[45px] lg:text-[58px] leading-[40px] lg:leading-[80px]">
            <span className="block">Simplfy</span>
            <span className="block bg-[linear-gradient(90deg,#155DFC_0%,#FF6900_50%,#009689_100%)] bg-clip-text text-transparent">Global</span>
            <span className="block">payments with <br /> us.</span>
          </h1>

          <p className="mt-6 text-[#45556C] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] max-w-[500px]">
            Send, receive, and manage global payments with real-time tracking and zero hidden fees.
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
            <button className="bg-gradient-to-b from-blue-600 to-blue-800 text-white font-medium px-6 py-3 rounded-[12px] shadow hover:opacity-90 transition flex items-center gap-2">
              Start Transfer <ArrowRight size={16} />
            </button>

            <button className="bg-white border border-gray-300 text-gray-800 font-medium px-6 py-3 rounded-[12px] shadow-sm hover:shadow transition">
              Get In Touch With Us
            </button>
          </div>
        </div>

        {/* RIGHT TRANSFER CARD */}
        <div className="w-full md:w-[560px] lg:w-[680px] bg-white rounded-[24px] shadow-[0_6px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8 border border-[#EFF2F7] relative">
          <img src="/icons/tr.svg" alt="top icon" className="absolute -top-3 -right-4 w-12 h-12 cursor-pointer" />

          <h2 className="text-[#0F172B] text-[22px] sm:text-[24px] font-semibold text-center">Quick Transfer</h2>
          <p className="text-[#6F7A88] text-[13px] sm:text-[14px] text-center mt-1">Best exchange rates guaranteed</p>

          <div className="mt-6 space-y-6">
            {/* YOU SEND */}
            <div>
              <label className="text-[14px] text-[#6B7280]">You send</label>
              <div className="mt-2 flex gap-3 items-stretch">
                <div className="flex-1 bg-[rgba(37,99,235,0.03)] rounded-[12px] border border-[#E5E7EB] px-4 py-3">
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-transparent outline-none text-[18px] sm:text-[20px] font-semibold text-[#111827]" min="0"/>
                </div>

                {/* FROM DROPDOWN */}
                <div className="min-w-[110px] max-w-[140px] bg-white rounded-[12px] border border-[#E5E7EB] px-3 py-2 flex items-center justify-center cursor-pointer relative" onClick={() => { setFromDropdownOpen(!fromDropdownOpen); setToDropdownOpen(false); }}>
                  <img src={getFlag(fromCountry)} className="w-6 h-6 rounded-sm object-cover"/>
                  <span className="ml-2 text-[15px] font-medium text-[#111827]">{fromCountry}</span>
                  <ChevronDown size={16} className="ml-2 text-gray-500"/>
                  {fromDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg z-40 max-h-[300px] overflow-y-auto">
                      {countries.map((country) => (
                        <div key={`from-${country.code}`} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer" onClick={() => { setFromCountry(country.code); setFromDropdownOpen(false); }}>
                          <img src={country.flag} className="w-6 h-6 rounded-sm object-cover"/>
                          <div className="text-[14px] text-[#111827]">
                            <div className="font-medium">{country.name}</div>
                            <div className="text-xs text-gray-500">{country.code}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SWAP */}
            <div className="flex justify-center -mt-1">
              <div title="Switch" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center shadow-md cursor-pointer" onClick={() => { const tmp = fromCountry; setFromCountry(toCountry); setToCountry(tmp); }}>
                <img src="/icons/ud.svg" className="w-5 h-5 filter brightness-0 invert" alt="swap"/>
              </div>
            </div>

            {/* RECIPIENT GETS */}
            <div>
              <label className="text-[14px] text-[#6B7280]">Recipient gets</label>
              <div className="mt-2 flex gap-3 items-stretch">
                <div className="flex-1 bg-[rgba(37,99,235,0.03)] rounded-[12px] border border-[#E5E7EB] px-4 py-3 flex items-center">
                  <input type="text" readOnly value={recipientAmount} className="w-full bg-transparent outline-none text-[22px] sm:text-[26px] font-extrabold text-[#0B57E2]"/>
                </div>

                {/* TO DROPDOWN */}
                <div className="min-w-[110px] max-w-[140px] bg-white rounded-[12px] border border-[#E5E7EB] px-3 py-2 flex items-center justify-center cursor-pointer relative" onClick={() => { setToDropdownOpen(!toDropdownOpen); setFromDropdownOpen(false); }}>
                  <img src={getFlag(toCountry)} className="w-6 h-6 rounded-sm object-cover"/>
                  <span className="ml-2 text-[15px] font-medium text-[#111827]">{toCountry}</span>
                  <ChevronDown size={16} className="ml-2 text-gray-500"/>
                  {toDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg z-40 max-h-[300px] overflow-y-auto">
                      {countries.map((country) => (
                        <div key={`to-${country.code}`} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer" onClick={() => { setToCountry(country.code); setToDropdownOpen(false); }}>
                          <img src={country.flag} className="w-6 h-6 rounded-sm object-cover"/>
                          <div className="text-[14px] text-[#111827]">
                            <div className="font-medium">{country.name}</div>
                            <div className="text-xs text-gray-500">{country.code}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* EXCHANGE RATE BOX */}
            <div className="mt-3 border border-[#E4F0FF] rounded-[14px] p-4 bg-gradient-to-r from-[rgba(241,250,255,1)] to-[rgba(243,252,250,1)] text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex flex-col text-[14px] text-[#6B7280]">
                  <div className="mb-1 sm:mb-2">Exchange Rate</div>
                  <div>Transfer Fee</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-[#2563EB] font-medium">
                    1 {fromCountry} = {exchangeDisplayText} {toCountry}
                  </div>
                  <div className="text-[14px] text-green-600 font-medium mt-1">{transferFeeText}</div>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <button className="mt-2 w-full bg-gradient-to-b from-[#2563EB] to-[#1E40AF] text-white text-[15px] sm:text-[16px] font-medium py-4 rounded-[12px] shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2">
              Start Transfer <ArrowRight size={18} />
            </button>

            {/* SMALL FEATURES */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-4 text-[12px] sm:text-[15px] text-[#555d68]">
              <div className="flex items-center gap-2">
                <img src="/icons/tk.svg" className="w-4" alt="secure"/> <span>Secure transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/icons/tk.svg" className="w-4" alt="arrives"/> <span>Arrives in minutes</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
