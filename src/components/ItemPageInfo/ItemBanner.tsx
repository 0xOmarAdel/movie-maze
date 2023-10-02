import apiConfig from "../../api/apiConfig.ts";

type Props = {
  image: string;
  backdropClasses?: string;
};

const ItemBanner: React.FC<Props> = ({ image, backdropClasses }) => {
  return (
    <div
      className="relative h-[65vh] bg-cover bg-center"
      style={{
        backgroundImage: image ? `url(${apiConfig.originalImage(image)})` : "",
      }}
    >
      <div
        className={`absolute inset-0 z-30 w-full h-full bg-black bg-opacity-10 ${
          backdropClasses ?? ""
        }`}
      ></div>
      <div
        className="absolute inset-0 z-30 w-full h-full"
        style={{
          backgroundImage: "linear-gradient(to top, #0f0f0f, #00000000)",
        }}
      ></div>
    </div>
  );
};

export default ItemBanner;
