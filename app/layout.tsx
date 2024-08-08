import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
import Navbar from "@/components/navbar";
import { GeistSans } from 'geist/font/sans';

const metadata: Metadata = {
  title: "Verge Website",
};

const Mont = localFont({
  src: [
    {
      path: '../public/fonts/MontBold.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/MontBold.otf',
      weight: '700'
    }
  ],
  display: "swap",
  variable: '--font-mont',
})

const Gilroy = localFont({
  src: [
    {
      path: '../public/fonts/GilroyLight.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/GilroyExtraBold.otf',
      weight: '700'
    },
  ],
  display: "swap",
  variable: '--font-gilroy'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-black text-neutral-200 selection:bg-primary/50 selection:text-neutral-200 ${GeistSans.className} ${Mont.variable} ${Gilroy.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export { metadata, Mont, Gilroy }