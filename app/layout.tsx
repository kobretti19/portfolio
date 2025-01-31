import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

//Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "PETROSKI MARTIN",
  description: "PETROSKI MARTIN official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
