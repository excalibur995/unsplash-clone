import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import React, { PropsWithChildren, useEffect } from "react";

function propsToImagesChildren(children: React.ReactNode) {
  const images = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return {
        src: child.props.urls?.regular ?? "",
        alt: child.props.alt_description ?? "Image Alt",
      };
    }
    return null;
  })?.filter((image) => image !== null);

  return images ?? [];
}

const Grid = (props: PropsWithChildren) => {
  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });
  return (
    <SlideshowLightbox
      lightboxIdentifier="lightbox1"
      framework="next"
      className="md:columns-2 lg:columns-3 md:space-y-6"
      images={propsToImagesChildren(props.children)}
      theme="lightbox"
    >
      {props.children}
    </SlideshowLightbox>
  );
};

export default Grid;
