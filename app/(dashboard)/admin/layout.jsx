"use client";

import { useState } from "react";
import "../../../styles/globals.css";
import Sidebar from "./SideBar";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <html>
      <head />
      <body className="bg-background">
        <Sidebar open={open} setOpen={setOpen} />
        <div
          className={`min-h-screen ${
            open ? "ml-72" : "ml-16"
          } duration-500 px-4`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
