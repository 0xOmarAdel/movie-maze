import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

type Props = {
  rating: number;
  small?: boolean;
};

const ItemRating: React.FC<Props> = ({ rating, small }) => {
  const firstNumberAfterDot = Math.floor(rating * 10) % 10;
  const truncatedRating = Math.floor(rating * 10) / 10;
  const output =
    firstNumberAfterDot >= 0
      ? truncatedRating.toFixed(1)
      : truncatedRating.toFixed(1) + ".0";

  return (
    <div
      className={
        small
          ? "min-w-[2.5rem] md:min-w-[2.6rem] max-w-[2.5rem] md:max-w-[2.6rem] min-h-[2.5rem] md:min-h-[2.6rem] max-h-[2.5rem] md:max-h-[2.6rem]"
          : "min-w-[2.8rem] md:min-w-[3.4rem] max-w-[2.8rem] md:max-w-[3.4rem] min-h-[2.8rem] md:min-h-[3.4rem] max-h-[2.8rem] md:max-h-[3.4rem]"
      }
    >
      <CircularProgressbarWithChildren
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: `#6366f1`,
          trailColor: "#0f0f0f70",
        })}
        value={rating * 10}
      >
        <p
          className={`${
            small ? "text-sm md:text-base" : "text-lg md:text-xl"
          } text-white font-medium`}
        >
          {output}
        </p>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ItemRating;
