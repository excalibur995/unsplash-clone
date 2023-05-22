const LIKED_IMAGE_KEY = process.env.NEXT_PUBLIC_IMAGE_STORAGE!;

import { useEffect, useState } from "react";
import { UnsplashImageProps } from "~/components/common/UnsplashImage";

function useLikedImageStorage() {
  const [images, setImages] = useState<UnsplashImageProps[]>([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const image = localStorage.getItem(LIKED_IMAGE_KEY);
    if (image !== null) {
      const parseImage = JSON.parse(image);
      setImages(parseImage);
    }
  }, []);

  const onSaveImage = (item: UnsplashImageProps) => {
    const images = localStorage.getItem(LIKED_IMAGE_KEY);
    const parsedImages: UnsplashImageProps[] = JSON.parse(images ?? "[]");
    const imageIndex = parsedImages.findIndex((image) => image.id === item.id);
    if (imageIndex !== -1) {
      parsedImages.splice(imageIndex, 1);
    } else {
      parsedImages.push(item);
    }
    localStorage.setItem(LIKED_IMAGE_KEY, JSON.stringify(parsedImages));
    setImages(parsedImages);
    setUpdate((prev) => !prev);
  };

  const onGetSpesificImages = (item: string) => {
    return images.find((image) => image.id === item);
  };

  return { images, onSaveImage, onGetSpesificImages, update };
}

export default useLikedImageStorage;
