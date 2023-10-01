import { useState, useEffect } from "react";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";
import { CategoriesTypes } from "../../types/Categories.types";

const Trailer: React.FC = () => {
  const { category, id } = useParams<{
    category: CategoriesTypes;
    id: string;
  }>();

  const [trailer, setTrailer] = useState();

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category!, id!);

      const trailerObj = res.results.find((obj) =>
        obj.name.toLowerCase().includes("trailer")
      );
      console.log(res);

      setTrailer(trailerObj || res.results[0]);
    };
    getVideos();
  }, [category, id]);

  return (
    <>
      {trailer && (
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              className="aspect-video"
              width="100%"
              title="video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Trailer;
