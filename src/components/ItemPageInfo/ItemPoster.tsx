import apiConfig from "../../api/apiConfig.ts";
import imagePlaceHolder from "../../assets/image-placeholder.png";

type Props = {
  image: string | null;
};

const ItemPoster: React.FC<Props> = ({ image }) => {
  return (
    <img
      src={image ? `${apiConfig.originalImage(image)}` : imagePlaceHolder}
      alt=""
      className="h-[480px] w-[300px] hidden lg:block bg-contain bg-no-repeat rounded-lg"
    />
  );
};

export default ItemPoster;
