import type { AppProps } from "next/app";
import { GoogleTagManager } from "../components/GoogleTagManager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
