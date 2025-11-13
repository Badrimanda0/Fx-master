"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // console.log("Footer component rendered");
  return (
    <footer className="w-full text-white bg-gradient-to-t from-[#0F172B] to-[#1D293D] pt-14 pb-12 px-6 mt-0">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand + Description */}
          <div className="space-y-4 col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.png"
                  alt="FX Master"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold">FXMaster</span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              The UK's fastest payroll payment solution. Streamline international
              payroll with compliance, transparency, and dedicated support.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="border border-gray-600 p-2 rounded-full hover:border-white transition"
              >
                <Twitter size={18} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="border border-gray-600 p-2 rounded-full hover:border-white transition"
              >
                <Github size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="border border-gray-600 p-2 rounded-full hover:border-white transition"
              >
                <Linkedin size={18} />
              </Link>

              <Link
                href="mailto:support@fxmaster.com"
                className="border border-gray-600 p-2 rounded-full hover:border-white transition"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">How It Works</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">API Documentation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Press Kit</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Compliance Guide</Link></li>
              <li><Link href="#">Webinars</Link></li>
              <li><Link href="#">Cases Studies</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Security</Link></li>
              <li><Link href="#">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col sm:flex-row justify-between text-xs text-gray-400">
          <p>© 2024 FX Master Payroll. All rights reserved. Regulated by the FCA.</p>
          <div className="flex gap-3 pt-2 sm:pt-0">
            <span>Made in the UK</span>
            <span>•</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
