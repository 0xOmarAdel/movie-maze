import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig.js";

const SwiperListItem = ({ item, category }) => {
  const link = "/" + category + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <div className="w-56 flex flex-col gap-3">
      <Link to={link}>
        <img src={bg} alt="" className="w-full h-[22rem]" />
      </Link>
      <h3 className="text-white text-center">{item.title || item.name}</h3>
    </div>
  );
};

export default SwiperListItem;
