import { useState, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper as SwiperClass } from "swiper";
import tmdbApi from "../api/tmdbApi.ts";
import HeroSliderItem from "./HeroSliderItem.js";
import { MovieType } from "../types/Movie.types.ts";

const HeroSlider = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList("popular", {
          params,
        });
        const movies = response.data.results;
        setMovies(movies.slice(0, 5));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

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
