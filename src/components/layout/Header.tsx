import Link from "next/link";

const routers = [
  {
    name: "Home",
    routes: "/",
  },
  {
    name: "Explore",
    routes: "/explore",
  },
  {
    name: "Leagues",
    routes: "/leagues",
  },
] as const;

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full py-4 bg-white dark:border-b-[#2d2d2d]">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4">
          <div className="flex items-center justify-between space-x-10 lg:space-x-20 w-full">
            <Link className="inline-flex items-center gap-4" href="/">
              <svg
                width="32"
                height="32"
                className="UP8CN"
                viewBox="0 0 32 32"
                version="1.1"
                aria-labelledby="unsplash-home"
                aria-hidden="false"
              >
                <desc lang="en-US">Unsplash logo</desc>
                <title id="unsplash-home">Unsplash Home</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
              </svg>
              <span className="text-2xl font-bold">Unsplash Clone</span>
            </Link>
            <section>
              <Link href="/likes">
                <svg
                  width="16"
                  height="32"
                  className="Gdg38"
                  viewBox="0 0 24 24"
                  version="1.1"
                  aria-hidden="false"
                >
                  <desc lang="en-US">A heart</desc>
                  <path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
                </svg>
              </Link>
            </section>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
