import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Payroll-Landing Page",
  description:
    "Streamline global payroll processing with blazing-fast payments, real-time compliance, and enterprise-grade security. Pay your international team in seconds, not days.",
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
    title: "Payroll-Landing Page",
    description:
      "Streamline global payroll processing with blazing-fast payments, real-time compliance, and enterprise-grade security. Pay your international team in seconds, not days.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ✅ Google Font Added Here */}
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
