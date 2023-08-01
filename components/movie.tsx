// "use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/components/loading";

export default function Movie(mid: { mid: string }) {
  const id = mid.mid;
  return (
    <div className="px-4 py-2 items-center sm:px-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {" "}
        <Suspense fallback={<Loading />}>
          <Albums mid={id} />
        </Suspense>
      </div>
    </div>
  );
}

async function Albums(mid: any) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${mid.mid}?api_key=${process.env.API_KEY}`,
      { cache: "no-cache" }
    );
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const mov = await response.json();
    const movies = mov.results;
    if (!Array.isArray(movies)) {
      throw new Error("Invalid data format. Movies is not an array.");
    }

    return (
      <>
        {movies.map((video: any) => (
          <Link
            href={"/movie/" + video.id}
            key={video.id}
            className="rounded-sm border-2 border-slate-500 border-solid inline-block w-full md:w-auto sm:mx-4 md:mx-3 lg:mx-2 xl:mx-2 mb-3"
          >
            <h1>
              <Image
                src={"https://image.tmdb.org/t/p/original" + video.poster_path}
                alt="video"
                className="object-cover w-full h-full"
                height={100}
                width={1280}
              />
            </h1>
            <p className="text-center py-4 hover:text-purple-600 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl">
              {video.title}
            </p>
          </Link>
        ))}
      </>
    );
  } catch (error) {
    return (
      <div className="flex justify-center w-full text-center">
        <p className=" w-full self-center text-center ">
          Can't Fetch data right now
        </p>
      </div>
    );
  }
}
