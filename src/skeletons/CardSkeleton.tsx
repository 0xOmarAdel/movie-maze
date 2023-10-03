import SkeletonWrapper from "./SkeletonWrapper";

type Props = {
  repeat: number;
};

const CardSkeleton: React.FC<Props> = ({ repeat }) => {
  return (
    <>
      {Array.from({ length: repeat }, (_, index) => (
        <SkeletonWrapper key={index} className="aspect-[1/1.5] !bg-[#252525]">
        </SkeletonWrapper>
      ))}
    </>
  );
};

export default CardSkeleton;
