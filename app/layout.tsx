import type { Metadata } from "next";
import { rubik } from "./fonts";
import { SiteHeader } from "@/app/ui/SiteHeader";
import { SiteFooter } from "@/app/ui/SiteFooter";
import "./globals.css";

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
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <SiteHeader />
        <main className="p-4 min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
