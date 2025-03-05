import type { Metadata } from "next";
import { poppins } from "./_ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chibi Store",
  description: "An e-commerce platform built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
