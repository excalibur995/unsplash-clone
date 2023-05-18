import { ImageResponse, RandomPhoto } from "~/@types";
import { createParams } from "./utils";

export async function getPhotos() {
  try {
    const urls = await createParams({
      url: process.env.NEXT_PUBLIC_BASE_URL + "photos/",
      params: {
        client_id: process.env.NEXT_PUBLIC_ACCESS_KEY,
      },
    });

    const request = await fetch(urls.href);
    const response: ImageResponse[] = await request.json();
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getRandomPhotos() {
  try {
    const urls = await createParams({
      url: process.env.NEXT_PUBLIC_BASE_URL + "photos/random/",
      params: {
        client_id: process.env.NEXT_PUBLIC_ACCESS_KEY,
        orientation: "landscape",
      },
    });

    const request = await fetch(urls.href);
    const response: RandomPhoto = await request.json();
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
