import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eFresh — Supplier Portal",
  description: "Orders, pricing, products and payments — in one supplier workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
