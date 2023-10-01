import { useEffect, useState } from "react";
import tmdbApi from "../api/tmdbApi.ts";
import { useParams } from "react-router-dom";
import SwiperList from "../components/SwiperList/SwiperList.tsx";
import apiConfig from "../api/apiConfig.ts";
import CastList from "../components/ItemPageInfo/CastList.tsx";
import Trailer from "../components/ItemPageInfo/Trailer.tsx";
import { CategoriesTypes } from "../types/Categories.types.ts";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ItemRating from "../components/ItemPageInfo/ItemRating.tsx";

const Details = () => {
  const { category, id } = useParams<{
    category: CategoriesTypes;
    id: string;
  }>();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category!, id!, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
      console.log(response);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="relative h-[50vh] bg-cover"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          >
            <div className="absolute inset-0 z-30 w-full h-full bg-black bg-opacity-10"></div>
            <div
              className="absolute inset-0 z-30 w-full h-full"
              style={{
                backgroundImage: "linear-gradient(to top, #0f0f0f, #00000000)",
              }}
            ></div>
          </div>
          <div className="py-16 px-24 flex flex-col gap-10">
            <div className="z-50 -mt-60 flex flex-row justify-center gap-10">
              <div
                className="h-[480px] w-[300px] bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
              <div className="max-w-4xl flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row items-center gap-3">
                    <ItemRating rating={item.vote_average} />
                    <h1 className="text-5xl text-white font-medium">
                      {item.title || item.name}
                    </h1>
                  </div>
                  <div className="flex flex-row gap-2">
                    {item.genres?.slice(0, 5).map((genre, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 text-gray-200 border border-gray-200 rounded-3xl"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-3xl text-white">Overview</h2>
                    <p className="text-lg text-gray-300">{item.overview}</p>
                  </div>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
            <Trailer id={item.id} />
            <div className="flex flex-col gap-5">
              <SwiperList
                title={`Similar ${
                  category === "movie" ? "Movies" : "TV Shows"
                }`}
                category={category}
                type="similar"
                id={item.id}
                link={false}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
