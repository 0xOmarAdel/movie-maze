type Props = {
  tagline: string;
};

const ItemTagLine: React.FC<Props> = ({ tagline }) => {
  return <p className="text-lg text-gray-300">{tagline}</p>;
};

export default ItemTagLine;
