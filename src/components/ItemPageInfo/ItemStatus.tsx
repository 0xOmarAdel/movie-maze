type Props = {
  status: string;
};

const ItemStatus: React.FC<Props> = ({ status }) => {
  return (
    <div className="flex flex-row gap-2">
      <p className="text-lg text-white font-medium">Status:</p>
      <p className="text-lg text-gray-300">{status}</p>
    </div>
  );
};

export default ItemStatus;
