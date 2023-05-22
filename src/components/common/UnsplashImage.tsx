import Image from "next/image";
import { ImageResponse } from "~/@types";

import LikedButton from "../Images/LikedButton";
const LIKED_IMAGE_KEY = process.env.NEXT_PUBLIC_IMAGE_STORAGE!;

export type UnsplashImageProps = Pick<
  ImageResponse,
  "urls" | "alt_description" | "height" | "width" | "user" | "id"
>;

const UserSection = ({
  data,
  onCallback,
}: {
  data: UnsplashImageProps;
  onCallback?: () => void;
}) => {
  const { user, ...rest } = data;

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
        <LikedButton {...rest} user={user} onCallback={onCallback} />
      </section>
    </div>
  );
};

const UnsplashImage = (
  props: UnsplashImageProps & { onCallback?: () => void }
) => {
  const { urls, alt_description, height, width, user, id } = props;
  return (
    <>
      <section className="bg-white [&>*]:text-black md:hidden">
        <UserSection
          data={{ urls, alt_description, height, width, user, id }}
          onCallback={props.onCallback}
        />
      </section>
      <section className="relative overflow-hidden  [&>section]:hover:visible">
        <section className="lg:inline hidden absolute z-20 bottom-0 left-0 right-0 invisible section-item">
          <UserSection
            data={{ urls, alt_description, height, width, user, id }}
            onCallback={props.onCallback}
          />
        </section>
        <figure className="lg:hover:brightness-50 transition-all">
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
