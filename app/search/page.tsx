import MovieFilter from "@/components/mfilters";
import Movie from "@/components/movie";
import SearchMovie from "@/components/searchmovie";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page(params: { searchParams: { query: any } }) {
  const id = params.searchParams.query;
  return (
    <div>
      <div className="">
        <MovieFilter id={id} />
      </div>
      <div>
        <SearchMovie mid={id} />
      </div>
      <footer className="h-24 flex text-center justify-center align-middle flex-col">
        <h1 className="self-center">
          Made By{" "}
          <Link
            className="text-purple-500"
            href="https://r0ld3x.github.io/r0ld3x"
          >
            Roldex
          </Link>
        </h1>
        <h1 className="self-center">
          Source Code{" "}
          <Link
            className="text-purple-500"
            href="https://github.com/r0ld3x/bollyflix"
          >
            Github
          </Link>
        </h1>
      </footer>
    </div>
  );
}

export default Page;
