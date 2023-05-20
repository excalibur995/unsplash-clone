import { ImageResponse, RandomPhoto, SearchResult } from "~/@types";
import { createParams } from "./utils";

export async function getPhotos({ pageParam = 1 }: { pageParam?: number }) {
  try {
    const urls = await createParams({
      url: process.env.NEXT_PUBLIC_BASE_URL + "photos/",
      params: {
        client_id: process.env.NEXT_PUBLIC_ACCESS_KEY,
        page: pageParam ?? 1,
        per_page: 12,
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

type SearchPhotosParams = {
  query: string;
  pageParams?: number;
};
export async function searchPhotos(params: SearchPhotosParams) {
  try {
    const urls = await createParams({
      url: process.env.NEXT_PUBLIC_BASE_URL + "search/photos/",
      params: {
        client_id: process.env.NEXT_PUBLIC_ACCESS_KEY,
        query: params.query,
        page: params.pageParams ?? 1,
      },
    });
    const request = await fetch(urls.href);
    const response: SearchResult = await request.json();
    return response.results;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
