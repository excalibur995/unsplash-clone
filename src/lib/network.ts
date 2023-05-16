import { ImageResponse } from "~/@types";

export async function getPhotos() {
  try {
    const request = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/photos/?client_id=${process.env.ACCESS_KEY}`
    );
    const response: ImageResponse[] = await request.json();
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
