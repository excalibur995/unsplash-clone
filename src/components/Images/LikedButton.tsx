import clsx from "clsx";
import { ImageResponse } from "~/@types";
import useIsClient from "~/lib/hooks/useClient";
import useLikedImageStorage from "~/lib/hooks/useLikedImageStorage";

type LikedButtonProps = Pick<
  ImageResponse,
  "urls" | "alt_description" | "height" | "width" | "user" | "id"
>;

const LikedButton = (props: LikedButtonProps & { onCallback?: () => void }) => {
  const isClient = useIsClient();

  const { onGetSpesificImages, onSaveImage } = useLikedImageStorage();

  const liked = onGetSpesificImages(props.id);

  const onSavedLikeData = () => {
    onSaveImage(props);
    props?.onCallback?.();
  };

  if (isClient) {
    return (
      <div
        onClick={onSavedLikeData}
        className="p-1 bg-white border border-zinc-200 rounded-lg cursor-pointer active:translate-y-1 transition-all"
      >
        <svg
          width="24"
          height="24"
          className={clsx({ "fill-red-500": liked?.id === props.id })}
          viewBox="0 0 24 24"
          version="1.1"
          aria-hidden="false"
        >
          <desc lang="en-US">A heart</desc>
          <path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
        </svg>
      </div>
    );
  }
  return null;
};

export default LikedButton;
