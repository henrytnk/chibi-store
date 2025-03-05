import { Poppins, Manrope } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});