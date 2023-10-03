import { useState, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper as SwiperClass } from "swiper";
import HeroSliderItem from "./HeroSliderItem.js";
import { MovieType } from "../types/Movie.types.ts";
import useAxios from "../hooks/useAxios.tsx";

type AxiosResponse = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

const HeroSlider = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const { data, loading, error } = useAxios<AxiosResponse>("movie/popular");

  useEffect(() => {
    if (data) {
      setMovies(data.results.slice(0, 5));
    }
  }, [data]);

  console.log(loading, error);

  const swiperRef = useRef<SwiperClass | null>(null);

  const pauseSwiper = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const resumeSwiper = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  const updateSwiperRef = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
  };

  return (
    <div className="">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSwiper={updateSwiperRef}
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <HeroSliderItem
                item={item}
                isActive={isActive}
                pauseSwiper={pauseSwiper}
                resumeSwiper={resumeSwiper}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
