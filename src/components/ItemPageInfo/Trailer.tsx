import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { CategoriesTypes } from "../../types/Categories.types";
import useAxios from "../../hooks/useAxios.tsx";
import { VideosType } from "../../types/Videos.types.ts";

const Trailer: React.FC = () => {
  const { category, id } = useParams<{
    category: CategoriesTypes;
    id: string;
  }>();
  const [videoSrc, setVideoSrc] = useState("");

  const { data, loading, error } = useAxios<VideosType>(
    category + "/" + id + "/videos"
  );

  useEffect(() => {
    if (data && data.results.length > 0) {
      setVideoSrc("https://www.youtube.com/embed/" + data.results[0].key);
    }
  }, [data]);

  console.log(loading, error);

  return (
    <>
      {videoSrc && (
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full">
            <iframe
              src={videoSrc}
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
