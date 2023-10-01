type Props = {
  seasons: number;
};

const ItemSeasons: React.FC<Props> = ({ seasons }) => {
  return (
    <div className="flex flex-row gap-2">
      <p className="text-lg text-white font-medium">Seasons:</p>
      <p className="text-lg text-gray-300">{seasons}</p>
    </div>
  );
};

export default ItemSeasons;
