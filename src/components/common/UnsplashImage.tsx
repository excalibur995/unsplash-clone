import Image from "next/image";
import { ImageResponse } from "~/@types";

type UnsplashImageProps = Pick<
  ImageResponse,
  "urls" | "alt_description" | "height" | "width" | "user"
>;

const UserSection = ({ user }: Pick<UnsplashImageProps, "user">) => {
  return (
    <div className="flex flex-row gap-4 z-40 items-center text-white">
      <Image
        src={user.profile_image.small}
        alt={user.name}
        width={32}
        height={32}
        className="rounded-full min-w-[32px] min-h-[32px]"
      />
      <div className="relative">
        <div className="font-bold">{user.name}</div>
        {user.for_hire && <div className="text-xs">Available for hire</div>}
      </div>
    </div>
  );
};

const UnsplashImage = (props: UnsplashImageProps) => {
  const { urls, alt_description, height, width, user } = props;
  return (
    <>
      <section className="bg-white p-4 [&>*]:text-black md:hidden">
        <UserSection user={user} />
      </section>
      <figure className="relative overflow-hidden cursor-zoom-in lg:hover:brightness-75 transition-all [&>section]:hover:visible">
        <section className="lg:inline hidden absolute z-20 bottom-4 right-2 left-2 invisible">
          <UserSection user={user} />
        </section>
        <Image
          src={urls.regular}
          alt={alt_description}
          placeholder="blur"
          blurDataURL={urls.full}
          width={width}
          height={height}
        />
      </figure>
    </>
  );
};

export default UnsplashImage;
