import { useState, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import tmdbApi from "../api/tmdbApi.ts";
import HeroSliderItem from "./HeroSliderItem.js";

const HeroSlider = () => {
  const [movies, setMovies] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList("popular", {
          params,
        });
        setMovies(response.results.slice(0, 5));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  const pauseSwiper = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const resumeSwiper = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
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
        ref={swiperRef}
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
