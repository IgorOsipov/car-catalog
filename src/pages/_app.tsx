import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Roboto, Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--titillium",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
