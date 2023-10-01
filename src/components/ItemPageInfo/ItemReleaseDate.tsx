import { dateFormatter } from "../../utils/dateFormatter.ts";

type Props = {
  date: string;
};

const ItemReleaseDate: React.FC<Props> = ({ date }) => {
  return (
    <div className="flex flex-row gap-2">
      <p className="text-lg text-white font-medium whitespace-nowrap">
        Release Date:
      </p>
      <p className="text-lg text-gray-300 whitespace-nowrap">
        {dateFormatter(date)}
      </p>
    </div>
  );
};

export default ItemReleaseDate;
