import React from "react";

type Props = {
  type: string;
  containerClasses?: string;
  className?: string;
  repeat?: number;
};

const SkeletonElement: React.FC<Props> = ({
  type,
  containerClasses,
  className,
  repeat,
}) => {
  let cClasses = "w-full space-y-2 dark:bg-primarylessDarker";
  let eClasses =
    "bg-[#ddd] overflow-hidden rounded-sm dark:bg-primarylessDarker";

  if (className) {
    eClasses += " " + className;
  }

  if (containerClasses) {
    cClasses += " " + containerClasses;
  }

  switch (type) {
    case "text":
      eClasses += " w-full h-[.95rem]";
      break;
    case "avatar":
      eClasses += " !rounded-full";
      break;
    default:
      break;
  }

  return (
    <>
      {repeat ? (
        <div className={cClasses}>
          {Array.from({ length: repeat }, (_, index) => (
            <div key={index} className={eClasses}></div>
          ))}
        </div>
      ) : (
        <div className={eClasses}></div>
      )}
    </>
  );
};

export default SkeletonElement;
