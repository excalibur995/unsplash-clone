import "@fontsource/dm-mono";
import "@fontsource/dm-sans";
import "~/styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "~/components/layout/Layout";
import QueryConfig from "~/drivers/QueryConfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryConfig>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryConfig>
  );
}
