"use client";

import { ReactNode } from "react";
import { Poppins } from "@next/font/google";
import { Providers } from "./provider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import MainNav from "./MainNavbar";
import SubNavbar from "./SubNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={poppins.className}>
      <head />
      <body className="bg-gray-100">
        <Providers>
          <MainNav />
          <SubNavbar />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
