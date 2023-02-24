import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Component {...pageProps} />
    </div>
  );
}
