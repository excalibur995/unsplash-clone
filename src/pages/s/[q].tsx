import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import InfiniteImages from "~/components/Images/InfitiImages";
import Input from "~/components/common/Input";
import { searchPhotos } from "~/lib/network";

const searchIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.371 1.888 11.113C0.629333 9.85433 0 8.31667 0 6.5C0 4.68333 0.629333 3.14567 1.888 1.887C3.146 0.629 4.68333 0 6.5 0C8.31667 0 9.85433 0.629 11.113 1.887C12.371 3.14567 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.325 15.925C17.5083 16.1083 17.6 16.3333 17.6 16.6C17.6 16.8667 17.5 17.1 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5627 8.81267 11 7.75 11 6.5C11 5.25 10.5627 4.18733 9.688 3.312C8.81267 2.43733 7.75 2 6.5 2C5.25 2 4.18733 2.43733 3.312 3.312C2.43733 4.18733 2 5.25 2 6.5C2 7.75 2.43733 8.81267 3.312 9.688C4.18733 10.5627 5.25 11 6.5 11Z"
      fill="#C4C4C4"
    />
  </svg>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query.q;
  if (!query) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  const result = await searchPhotos({ query: (query as string) ?? "" });
  return {
    props: {
      result,
    },
  };
}

const SearchPages = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { push, query: routerQuery } = useRouter();
  const [searchQuery, setSearchQuery] = useState(routerQuery.q ?? "");
  const [query, setQuery] = useState(routerQuery.q ?? "");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(query);
    push("/s/" + query, undefined, { shallow: true });
  };

  useEffect(() => {
    setSearchQuery(routerQuery.q as string);
    setQuery(routerQuery.q as string);
  }, [routerQuery.q]);

  return (
    <>
      <Head>
        <title>{searchQuery}</title>
        <meta name="description" content="Unsplash Cloned App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <div className="flex flex-col gap-4 p-4 md:mb-12">
          <h1 className="font-bold text-4xl">{searchQuery}</h1>
          <form onSubmit={onSubmit}>
            <Input
              name="input"
              value={query}
              prefix={searchIcon}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </form>
        </div>
        <InfiniteImages
          updated={searchQuery}
          queryFn={({ pageParam }) =>
            searchPhotos({
              query: searchQuery as string,
              pageParams: pageParam,
            })
          }
          queryKey="infiteSearchPhotos"
        />
      </main>
    </>
  );
};

export default SearchPages;
