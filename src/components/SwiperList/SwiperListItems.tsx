import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperListItem from "./SwiperListItem.js";
import { movieListsTypes } from "../../types/MovieLists.types";
import { TVSeriesListsTypes } from "../../types/TVSeriesLists.types.ts";
import { CategoriesTypes } from "../../types/Categories.types";
import useAxios from "../../hooks/useAxios.tsx";
import { MovieType } from "../../types/Movie.types.ts";
import { TVSeriesType } from "../../types/TVSeries.types.ts";
import CardSkeleton from "../../skeletons/CardSkeleton.tsx";
import { toast } from "react-toastify";

type AxiosResponse = {
  page: number;
  results: (MovieType & TVSeriesType)[];
  total_pages: number;
  total_results: number;
};

type Props = {
  id?: number;
  type: movieListsTypes | TVSeriesListsTypes | "similar";
  category: CategoriesTypes;
  setSwiperLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SwiperListItems: React.FC<Props> = ({
  id,
  type,
  category,
  setSwiperLoading,
}) => {
  const [items, setItems] = useState<(MovieType & TVSeriesType)[]>();
  const { data, loading, error } = useAxios<AxiosResponse>(
    type === "similar"
      ? category + "/" + id + "/similar"
      : type === "trending"
      ? "/trending/" + category + "/day"
      : category + "/" + type
  );

  useEffect(() => {
    if (data) {
      setItems(data.results);
    }
  }, [data]);

  useEffect(() => {
    if (!loading) {
      setSwiperLoading(false);
    }
  }, [loading, setSwiperLoading]);

  useEffect(() => {
    if (error) {
      toast.info("An error occurred!");
    }
  }, [error]);

  return (
    <div className="movie-list">
      {loading ? (
        <div className="grid grid-flow-col gap-5 overflow-hidden">
          <CardSkeleton repeat={10} className="w-44" />
        </div>
      ) : items && items.length > 0 ? (
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          className="movie-list-swiper"
        >
          {items && items.length > 0
            ? items.map((item) => (
                <SwiperSlide key={item.id}>
                  <SwiperListItem item={item} category={category} />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      ) : (
        <p className="text-xl text-gray-300">Couldn't find any data.</p>
      )}
    </div>
  );
};

export default SwiperListItems;
