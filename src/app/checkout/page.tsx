"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Choose Your Plan
        </h1>

        {/* PLAN SELECT */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

          {/* Monthly */}
          <div
            onClick={() => setSelectedPlan("monthly")}
            className={`
              p-6 rounded-2xl border cursor-pointer transition-all duration-300
              hover:shadow-xl hover:-translate-y-1
              ${
                selectedPlan === "monthly"
                  ? "border-blue-600 bg-blue-50 shadow-2xl scale-[1.05]"
                  : "border-gray-300 bg-white shadow-sm"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">📅</span>
              <h2 className="text-lg font-semibold">Monhly</h2>
            </div>

            <p className="text-3xl font-bold mt-4">₹499</p>
            <p className="text-sm text-gray-600 mt-1">Billed every month</p>
          </div>

          {/* Yearly */}
          <div
            onClick={() => setSelectedPlan("yearly")}
            className={`
              relative p-6 rounded-2xl border cursor-pointer transition-all duration-300
              hover:shadow-xl hover:-translate-y-1
              ${
                selectedPlan === "yearly"
                  ? "border-green-600 bg-green-50 shadow-2xl scale-[1.05]"
                  : "border-gray-300 bg-white shadow-sm"
              }
            `}
          >
            <span className="absolute -top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
              BEST VALUE
            </span>

            <div className="flex items-center gap-3">
              <span className="text-4xl">🎉</span>
              <h2 className="text-lg font-semibold">Yearly</h2>
            </div>

            <p className="text-3xl font-bold mt-4">₹4999</p>
            <p className="text-sm text-gray-600 mt-1">Save 20% yearly</p>
          </div>

          {/* EMI */}
          <div
            onClick={() => setSelectedPlan("emi")}
            className={`
              p-6 rounded-2xl border cursor-pointer transition-all duration-300
              hover:shadow-xl hover:-translate-y-1
              ${
                selectedPlan === "emi"
                  ? "border-purple-600 bg-purple-50 shadow-2xl scale-[1.05]"
                  : "border-gray-300 bg-white shadow-sm"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">💳</span>
              <h2 className="text-lg font-semibold">EMI</h2>
            </div>

            <p className="text-3xl font-bold mt-4">₹4999</p>
            <p className="text-sm text-gray-600 mt-1">Pay in installments</p>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>3 months → ₹1,666/mo</p>
              <p>6 months → ₹833/mo</p>
              <p>12 months → ₹416/mo</p>
            </div>
          </div>

        </div>

        {/* PAYMENT METHOD TITLE */}
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>

        {/* PAYMENT METHODS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">

          <button
            onClick={() => setPaymentMethod("card")}
            className={`
              p-4 border rounded-xl text-center transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
              ${
                paymentMethod === "card"
                  ? "border-blue-600 bg-blue-50 font-semibold shadow-xl"
                  : "border-gray-300"
              }
            `}
          >
            💳 Card
          </button>

          <button
            onClick={() => setPaymentMethod("upi")}
            className={`
              p-4 border rounded-xl text-center transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
              ${
                paymentMethod === "upi"
                  ? "border-blue-600 bg-blue-50 font-semibold shadow-xl"
                  : "border-gray-300"
              }
            `}
          >
            🪙 UPI
          </button>

          <button
            onClick={() => setPaymentMethod("wallet")}
            className={`
              p-4 border rounded-xl text-center transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
              ${
                paymentMethod === "wallet"
                  ? "border-blue-600 bg-blue-50 font-semibold shadow-xl"
                  : "border-gray-300"
              }
            `}
          >
            👜 Wallet
          </button>

          <button
            onClick={() => setPaymentMethod("bank")}
            className={`
              p-4 border rounded-xl text-center transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
              ${
                paymentMethod === "bank"
                  ? "border-blue-600 bg-blue-50 font-semibold shadow-xl"
                  : "border-gray-300"
              }
            `}
          >
            🏦 Net Banking
          </button>

        </div>



        {/* CARD FORM */}
        {paymentMethod === "card" && (
          <div className="p-5 border rounded-xl bg-gray-50 mb-8 shadow-inner">
            <h3 className="text-lg font-semibold mb-4">Card Details</h3>

            <div className="grid gap-4">
              <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Expiry (MM/YY)" className="p-3 border rounded-lg" />
                <input type="password" placeholder="CVV" className="p-3 border rounded-lg" />
              </div>
              <input type="text" placeholder="Card Holder Name" className="w-full p-3 border rounded-lg" />
            </div>
          </div>
        )}


        {/* UPI FORM */}
        {paymentMethod === "upi" && (
          <div className="p-5 border rounded-xl bg-gray-50 mb-8 shadow-inner">
            <h3 className="text-lg font-semibold mb-4">UPI Payment</h3>
            <input
              type="text"
              placeholder="Enter UPI ID (example: ramesh@okicici)"
              className="w-full p-3 border rounded-lg"
            />
          </div>
        )}


        {/* WALLET FORM */}
        {paymentMethod === "wallet" && (
          <div className="p-5 border rounded-xl bg-gray-50 mb-8 shadow-inner">
            <h3 className="text-lg font-semibold mb-4">Wallet Options</h3>

            <div className="grid gap-3">

              <button className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Paytm_logo.png" className="w-8" />
                <span>Paytm Wallet</span>
              </button>

              <button className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/PhonePe_Logo.png" className="w-8" />
                <span>PhonePe Wallet</span>
              </button>

              <button className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Amazon_Pay_logo.png" className="w-8" />
                <span>Amazon Pay</span>
              </button>

              <button className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MobiKwik_Logo.png" className="w-8" />
                <span>Mobikwik Wallet</span>
              </button>

            </div>
          </div>
        )}


        {/* BANK FORM */}
        {paymentMethod === "bank" && (
          <div className="p-5 border rounded-xl bg-gray-50 mb-8 shadow-inner">
            <h3 className="text-lg font-semibold mb-4">Select Bank</h3>

            <select className="p-3 border rounded-lg w-full">
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>SBI</option>
              <option>Kotak Mahindra</option>
              <option>Axis Bank</option>
              <option>Yes Bank</option>
              <option>Punjab National Bank</option>
            </select>
          </div>
        )}


        {/* PAY NOW BUTTON — redirects to /checkout */}
        <button
          onClick={() => router.push("/checkout")}
          className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
        >
          Pay Now →
        </button>

      </div>
    </div>
  );
}
