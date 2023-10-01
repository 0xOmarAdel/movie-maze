import { timeFormatter } from "../../utils/timeFormatter.ts";

type Props = {
  runtime: number;
};

const ItemRunTime: React.FC<Props> = ({ runtime }) => {
  return (
    <div className="flex flex-row gap-2">
      <p className="text-lg text-white font-medium">Runtime:</p>
      <p className="text-lg text-gray-300 whitespace-nowrap">
        {timeFormatter(runtime)}
      </p>
    </div>
  );
};

export default ItemRunTime;
