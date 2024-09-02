import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankush Ahuja",
  description: "CS & AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <TooltipProvider>
          <Header />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}