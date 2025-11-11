"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type Country = {
  name: string;
  code: string;
  flag: string;
  currency: string;
};

export default function HeroSection() {
  const [amount, setAmount] = useState<string>("1000");
  const [recipientAmount, setRecipientAmount] = useState<string>("0.00");
  const [fromCountry, setFromCountry] = useState<string>("USD");
  const [toCountry, setToCountry] = useState<string>("INR");
  const [fromDropdownOpen, setFromDropdownOpen] = useState<boolean>(false);
  const [toDropdownOpen, setToDropdownOpen] = useState<boolean>(false);

  const countries: Country[] = [
    { code: "AED", name: "UAE Dirham", flag: "https://flagcdn.com/ae.svg", currency: "AED" },
    { code: "AUD", name: "Australian Dollar", flag: "https://flagcdn.com/au.svg", currency: "AUD" },
    { code: "BDT", name: "Bangladeshi Taka", flag: "https://flagcdn.com/bd.svg", currency: "BDT" },
    { code: "BGN", name: "Bulgarian Lev", flag: "https://flagcdn.com/bg.svg", currency: "BGN" },
    { code: "BHD", name: "Bahraini Dinar", flag: "https://flagcdn.com/bh.svg", currency: "BHD" },
    { code: "BZD", name: "Belize Dollar", flag: "https://flagcdn.com/bz.svg", currency: "BZD" },
    { code: "CAD", name: "Canadian Dollar", flag: "https://flagcdn.com/ca.svg", currency: "CAD" },
    { code: "CHF", name: "Swiss Franc", flag: "https://flagcdn.com/ch.svg", currency: "CHF" },
    { code: "CNY", name: "Chinese Yuan", flag: "https://flagcdn.com/cn.svg", currency: "CNY" },
    { code: "CZK", name: "Czech Koruna", flag: "https://flagcdn.com/cz.svg", currency: "CZK" },
    { code: "DKK", name: "Danish Krone", flag: "https://flagcdn.com/dk.svg", currency: "DKK" },
    { code: "EUR", name: "Euro", flag: "https://flagcdn.com/eu.svg", currency: "EUR" },
    { code: "GBP", name: "British Pound Sterling", flag: "https://flagcdn.com/gb.svg", currency: "GBP" },
    { code: "HKD", name: "Hong Kong Dollar", flag: "https://flagcdn.com/hk.svg", currency: "HKD" },
    { code: "HUF", name: "Hungarian Forint", flag: "https://flagcdn.com/hu.svg", currency: "HUF" },
    { code: "IDR", name: "Indonesian Rupiah", flag: "https://flagcdn.com/id.svg", currency: "IDR" },
    { code: "INR", name: "Indian Rupee", flag: "https://flagcdn.com/in.svg", currency: "INR" },
    { code: "JPY", name: "Japanese Yen", flag: "https://flagcdn.com/jp.svg", currency: "JPY" },
    { code: "KES", name: "Kenyan Shilling", flag: "https://flagcdn.com/ke.svg", currency: "KES" },
    { code: "KWD", name: "Kuwaiti Dinar", flag: "https://flagcdn.com/kw.svg", currency: "KWD" },
    { code: "LKR", name: "Sri Lankan Rupee", flag: "https://flagcdn.com/lk.svg", currency: "LKR" },
    { code: "MXN", name: "Mexican Peso", flag: "https://flagcdn.com/mx.svg", currency: "MXN" },
    { code: "MYR", name: "Malaysian Ringgit", flag: "https://flagcdn.com/my.svg", currency: "MYR" },
    { code: "NGN", name: "Nigerian Naira", flag: "https://flagcdn.com/ng.svg", currency: "NGN" },
    { code: "NZD", name: "New Zealand Dollar", flag: "https://flagcdn.com/nz.svg", currency: "NZD" },
    { code: "PHP", name: "Philippine Peso", flag: "https://flagcdn.com/ph.svg", currency: "PHP" },
    { code: "PKR", name: "Pakistani Rupee", flag: "https://flagcdn.com/pk.svg", currency: "PKR" },
    { code: "PLN", name: "Polish Zloty", flag: "https://flagcdn.com/pl.svg", currency: "PLN" },
    { code: "QAR", name: "Qatari Riyal", flag: "https://flagcdn.com/qa.svg", currency: "QAR" },
    { code: "RON", name: "Romanian Leu", flag: "https://flagcdn.com/ro.svg", currency: "RON" },
    { code: "SAR", name: "Saudi Riyal", flag: "https://flagcdn.com/sa.svg", currency: "SAR" },
    { code: "SEK", name: "Swedish Krona", flag: "https://flagcdn.com/se.svg", currency: "SEK" },
    { code: "SGD", name: "Singapore Dollar", flag: "https://flagcdn.com/sg.svg", currency: "SGD" },
    { code: "THB", name: "Thai Baht", flag: "https://flagcdn.com/th.svg", currency: "THB" },
    { code: "TRY", name: "Turkish Lira", flag: "https://flagcdn.com/tr.svg", currency: "TRY" },
    { code: "USD", name: "United States Dollar", flag: "https://flagcdn.com/us.svg", currency: "USD" },
  ];

  const [rates] = useState<Record<string, number>>({
    USD: 1,
    INR: 83.12,
    EUR: 0.92,
    GBP: 0.78,
    AED: 3.67,
    SGD: 1.34,
    JPY: 151.9,
    CAD: 1.36,
    CHF: 0.88,
    HKD: 7.82,
    SAR: 3.75,
    AUD: 1.52,
    CNY: 7.25,
    NZD: 1.67,
    BGN: 1.8,
    BHD: 0.38,
    BZD: 2.02,
    CZK: 21.1,
    DKK: 6.85,
    HUF: 360.5,
  });

  useEffect(() => {
    const fromRate = rates[fromCountry] ?? 1;
    const toRate = rates[toCountry] ?? 1;
    const numericAmount = parseFloat(amount || "0") || 0;
    const convertedValue = numericAmount * (toRate / fromRate);
    const formatted = convertedValue.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setRecipientAmount(formatted);
  }, [amount, fromCountry, toCountry, rates]);

  const exchangeDisplay = (rates[toCountry] ?? 1) / (rates[fromCountry] ?? 1);

  const exchangeDisplayText =
    exchangeDisplay >= 0.01
      ? exchangeDisplay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })
      : exchangeDisplay.toExponential(2);

  return (
    <section
      className="w-full py-12 flex justify-center font-bricolage relative"
      style={{ backgroundColor: "rgba(190,219,255,0.18)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1252px] px-4 sm:px-6 gap-8 sm:gap-12">
        {/* LEFT CONTENT - unchanged */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/icons/c1.svg" alt="logo" className="w-6 h-6" />
            <span className="font-medium text-[17px] text-[#45556C]">FX Master</span>
          </div>

          <h1 className="text-[#0F172B] font-bold text-[30px] sm:text-[45px] lg:text-[58px] leading-[40px] lg:leading-[90px]">
            <span className="block">Send Money</span>
            <span className="block bg-[linear-gradient(90deg,#155DFC_0%,#FF6900_50%,#009689_100%)] bg-clip-text text-transparent">
              Globally
            </span>
            <span className="block">with Zero Hidden Fees</span>
          </h1>

          <p className="mt-6 text-[#45556C] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] max-w-[500px]">
            Send money to your business connections or loved ones at lowest fees,
            real-time rates, and lightning fast delivery – hassle-free, secure, and trustworthy!
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
        <div className="w-full md:w-[560px] lg:w-[680px] bg-white rounded-[24px] shadow-[0_6px_30px_rgba(0,0,0,0.06)] p-8 sm:p-9 border border-[#EFF2F7] relative">
          <img src="/icons/tr.svg" alt="top icon" className="absolute -top-3 -right-4 w-12 h-12 cursor-pointer" />

          <h2 className="text-[#0F172B] text-[22px] sm:text-[24px] font-semibold text-center">Quick Transfer</h2>
          <p className="text-[#6F7A88] text-[13px] sm:text-[14px] text-center mt-1">Best exchange rates guaranteed</p>

          <div className="mt-6 space-y-5">
            {/* YOU SEND: split into two boxes (left input, right dropdown box) */}
            <div>
              <label className="text-[14px] text-[#6B7280]">You send</label>

              <div className="mt-2 flex gap-3 items-stretch">
                {/* left big input box */}
                <div className="flex-1 bg-white rounded-[12px] border border-[#E5E7EB] px-4 py-3">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-transparent outline-none text-[18px] sm:text-[20px] font-semibold text-[#111827]"
                    min="0"
                  />
                </div>

                {/* right small box with flag + code + chevron */}
                <div className="min-w-[110px] max-w-[140px] bg-white rounded-[12px] border border-[#E5E7EB] px-3 py-2 flex items-center justify-center cursor-pointer relative"
                     onClick={() => { setFromDropdownOpen(!fromDropdownOpen); setToDropdownOpen(false); }}>
                  <img src={countries.find((c) => c.code === fromCountry)?.flag} className="w-6 h-6 rounded-sm object-cover" />
                  <span className="ml-2 text-[15px] font-medium text-[#111827]">{fromCountry}</span>
                  <ChevronDown size={16} className="ml-2 text-gray-500" />
                  {/* dropdown panel */}
                  {fromDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg z-40 max-h-[300px] overflow-y-auto">
                      {countries.map((country) => (
                        <div
                          key={`from-${country.code}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                          onClick={() => {
                            setFromCountry(country.code);
                            setFromDropdownOpen(false);
                          }}
                        >
                          <img src={country.flag} className="w-6 h-6 rounded-sm object-cover" />
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
            <div className="flex justify-center -mt-2">
              <div
                title="Switch"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center shadow-md cursor-pointer"
                onClick={() => {
                  const tmp = fromCountry;
                  setFromCountry(toCountry);
                  setToCountry(tmp);
                }}
              >
                <img src="/icons/ud.svg" className="w-5 h-5 invert brightness-200" alt="swap" />
              </div>
            </div>

            {/* RECIPIENT GETS: same split layout */}
           <div className="-mt-8">
              <label className="text-[14px] text-[#6B7280]">Recipient gets</label>

              <div className="mt-2 flex gap-3 items-stretch">
                {/* left big readonly output */}
                <div className="flex-1 bg-white rounded-[12px] border border-[#E5E7EB] px-4 py-3 flex items-center">
                  <input
                    type="text"
                    readOnly
                    value={recipientAmount}
                    className="w-full bg-transparent outline-none text-[22px] sm:text-[26px] font-extrabold text-[#0B57E2]"
                  />
                </div>

                {/* right small dropdown box */}
                <div className="min-w-[110px] max-w-[140px] bg-white rounded-[12px] border border-[#E5E7EB] px-3 py-2 flex items-center justify-center cursor-pointer relative"
                     onClick={() => { setToDropdownOpen(!toDropdownOpen); setFromDropdownOpen(false); }}>
                  <img src={countries.find((c) => c.code === toCountry)?.flag} className="w-6 h-6 rounded-sm object-cover" />
                  <span className="ml-2 text-[15px] font-medium text-[#111827]">{toCountry}</span>
                  <ChevronDown size={16} className="ml-2 text-gray-500" />
                  {/* dropdown panel */}
                  {toDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg z-40 max-h-[300px] overflow-y-auto">
                      {countries.map((country) => (
                        <div
                          key={`to-${country.code}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                          onClick={() => {
                            setToCountry(country.code);
                            setToDropdownOpen(false);
                          }}
                        >
                          <img src={country.flag} className="w-6 h-6 rounded-sm object-cover" />
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

            {/* Exchange Rate + Transfer Fee box — both inside a single rounded card like screenshot */}
            <div className="mt-2 border border-[#E4F0FF] rounded-[14px] p-4 bg-gradient-to-r from-[rgba(241,250,255,1)] to-[rgba(243,252,250,1)]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {/* left column: labels */}
                <div className="flex flex-col text-[14px] text-[#6B7280]">
                  <div className="mb-2">Exchange Rate</div>
                  <div>Transfer Fee</div>
                </div>

                {/* right column: values aligned right */}
                <div className="ml-auto text-right">
                  <div className="text-sm text-[#2563EB] font-medium">1 {fromCountry} = {exchangeDisplayText} {toCountry}</div>
                  <div className="text-[14px] text-green-600 font-medium mt-1">$0 - Transfer free!</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-2 w-full bg-gradient-to-b from-[#2563EB] to-[#1E40AF] text-white text-[15px] sm:text-[16px] font-medium py-4 rounded-full shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2">
              Start Transfer <ArrowRight size={18} />
            </button>

            {/* small features */}
            <div className="flex justify-center gap-9 sm:gap-12 mt-4 text-[12px] sm:text-[15px] text-[#555d68]">
              <div className="flex items-center gap-2">
                <img src="/icons/tk.svg" className="w-4" alt="secure" /> <span>Secure transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/icons/tk.svg" className="w-4" alt="arrives" /> <span>Arrives in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
