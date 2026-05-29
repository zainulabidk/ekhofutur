import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { SITE } from "./constants/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
