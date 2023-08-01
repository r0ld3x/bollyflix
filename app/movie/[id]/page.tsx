// "use client";

import Link from "next/link";
import Image from "next/image";
import SwiperPage from "@/components/swiper";
import { Suspense } from "react";
import Loading from "@/components/loading";

function formatNumber(input: string) {
  const number = parseInt(input, 10);
  const SI_SYMBOL = ["", "K", "M", "B", "T"];
  const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  if (tier === 0) return number;

  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  const scaledNumber = number / scale;
  const formattedNumber = scaledNumber.toFixed(1);

  return formattedNumber + suffix;
}

function convertMinutesToHoursMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let timeString = "";

  if (hours > 0) {
    timeString += `${hours} hour${hours > 1 ? "s" : ""} `;
  }

  if (remainingMinutes > 0) {
    timeString += `${remainingMinutes} minute${
      remainingMinutes > 1 ? "s" : ""
    }`;
  }

  return timeString.trim();
}

function getFullLanguageName(languageCode: string) {
  const languageNames: { [key: string]: string } = {
    en: "English",
    es: "Spanish",
    fr: "French",
    hi: "Hindi",
    zh: "Chinese",
    ja: "Japanese",
    ko: "Korean",
    de: "German",
    it: "Italian",
    ru: "Russian",
    ar: "Arabic",
    pt: "Portuguese",
    nl: "Dutch",
    th: "Thai",
    id: "Indonesian",
    vi: "Vietnamese",
    tr: "Turkish",
    sv: "Swedish",
    da: "Danish",
    fi: "Finnish",
    el: "Greek",
    pl: "Polish",
    he: "Hebrew",
    bn: "Bengali",
    ta: "Tamil",
    te: "Telugu",
    gu: "Gujarati",
    kn: "Kannada",
    ml: "Malayalam",
    mr: "Marathi",
    pa: "Punjabi",
    ro: "Romanian",
    uk: "Ukrainian",
    fa: "Persian",
    sw: "Swahili",
    tl: "Tagalog",
    so: "Somali",
    sq: "Albanian",
    bs: "Bosnian",
    hr: "Croatian",
    sr: "Serbian",
    gl: "Galician",
    is: "Icelandic",
    lv: "Latvian",
    lt: "Lithuanian",
    mt: "Maltese",
    ms: "Malay",
    no: "Norwegian",
    sk: "Slovak",
    sl: "Slovenian",
    et: "Estonian",
    hy: "Armenian",
    ka: "Georgian",
    uz: "Uzbek",
    az: "Azerbaijani",
    af: "Afrikaans",
    eu: "Basque",
    be: "Belarusian",
    cy: "Welsh",
    fy: "Frisian",
    ha: "Hausa",
    lo: "Lao",
    ne: "Nepali",
    or: "Oriya",
    rw: "Kinyarwanda",
    si: "Sinhala",
    km: "Khmer",
    my: "Burmese",
    ti: "Tigrinya",
    ur: "Urdu",
    yo: "Yoruba",
    zu: "Zulu",
  };

  const fullLanguageName = languageNames[languageCode];

  if (fullLanguageName) {
    return fullLanguageName;
  } else {
    return languageCode;
  }
}

function Home(params: { params: { id: any } }, searchParams: any) {
  return (
    <div>
      <div>
        <Movies id={params.params.id} />
      </div>
    </div>
  );
}

export default Home;

async function Movies(id: { id: string }) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id.id}?api_key=${process.env.API_KEY}`
  );
  const movie = await data.json();
  const pics = await fetch(
    `https://api.themoviedb.org/3/movie/${id.id}/images?api_key=${process.env.API_KEY}`
  );
  const photoes = (await pics.json()).backdrops;
  // const photoes = photoes.backdrops;
  return (
    // <div>
    <div className="relative pb-20">
      {" "}
      {/* Add "pb-20" class to create 20px bottom padding */}
      <div className="absolute z-0 h-full w-full object-cover">
        <Image
          src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
          height={1480} // Updated height with extra 200px
          width={1280}
          className="w-full h-full object-cover"
          quality={50}
          alt={movie.title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black mix-blend-multiply"></div>
      </div>
      <div className="relative text-white sm:text-sm md:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl px-2 sm:px-4 md:px-6 lg:px-10">
        <p className=" pt-8 "></p>
        <SwiperPage photoes={photoes} />
        <p className=" pt-4 "></p>
        <Link href={movie.homepage} className=" pt-20">
          Title: <span className="font-bold">{movie.title}</span>
        </Link>
        <p className="">
          Release Date: <span className="font-bold">{movie.release_date}</span>
        </p>
        <p className="">
          Rating: <span className="font-bold">{movie.vote_average} </span>
        </p>
        <p className="">
          Vote Count: <span className="font-bold">{movie.vote_count} </span>
        </p>
        <p className="">
          Language:{" "}
          <span className="font-bold">
            {getFullLanguageName(movie.original_language)}{" "}
          </span>
        </p>
        <p className="">
          Budget:{" "}
          <span className="font-bold">{formatNumber(movie.budget)} </span>
        </p>
        <p className="">
          Production Companies:{" "}
          <span className="font-bold">
            {movie.production_companies.map((company: any, index: number) => (
              <span key={company.id}>
                {""}
                {index > 0 && ", "}
                {company.name}
              </span>
            ))}{" "}
          </span>
        </p>
        <p className="">
          Production Countries:{" "}
          <span className="font-bold">
            {movie.production_countries.map((company: any, index: number) => (
              <span key={company.id}>
                {""}
                {index > 0 && ", "}
                {company.name}
              </span>
            ))}{" "}
          </span>
        </p>
        <p className="">
          Language Spoken:{" "}
          <span className="font-bold">
            {movie.spoken_languages.map((company: any, index: number) => (
              <span key={company.id}>
                {""}
                {index > 0 && ", "}
                {company.name}
              </span>
            ))}{" "}
          </span>
        </p>
        <p className="">
          Revenue:
          <span className="text-sm font-bold">
            {" "}
            {formatNumber(movie.revenue)}
          </span>
        </p>
        <p className="">
          Time:
          <span className="text-sm font-bold">
            {" "}
            {convertMinutesToHoursMinutes(movie.runtime)}
          </span>
        </p>
        <p className="">
          Tagline:
          <span className="text-sm font-bold"> {movie.tagline}</span>
        </p>
        <p className="">
          Status:
          <span
            className={`text-sm font-bold ${
              movie.status === "Released" ? "text-green-500" : "text-red-500"
            }`}
          >
            {" "}
            {movie.status}
          </span>
        </p>
        <p className="">
          Overview: <span className="text-sm">{movie.overview}</span>
        </p>
      </div>
    </div>
  );
}
