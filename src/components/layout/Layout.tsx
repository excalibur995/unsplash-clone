import Head from "next/head";
import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Unsplash Clone</title>
        <meta name="description" content="Unsplash Cloned App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white pt-[75px]">
        <Header />
        <main className="mb-[186px] flex-grow">
          <div className="mx-auto w-full">{children}</div>
        </main>
      </div>
    </>
  );
}
