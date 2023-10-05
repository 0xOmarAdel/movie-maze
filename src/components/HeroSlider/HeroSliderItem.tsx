import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieType } from "../../types/Movie.types.js";
import apiConfig from "../../api/apiConfig.js";
import HeroSliderTrailerModal from "./HeroSliderTrailerModal.js";

type Props = {
  item: MovieType;
  isActive: boolean;
  pauseSwiper: () => void;
  resumeSwiper: () => void;
};

const HeroSliderItem: React.FC<Props> = ({
  item,
  isActive,
  pauseSwiper,
  resumeSwiper,
}) => {
  const navigate = useNavigate();

  const [overview, setOverview] = useState(item.overview);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setOverview(
          item.overview.length > 120
            ? item.overview.slice(0, 120).trim() + ".."
            : item.overview
        );
      } else {
        setOverview(item.overview);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [item.overview]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openTrailerModal = () => {
    pauseSwiper();
    setModalIsOpen(true);
  };

  const closeTrailerModal = () => {
    resumeSwiper();
    setModalIsOpen(false);
  };

  return (
    <div className="relative">
      <img
        src={apiConfig.originalImage(item.backdrop_path)}
        className="h-[60vh] sm:h-[70vh] md:h-screen w-full bg-cover bg-center select-none"
      />
      <div className="page-container absolute top-1/2 z-40 flex flex-row items-center gap-16 -translate-y-1/2">
        <div className="flex flex-col gap-3 md:gap-5">
          <h2
            className={`text-2xl sm:text-3xl md:text-5xl text-white font-medium opacity-0 -translate-y-full transition duration-700 ${
              isActive && "!opacity-100 !translate-y-0"
            }`}
          >
            {item.title}
          </h2>
          <div
            className={`max-w-4xl text-base sm:text-lg md:text-xl text-gray-100 opacity-0 -translate-y-1/2 transition duration-700 delay-300 ${
              isActive && "!opacity-100 !translate-y-0"
            }`}
          >
            {overview}
          </div>
          <div
            className={`flex flex-col sm:flex-row gap-5 sm:gap-3 opacity-0 -translate-y-1/2 transition duration-700 delay-[600ms] ${
              isActive && "!opacity-100 !translate-y-0"
            }`}
          >
            <button
              className="w-fit px-8 py-1.5 bg-indigo-700 text-base md:text-lg text-white font-medium rounded-3xl"
              onClick={() => navigate("/movie/" + item.id)}
            >
              More info
            </button>
            <button
              className="hidden md:block w-fit px-8 py-1.5 border-2 border-white text-lg text-white font-medium rounded-3xl"
              onClick={openTrailerModal}
            >
              Watch trailer
            </button>
          </div>
        </div>
        <img
          src={apiConfig.w500Image(item.poster_path)}
          alt=""
          className={`hidden md:block w-[15rem] lg:w-[18rem] xl:w-[20rem] rounded-md scale-50 transition duration-700 ${
            isActive && "!scale-100"
          }`}
        />
        <HeroSliderTrailerModal
          movieId={item.id}
          modalIsOpen={modalIsOpen}
          closeTrailerModal={closeTrailerModal}
        />
      </div>
      <div className="absolute inset-0 z-30 w-full h-full bg-black bg-opacity-60"></div>
    </div>
  );
};

export default HeroSliderItem;
