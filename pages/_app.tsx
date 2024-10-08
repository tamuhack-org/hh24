import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><title>HH 2024</title></Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
