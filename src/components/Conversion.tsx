"use client";

export default function TransferStatus() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-[#F5F8FD]">

      {/* Heading */}
      <div className="text-center max-w-[620px] mb-10 px-4">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">
          Track Your Transfer in Real-Time
        </h2>
        <p className="text-gray-600">
          Know exactly where your money is at every step. Get instant updates and estimated delivery times for complete peace of mind.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 w-full max-w-[900px] px-8 py-8 mb-10">

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="font-semibold text-gray-800">Transfer to Sarah Johnson</p>
            <p className="text-sm text-gray-500">$1,000 USD → €847.20 EUR</p>
          </div>
          <p className="text-sm text-gray-500">
            Reference<br/>
            <span className="font-medium">#FX123456789</span>
          </p>
        </div>

        {/* Progress */}
        <p className="text-xs text-gray-500 mb-2">Transfer Progress</p>
        <div className="w-full h-[7px] bg-gray-200 rounded-full mb-6">
          <div className="h-full bg-[#255EFF] rounded-full" style={{ width: "75%" }} />
        </div>

        {/* Steps */}
        <div className="space-y-6">

          {/* Step 1 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
              <div>
                <p className="text-gray-800 font-medium">Payment Received</p>
                <p className="text-sm text-gray-500">We’ve received your payment</p>
              </div>
            </div>
            <span className="text-xs text-green-600">2 minutes ago</span>
          </div>

          {/* Step 2 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
              <div>
                <p className="text-gray-800 font-medium">Money Converted</p>
                <p className="text-sm text-gray-500">Converting at rate 1.18/05</p>
              </div>
            </div>
            <span className="text-xs text-green-600">1 minute ago</span>
          </div>

          {/* Step 3 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 text-xs">⟳</div>
              <div>
                <p className="text-gray-800 font-medium">In Transit</p>
                <p className="text-sm text-gray-500">Sending to recipient bank</p>
              </div>
            </div>
            <span className="text-xs text-blue-600 bg-blue-100 px-2 py-[2px] rounded-md">Processing now</span>
          </div>

          {/* Step 4 (Delivered - lighter but clearer) */}
          <div className="flex justify-between items-center opacity-80">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 text-xs">✓</div>
              <div>
                <p className="text-gray-700 font-semibold text-base">Delivered</p>
                <p className="text-sm text-gray-600">Money delivered to recipient</p>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-800">Est. 15 minutes</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <button className="px-4 py-2 rounded-lg bg-[#255EFF] text-white text-sm font-medium">
            Share Tracking Link
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700">
            Download Receipt
          </button>
        </div>
      </div>

      {/* Notification Box */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl px-8 py-5 flex justify-between items-center w-full max-w-[900px]">
        <div>
          <p className="font-medium text-gray-800">Get Instant Notifications</p>
          <p className="text-sm text-gray-500">Receive updates via SMS, email, or push notifications</p>
        </div>
        <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700">
          Set Preferences
        </button>
      </div>

    </section>
  );
}
