import "@fontsource/dm-mono";
import "@fontsource/dm-sans";
import "~/styles/globals.css";

import { initLightboxJS } from "lightbox.js-react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "~/components/layout/Layout";
import QueryConfig from "~/drivers/QueryConfig";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);
  return (
    <QueryConfig>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryConfig>
  );
}
