import "../styles/globals.css";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";

export default function RootLayout({ children }) {
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
