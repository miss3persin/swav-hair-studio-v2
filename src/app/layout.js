import { DM_Sans } from "next/font/google";
import CursorEffects from "./components/CursorEffects";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";
import Head from 'next/head';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SWAV HAIR STUDIOS",
  description: "Welcome to the well renowned SWAV HAIR STUDIOS website page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {/* <link rel="icon" href="/favicon.png" sizes="512x512" type="image/png" /> */}
      </Head>
      <body className={dmSans.className}>
      <ScrollToTop />
        {children}
      <CursorEffects />
        </body>
    </html>
  );
}
