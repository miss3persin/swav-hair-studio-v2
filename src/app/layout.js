import { DM_Sans } from "next/font/google";
import CursorEffects from "./components/CursorEffects";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SWAV HAIR STUDIOS",
  description: "Welcome to the well renowned SWAV HAIR STUDIOS website page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
      <ScrollToTop />
        {children}
      <CursorEffects />
        </body>
    </html>
  );
}
