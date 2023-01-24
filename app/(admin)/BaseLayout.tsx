"use client";

import { useState } from "react";
import { Poppins } from "@next/font/google";
import dynamic from "next/dynamic";
import Header from "./Header";

const SideBar = dynamic(() => import("./SideBar"), { ssr: false });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function BaseLayout({ menus, children }) {
  const [open, setOpen] = useState(true);

  return (
    <html className={poppins.className}>
      <head />
      <body className="bg-background">
        <SideBar open={open} menus={menus} />
        <div
          className={`bg-dark-gray text-off-white min-h-screen ${
            !open ? "ml-16" : "ml-60"
          } duration-300`}
        >
          <Header open={open} setOpen={setOpen} />
          <div className="px-4 mt-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
