"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  FreeMode,
  EffectCube,
  EffectCards,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function SwiperPage({ photoes }: { photoes: any[] }) {
  return (
    <div>
      <Swiper
        className="pt-10"
        modules={[
          Navigation,
          Pagination,
          FreeMode,
          A11y,
          Autoplay,
          EffectCards,
          EffectCube,
        ]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000 }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {photoes.map((photo: { file_path: React.Key | null | undefined }) => (
          <SwiperSlide key={photo?.file_path}>
            <Image
              src={"https://image.tmdb.org/t/p/original/" + photo.file_path}
              height={200}
              width={300}
              className="object-cover w-72 h-48 md:w-96 md:h-64 lg:w-120 lg:h-80"
              alt={"Slider"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
