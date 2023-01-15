import { Poppins } from "@next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
