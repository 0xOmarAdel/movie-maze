import SkeletonWrapper from "./SkeletonWrapper";

type Props = {
  repeat: number;
};

const ProviderSkeleton: React.FC<Props> = ({ repeat }) => {
  return (
    <>
      {Array.from({ length: repeat }, (_, index) => (
        <SkeletonWrapper
          key={index}
          className="aspect-[1/1] !bg-[#252525] !rounded-full"
        />
      ))}
    </>
  );
};

export default ProviderSkeleton;
