type Props = {
  overview: string;
};

const ItemOverview: React.FC<Props> = ({ overview }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl text-white">Overview</h2>
      <p className="text-lg text-gray-300">{overview}</p>
    </div>
  );
};

export default ItemOverview;
