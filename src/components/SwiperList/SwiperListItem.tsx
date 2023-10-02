import { useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig.js";
import ItemRating from "../ItemPageInfo/ItemRating";

const SwiperListItem = ({ item, category }) => {
  const navigate = useNavigate();

  const link = "/" + category + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <div className="w-56 flex flex-col gap-3">
      <div
        className="relative cursor-pointer group"
        onClick={() => navigate(link)}
      >
        <img src={bg} alt="" className="rounded-md aspect-[1/1.5]" />
        <div className="absolute bottom-0 z-40 text-white flex flex-col gap-2 px-4 py-3 opacity-0 scale-75 transition duration-300 delay-100 group-hover:opacity-100 group-hover:scale-100">
          <ItemRating rating={item.vote_average} small={true} />
        </div>
        <div className="absolute inset-0 z-30 w-full h-full bg-black bg-opacity-70 opacity-0 transition duration-300 group-hover:opacity-100"></div>
      </div>
      <h3 className="text-white text-center" onClick={() => navigate(link)}>
        {item.title || item.name}
      </h3>
    </div>
  );
};

export default SwiperListItem;
