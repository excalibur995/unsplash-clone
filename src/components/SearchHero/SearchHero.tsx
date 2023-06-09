import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { RandomPhoto } from "~/@types";
import Input from "../common/Input";

const searchIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.371 1.888 11.113C0.629333 9.85433 0 8.31667 0 6.5C0 4.68333 0.629333 3.14567 1.888 1.887C3.146 0.629 4.68333 0 6.5 0C8.31667 0 9.85433 0.629 11.113 1.887C12.371 3.14567 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.325 15.925C17.5083 16.1083 17.6 16.3333 17.6 16.6C17.6 16.8667 17.5 17.1 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5627 8.81267 11 7.75 11 6.5C11 5.25 10.5627 4.18733 9.688 3.312C8.81267 2.43733 7.75 2 6.5 2C5.25 2 4.18733 2.43733 3.312 3.312C2.43733 4.18733 2 5.25 2 6.5C2 7.75 2.43733 8.81267 3.312 9.688C4.18733 10.5627 5.25 11 6.5 11Z"
      fill="#C4C4C4"
    />
  </svg>
);

const SearchHero = (props: RandomPhoto) => {
  const [query, setQuery] = useState("");
  const { push } = useRouter();
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    push("/s/" + query);
  };
  return (
    <div className="relative aspect-video w-full max-h-[594px] bg-black overflow-hidden">
      <section className="brightness-50 absolute w-screen h-[594px]">
        <Image
          src={props.urls.full}
          alt="Image of the Day"
          fill
          className="object-fill object-top"
          placeholder="blur"
          sizes="100vw"
          blurDataURL={props.urls.thumb}
          priority
        />
      </section>
      <section className="bg-transparent relative text-white flex flex-col justify-center items-center mx-auto h-full p-4">
        <section className="flex flex-col gap-4 max-w-xl w-full">
          <h1 className="font-bold text-5xl">Unsplash</h1>
          <section className="text-sm">
            <p>The internet’s source for visuals.</p>
            <p>Powered by creators everywhere.</p>
          </section>
          <form onSubmit={onSubmit}>
            <Input
              value={query}
              prefix={searchIcon}
              placeholder="Search High Resolution Image"
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </form>
        </section>
      </section>
    </div>
  );
};

export default SearchHero;
