import { InferGetServerSidePropsType } from "next";
import InfiniteImages from "~/components/Images/InfitiImages";
import SearchHero from "~/components/SearchHero/SearchHero";
import { getPhotos, getRandomPhotos } from "~/lib/network";

export async function getServerSideProps() {
  const data = await getPhotos({});
  const random = await getRandomPhotos();
  return {
    props: {
      data,
      random,
    },
  };
}

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <main className="relative">
      <div className="md:mb-12">
        <SearchHero {...props.random} />
      </div>
      <div className="container mx-auto">
        <InfiniteImages queryFn={getPhotos} queryKey="infiteSearchPhotos" />
      </div>
    </main>
  );
}
