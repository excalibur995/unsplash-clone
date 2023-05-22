import Image from "next/image";
import { ImageResponse } from "~/@types";

import useLikedImageStorage from "~/lib/hooks/useLikedImageStorage";
import LikedButton from "../Images/LikedButton";

export type UnsplashImageProps = Pick<
  ImageResponse,
  "urls" | "alt_description" | "height" | "width" | "user" | "id"
>;

const UserSection = ({
  data,
  onCallback,
  liked,
}: {
  data: UnsplashImageProps;
  onCallback?: () => void;
  liked?: boolean;
}) => {
  const { user, ...rest } = data;

  const { onSaveImage } = useLikedImageStorage();

  return (
    <div className="flex flex-row gap-4 z-40 items-center justify-between text-white w-full p-4">
      <section className="flex flex-row w-full gap-2 items-center">
        <section className=" max-h-[32px] max-w-[32px]">
          <Image
            src={user.profile_image.small}
            alt={user.name}
            width={32}
            height={32}
            className="rounded-full min-w-[32px] min-h-[32px] w-full h-full"
          />
        </section>
        <div className="relative">
          <div className="font-bold">{user.name}</div>
          {user.for_hire && <div className="text-xs">Available for hire</div>}
        </div>
      </section>
      <section className="flex flex-col w-fit">
        <LikedButton
          {...rest}
          user={user}
          onCallback={onCallback}
          onSaveImage={onSaveImage}
          liked={liked}
        />
      </section>
    </div>
  );
};

const UnsplashImage = (
  props: UnsplashImageProps & { onCallback?: () => void }
) => {
  const { urls, alt_description, height, width, user, id } = props;
  const { onGetSpesificImages, forceUpdate } = useLikedImageStorage();

  const forceCallback = () => {
    props?.onCallback?.();
    forceUpdate();
  };

  return (
    <>
      <section className="bg-white [&>*]:text-black md:hidden">
        <UserSection
          data={{ urls, alt_description, height, width, user, id }}
          onCallback={forceCallback}
          liked={onGetSpesificImages(id)?.id === id}
        />
      </section>
      <section className="relative overflow-hidden ">
        <section className=" md:inline hidden absolute z-20 bottom-0 left-0 right-0  section-item">
          <UserSection
            data={{ urls, alt_description, height, width, user, id }}
            onCallback={forceCallback}
            liked={onGetSpesificImages(id)?.id === id}
          />
        </section>
        <figure className="brightness-75  lg:hover:brightness-50 transition-all">
          <Image
            src={urls.regular}
            alt={alt_description ?? "Images"}
            placeholder="blur"
            blurDataURL={urls.full}
            width={width}
            height={height}
            data-lightboxjs="lightbox1"
          />
        </figure>
      </section>
    </>
  );
};

export default UnsplashImage;
