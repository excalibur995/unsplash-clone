import Grid from "~/components/common/Grid";
import UnsplashImage from "~/components/common/UnsplashImage";
import useLikedImageStorage from "~/lib/hooks/useLikedImageStorage";

const LikesPage = () => {
  const { images, update } = useLikedImageStorage();
  console.log(update);
  return (
    <main className="container mx-auto">
      <div className="p-4">
        <h1 className="text-3xl text-center md:text-left md:text-6xl my-20 font-bold">
          Liked Images
        </h1>
      </div>
      <Grid>
        {images?.map((image, i) => {
          return <UnsplashImage {...image} key={image.id + i} />;
        })}
      </Grid>
    </main>
  );
};

export default LikesPage;
