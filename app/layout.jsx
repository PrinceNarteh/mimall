import "../styles/globals.css";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";
import dynamic from "next/dynamic";

function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {/* <MainNavbar /> */}
        {/* <SubNavbar /> */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
