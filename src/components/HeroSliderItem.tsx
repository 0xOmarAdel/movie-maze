import apiConfig from "../api/apiConfig.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSliderTrailerModal from "./HeroSliderTrailerModal.js";

const HeroSliderItem = ({ item, isActive, pauseSwiper, resumeSwiper }) => {
  const navigate = useNavigate();

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
        className="h-screen w-full select-none"
      />
      <div className="page-container absolute top-1/2 z-40 flex flex-row items-center gap-16 -translate-y-1/2">
        <div className="flex flex-col gap-8">
          <h2
            className={`text-5xl text-white font-medium opacity-0 -translate-y-full transition duration-700 ${
              isActive && "!opacity-100 !translate-y-0"
            }`}
          >
            {item.title}
          </h2>
          <div
            className={`max-w-4xl text-xl text-gray-100 opacity-0 -translate-y-1/2 transition duration-700 delay-300 ${
              isActive && "!opacity-100 !translate-y-0"
            }`}
          >
            {item.overview}
          </div>
          <div
            className={`flex flex-row gap-3 opacity-0 -translate-y-1/2 transition duration-700 delay-[600ms] ${
              isActive && "!opacity-100 !translate-y-0"
            }`}
          >
            <button
              className="px-8 py-1.5 bg-indigo-700 text-lg text-white font-medium rounded-3xl"
              onClick={() => navigate("/movie/" + item.id)}
            >
              More info
            </button>
            <button
              className="px-8 py-1.5 border-2 border-white text-lg text-white font-medium rounded-3xl"
              onClick={openTrailerModal}
            >
              Watch trailer
            </button>
          </div>
        </div>
        <img
          src={apiConfig.w500Image(item.poster_path)}
          alt=""
          className={`w-[22rem] rounded-3xl scale-50 transition duration-700 ${
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
