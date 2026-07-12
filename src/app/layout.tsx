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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} font-poppins antialiased min-h-screen`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
