import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ImageResponse } from "~/@types";
import Grid from "../common/Grid";
import UnsplashImage from "../common/UnsplashImage";

interface InfiniteImagesProps extends PropsWithChildren {
  queryKey: string;
  queryFn: QueryFunction;
  updated?: any;
}

const InfiniteImages = ({
  queryKey,
  queryFn,
  updated,
}: InfiniteImagesProps) => {
  const pageRef = useRef(1);
  const { ref, inView } = useInView();
  const { data, fetchNextPage, fetchStatus } = useInfiniteQuery({
    queryKey: [queryKey, updated],
    queryFn: queryFn,
    keepPreviousData: true,
    initialData: { pages: [], pageParams: [] },
    select: ({ pages, pageParams }) => ({
      pages: pages.flat(2),
      pageParams,
    }),
  });

  useEffect(() => {
    if (inView) {
      pageRef.current = pageRef.current + 1;
      fetchNextPage({ pageParam: pageRef.current });
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      <section className="flex">
        <Grid>
          {data?.pages?.map((images, i) => {
            const image = images as unknown as ImageResponse;
            return <UnsplashImage {...image} key={image.id + i} />;
          })}
        </Grid>
      </section>
      {fetchStatus === "idle" && <button ref={ref}>test</button>}
    </>
  );
};

export default InfiniteImages;
