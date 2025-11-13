// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// ✅ SEO, OpenGraph & Twitter Metadata
export const metadata: Metadata = {
  title: "Payroll-Landing Page",
  description:
    "Streamline global payroll processing with blazing-fast payments, real-time compliance, and enterprise-grade security. Pay your international team in seconds, not days.",
  icons: {
    icon: "/images/logo.png", // 👈 Make sure this file exists under /public/images/
  },
  openGraph: {
    title: "Payroll-Landing Page",
    description:
      "Streamline global payroll processing with blazing-fast payments, real-time compliance, and enterprise-grade security. Pay your international team in seconds, not days.",
    url: "https://yourdomain.com",
    siteName: "Payroll Landing",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page",
    description:
      "Streamline global payroll processing with blazing-fast payments, real-time compliance, and enterprise-grade security. Pay your international team in seconds, not days.",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Font: Bricolage Grotesque */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Favicon (PNG version, correct MIME type, cache-busting query to ensure update) */}
        <link rel="icon" href="/images/logo.png?v=2" type="image/png" />

        {/* ✅ Optional: Add apple-touch-icon for better mobile display */}
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>

      <body
        className="antialiased"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
