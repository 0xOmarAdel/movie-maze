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
};

const SwiperListItems: React.FC<Props> = ({ id, type, category }) => {
  const [items, setItems] = useState<(MovieType & TVSeriesType)[]>();
  const { data, loading, error } = useAxios<AxiosResponse>(
    category + (type === "similar" ? "/" + id + "/similar" : "/" + type)
  );

  useEffect(() => {
    if (data) {
      setItems(data.results);
    }
  }, [data]);

  console.log(loading, error);

  return (
    <div className="movie-list">
      {items && items.length > 0 ? (
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          className="movie-list-swiper"
        >
          {items?.map((item) => (
            <SwiperSlide key={item.id}>
              <SwiperListItem item={item} category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-gray-300">Couldn't find any data.</p>
      )}
    </div>
  );
};

export default SwiperListItems;
