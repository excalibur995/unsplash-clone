import { InferGetServerSidePropsType } from "next";
import Grid from "~/components/common/Grid";
import UnsplashImage from "~/components/common/UnsplashImage";
import { getPhotos } from "~/lib/network";

export async function getServerSideProps() {
  const data = await getPhotos();
  return {
    props: {
      data,
    },
  };
}

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <main className="max-w-7xl mx-auto">
      <Grid>
        {props.data.map((images) => (
          <UnsplashImage {...images} key={images.id} />
        ))}
      </Grid>
    </main>
  );
}
