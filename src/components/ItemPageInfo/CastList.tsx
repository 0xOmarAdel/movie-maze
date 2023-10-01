import { useState, useEffect } from "react";

import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { CategoriesTypes } from "../../types/Categories.types.ts";

const CastList = () => {
  const { category, id } = useParams<{
    category: CategoriesTypes;
    id: string;
  }>();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category!, id!);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, id]);

  console.log(casts);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl text-white">Cast</h2>
      <div className="flex flex-row gap-3">
        {casts.map((item, i) => (
          <div key={i} className="w-20 flex flex-col gap-2">
            <img
              src={apiConfig.w500Image(item.profile_path)}
              alt=""
              className="w-full h-32 bg-contain bg-no-repeat"
            />

            <p className="text-sm text-gray-300 break-words hyphens-auto">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
