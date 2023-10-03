import SkeletonShimmer from "./SkeletonShimmer";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SkeletonWrapper: React.FC<Props> = ({ children, className }) => {
  let classes =
    "relative h-fit px-8 py-6 bg-white rounded-xl shadow-lg overflow-hidden dark:bg-primaryDark dark:text-textLighter";

  if (className) {
    classes += " " + className;
  }

  return (
    <div className={classes}>
      {children}
      <SkeletonShimmer />
    </div>
  );
};

export default SkeletonWrapper;
