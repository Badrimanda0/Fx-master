"use client";

export default function KeywordCloudSection() {
  const features = [
    "Visual keyword prominence analysis for any URL or URL group",
    "AI-powered serve rate calculations and query analysis",
    "Intent-based keyword coloring and categorization",
    "Content dilution detection and optimization insights",
    "Exportable data and comprehensive reporting",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF5FF] via-[#F8FAFF] to-[#FBF8FF] py-20 px-4">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#132350] leading-tight">
          Start Analyzing Your Keyword Clouds <br /> Today
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Discover what Google really thinks about your content and optimize for better topical
          relevance and search performance.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">

        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">What You'll Get:</h2>

          <ul className="space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-80 bg-gradient-to-br from-[#EFF3FF] to-[#FBF5FF] rounded-xl p-8 text-center shadow-md">
          <h3 className="text-3xl font-bold text-[#1C2B68]">30 Days</h3>
          <p className="text-gray-600 mt-1">Free Trial</p>

          <p className="mt-4 text-[#8A2BE2] font-semibold text-lg">
            Full Access
          </p>
          <p className="text-gray-600 text-sm mt-1">
            All keyword cloud features included
          </p>

          <button className="w-full mt-8 py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-[#3264FF] to-[#A259FF] hover:opacity-90 transition">
            Start Your Free Trial →
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
        <div>
          <h3 className="text-3xl font-bold text-[#3264FF]">90%</h3>
          <p className="text-gray-600 mt-2 text-sm">
            of users identify content optimization opportunities in their first analysis
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#A259FF]">5x</h3>
          <p className="text-gray-600 mt-2 text-sm">
            faster content strategy decisions with visual keyword insights
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#00C36A]">24/7</h3>
          <p className="text-gray-600 mt-2 text-sm">
            access to real-time keyword cloud analysis and updates
          </p>
        </div>
      </div>
    </div>
  );
}
