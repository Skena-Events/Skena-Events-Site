import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} ${mono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
