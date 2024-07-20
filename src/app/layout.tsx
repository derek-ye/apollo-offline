import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import PageLayout from "@/components/PageLayout";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/designsystem/layout/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          "min-h-screen font-sans antialiased m-4",
          fontSans.variable
        )}
      >
        <Navbar></Navbar>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
