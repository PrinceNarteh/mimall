"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("./SideBar"), { ssr: false });

export default function BaseLayout({ menus, children }) {
  const [open, setOpen] = useState(true);

  return (
    <html>
      <head />
      <body className="bg-background">
        <SideBar open={open} setOpen={setOpen} menus={menus} />
        <div
          className={`bg-dark-gray text-off-white min-h-screen pt-10 ${
            !open ? "ml-16" : "ml-60"
          } duration-500 px-4`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
