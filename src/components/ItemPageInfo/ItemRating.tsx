import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

type Props = {
  rating: number;
};

const ItemRating: React.FC<Props> = ({ rating }) => {
  const firstNumberAfterDot = Math.floor(rating * 10) % 10;
  const truncatedRating = Math.floor(rating * 10) / 10;
  const output =
    firstNumberAfterDot >= 0
      ? truncatedRating.toFixed(1)
      : truncatedRating.toFixed(1) + ".0";

  return (
    <div className="w-16 h-16">
      <CircularProgressbarWithChildren
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: `#6366f1`,
          trailColor: "#0f0f0f70",
        })}
        value={rating * 10}
      >
        <p className="text-xl text-white font-medium">{output}</p>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ItemRating;
