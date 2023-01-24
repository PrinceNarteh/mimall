import { Poppins } from "@next/font/google";
import "../styles/globals.css";

import MainNav from "./MainNavbar";
import SubNavbar from "./SubNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <head />
      <body>
        <MainNav />
        <SubNavbar />
        {children}
      </body>
    </html>
  );
}