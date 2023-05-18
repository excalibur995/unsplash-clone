import { InferGetServerSidePropsType } from "next";
import SearchHero from "~/components/SearchHero/SearchHero";
import Grid from "~/components/common/Grid";
import UnsplashImage from "~/components/common/UnsplashImage";
import { getPhotos, getRandomPhotos } from "~/lib/network";

export async function getServerSideProps() {
  const data = await getPhotos();
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
        <Grid>
          {props.data.map((images, i) => (
            <UnsplashImage {...images} key={images.id + i} />
          ))}
        </Grid>
      </div>
    </main>
  );
}
