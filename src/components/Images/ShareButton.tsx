import { Cross2Icon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { UnsplashImageProps } from "../common/UnsplashImage";

const shareButtons = [
  {
    button: FacebookShareButton,
    icon: FacebookIcon,
  },
  {
    button: LineShareButton,
    icon: LineIcon,
  },
  {
    button: TelegramShareButton,
    icon: TelegramIcon,
  },
  {
    button: TwitterShareButton,
    icon: TwitterIcon,
  },
  {
    button: WhatsappShareButton,
    icon: WhatsappIcon,
  },
];

const ShareButton = (props: Pick<UnsplashImageProps, "links">) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className="rounded-lg p-2 h-[35px] inline-flex items-center justify-center text-black bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
        aria-label="Update dimensions"
      >
        Share
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded p-6 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
        side="top"
      >
        <div className="flex flex-col gap-2.5">
          <div className="flex space-x-4">
            {shareButtons.map((shareButton, index) => {
              const Button = shareButton.button;
              const Icon = shareButton.icon;

              return (
                <Button url={props.links.html} key={index}>
                  <Icon size={32} round={true} />
                </Button>
              );
            })}
          </div>
        </div>
        <Popover.Close
          className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
          aria-label="Close"
        >
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default ShareButton;
