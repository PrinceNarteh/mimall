"use client";

import { useState } from "react";
import Sidebar from "./SideBar";

export default function Layout({ menus, children }) {
  const [open, setOpen] = useState(() => typeof window === "undefined" && true);

  return (
    <html>
      <head />
      <body className="bg-background">
        <Sidebar open={open} setOpen={setOpen} menus={menus} />
        <div
          className={`bg-dark-gray text-off-white min-h-screen ${
            open ? "ml-60" : "ml-16"
          } duration-500 px-4`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
