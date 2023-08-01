import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["cyrillic"],
});

function MovieFilter(id: any) {
  return (
    <div>
      <div className="flex w-full justify-between text-center items-center px-4 py-2 bg-gray-700 text-white dark:text-white sm:px-8 sm:py-3 md:text-sm md:px-12 md:py-3 lg:px-16 lg:py-4 xl:px-20 xl:py-5 h-12">
        <Link
          className={cn("text-xs lg:text-lg xl:text-xl sm:text-sm px-4 py-2 ", {
            "bg-slate-800 border-t-2": !id.id,
          })}
          href="/"
        >
          HOME
        </Link>
        <Link
          className={cn("text-xs lg:text-lg xl:text-xl sm:text-sm px-4 py-2 ", {
            "bg-slate-800 ": id.id === "popular", // Highlight when id is "popular"
          })}
          href="/popular"
        >
          Popular
        </Link>
        <Link
          className={cn("text-xs lg:text-lg xl:text-xl sm:text-sm px-4 py-2 ", {
            "bg-slate-800": id.id === "top_rated", // Highlight when id is "top_rated"
          })}
          href="/top_rated"
        >
          Top Rated
        </Link>
        <Link
          className={cn("text-xs lg:text-lg xl:text-xl sm:text-sm px-4 py-2 ", {
            "bg-slate-800": id.id === "upcoming", // Highlight when id is "upcoming"
          })}
          href="/upcoming"
        >
          Upcoming
        </Link>
        <Link
          className={cn("text-xs lg:text-lg xl:text-xl sm:text-sm px-4 py-2 ", {
            "bg-slate-800": id.id === "now_playing", // Highlight when id is "now_playing"
          })}
          href="/now_playing"
        >
          Now Playing
        </Link>
      </div>
    </div>
  );
}

export default MovieFilter;
