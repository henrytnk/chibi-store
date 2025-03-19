import type { Metadata } from "next";
import { poppins } from "./_ui/fonts";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";

export const metadata: Metadata = {
  title: "Chibi Store",
  description:
    "An e-commerce platform built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <Container className="py-20">{children}</Container>
      </body>
    </html>
  );
}
