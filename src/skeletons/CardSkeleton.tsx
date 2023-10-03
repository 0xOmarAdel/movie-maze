import SkeletonWrapper from "./SkeletonWrapper";

type Props = {
  repeat: number;
  className?: string;
};

const CardSkeleton: React.FC<Props> = ({ repeat, className }) => {
  return (
    <>
      {Array.from({ length: repeat }, (_, index) => (
        <SkeletonWrapper
          key={index}
          className={`aspect-[1/1.5] !bg-[#252525] ${className || ""}`}
        />
      ))}
    </>
  );
};

export default CardSkeleton;
