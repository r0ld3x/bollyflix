import React from "react";
import Search from "./search";
import { Permanent_Marker } from "next/font/google";

import { Edu_SA_Beginner } from "next/font/google";
import { cn } from "@/lib/utils";
import Toggle from "./theme-toggle";
import { redirect } from "next/navigation";
import Link from "next/link";

const edusa = Edu_SA_Beginner({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});

const marker = Permanent_Marker({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});


const Navbar = () => {
  return (
    <div className="flex gap-5 justify-between text-center items-center px-4 py-2 bg-slate-800 sm:px-8 md:px-12 lg:px-16 ">
      <div className="flex lg:pb-2 cursor-pointer">
        <Link
          href="/"
          className={cn(
            "text-xl  sm:text-2xl mr-1 text-white dark:text-white lg:text-3xl text-center",
            edusa.className
          )}
        >
          Bolly
          <span
            className={cn(
              "text-xl sm:text-2xl text-purple-600 lg:text-3xl",
              marker.className
            )}
          >Flex
          </span>
        </Link>
      </div>
      <div className="flex gap-2">
        <div>
          <Search />
        </div>
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
