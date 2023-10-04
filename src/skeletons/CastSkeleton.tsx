import SkeletonWrapper from "./SkeletonWrapper";

type Props = {
  repeat: number;
};

const CastSkeleton: React.FC<Props> = ({ repeat }) => {
  return (
    <>
      {Array.from({ length: repeat }, (_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <SkeletonWrapper className="w-20 aspect-[1/1.5] !bg-[#252525] rounded-none" />
          <SkeletonWrapper className="!py-2 w-2/3 !bg-[#252525] rounded-none" />
        </div>
      ))}
    </>
  );
};

export default CastSkeleton;
