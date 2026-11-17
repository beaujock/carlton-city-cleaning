import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Carlton City Cleaning",
  description: "Professional cleaning services from Carlton City Cleaning Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 bg-mist">{children}</main>
        <footer className="bg-navy py-8 text-center text-sm text-sky">
          © Carlton City Cleaning Inc.
        </footer>
      </body>
    </html>
  );
}
