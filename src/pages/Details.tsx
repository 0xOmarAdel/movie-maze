import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CategoriesTypes } from "../types/Categories.types.ts";
import tmdbApi from "../api/tmdbApi.ts";
import ItemRating from "../components/ItemPageInfo/ItemRating.tsx";
import ItemOverview from "../components/ItemPageInfo/ItemOverview.tsx";
import ItemStatus from "../components/ItemPageInfo/ItemStatus.tsx";
import ItemReleaseDate from "../components/ItemPageInfo/ItemReleaseDate.tsx";
import ItemRunTime from "../components/ItemPageInfo/ItemRunTime.tsx";
import ItemTitle from "../components/ItemPageInfo/ItemTitle.tsx";
import ItemSeasons from "../components/ItemPageInfo/ItemSeasons.tsx";
import ItemPoster from "../components/ItemPageInfo/ItemPoster.tsx";
import ItemTagLine from "../components/ItemPageInfo/ItemTagLine.tsx";
import ItemBanner from "../components/ItemPageInfo/ItemBanner.tsx";
import Genres from "../components/ItemPageInfo/Genres.tsx";
import CastList from "../components/ItemPageInfo/CastList.tsx";
import Trailer from "../components/ItemPageInfo/Trailer.tsx";
import SwiperList from "../components/SwiperList/SwiperList.tsx";
import "react-circular-progressbar/dist/styles.css";

const Details = () => {
  const navigate = useNavigate();
  const { category, id } = useParams<{
    category: CategoriesTypes;
    id: string;
  }>();

  useEffect(() => {
    const allowedCategories = ["tv", "movie"];

    if (!allowedCategories.includes(category!)) {
      navigate("/error");
    }
  }, [navigate, category]);

  const [item, setItem] = useState<any>(null);

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
          <ItemBanner image={item.backdrop_path || item.poster_path} />
          <div className="page-container flex flex-col gap-14">
            <div className="z-50 -mt-[26rem] flex flex-row justify-center gap-10">
              <ItemPoster image={item.poster_path || item.backdrop_path} />
              <div className="max-w-4xl flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-3">
                      <ItemRating rating={item.vote_average} />
                      <ItemTitle title={item.title || item.name} />
                    </div>
                    <ItemTagLine tagline={item.tagline} />
                  </div>
                  <Genres genres={item.genres} />
                  <div className="flex flex-col gap-5">
                    <ItemOverview overview={item.overview} />
                    <div className="flex flex-col md:flex-row gap-6">
                      <ItemStatus status={item.status} />
                      <ItemReleaseDate
                        date={item.release_date ?? item.first_air_date}
                      />
                      {item.runtime >= 0 ? (
                        <ItemRunTime runtime={item.runtime} />
                      ) : (
                        <ItemSeasons seasons={item.seasons?.length} />
                      )}
                    </div>
                  </div>
                </div>
                <CastList />
              </div>
            </div>
            <Trailer />
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
