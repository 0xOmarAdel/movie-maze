import { Link, useNavigate } from "react-router-dom";
import SwiperListItems from "./SwiperListItems.js";
import { CategoriesTypes } from "../../types/Categories.types";
import { movieListsTypes } from "../../types/MovieLists.types";
import { TVSeriesListsTypes } from "../../types/TVSeriesLists.types";
import { useState } from "react";

type Props = {
  title: string;
  category: CategoriesTypes;
  type: movieListsTypes | TVSeriesListsTypes | "similar";
  link?: string;
  id?: number;
};

const SwiperList: React.FC<Props> = ({ title, link, category, type, id }) => {
  const navigate = useNavigate();

  const [swiperLoading, setSwiperLoading] = useState(true);

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="flex flex-row flex-wrap items-center justify-between">
        <h2 className="text-lg md:text-2xl text-white font-medium">{title}</h2>
        {!swiperLoading && link && (
          <button
            className="text-sm md:text-base text-gray-300 font-medium rounded-3xl transition duration-500 hover:text-indigo-500"
            onClick={() => navigate(link)}
          >
            View more
          </button>
        )}
      </div>
      <SwiperListItems
        category={category}
        type={type}
        id={id}
        setSwiperLoading={setSwiperLoading}
      />
    </div>
  );
};

export default SwiperList;
