import { useState, useEffect } from "react";
import { useParams } from "react-router";
import apiConfig from "../../api/apiConfig";
import { CategoriesTypes } from "../../types/Categories.types.ts";
import useAxios from "../../hooks/useAxios.tsx";
import { CastType } from "../../types/Cast.types.ts";
import { PersonType } from "../../types/Person.types";
import { toast } from "react-toastify";
import CastSkeleton from "../../skeletons/CastSkeleton.tsx";

const CastList = () => {
  const { category, id } = useParams<{
    category: CategoriesTypes;
    id: string;
  }>();
  const [cast, setCast] = useState<PersonType[]>();

  const { data, loading, error } = useAxios<CastType>(
    category + "/" + id + "/credits"
  );

  useEffect(() => {
    if (data) {
      setCast(data.cast.slice(0, 5));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.info("An error occurred!");
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl text-white">Cast</h2>
      <div className="flex flex-row flex-wrap gap-3">
        {loading ? (
          <CastSkeleton repeat={5} />
        ) : (
          cast?.map((person) => (
            <div key={person.id} className="w-20 flex flex-col gap-2">
              <img
                src={apiConfig.w500Image(person.profile_path)}
                alt=""
                className="w-full h-32 bg-contain bg-no-repeat"
              />

              <p className="text-sm text-gray-300 break-words hyphens-auto">
                {person.name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CastList;
