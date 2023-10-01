type Props = {
  title: string;
};

const ItemTitle: React.FC<Props> = ({ title }) => {
  return <h2 className="text-5xl text-white font-medium">{title}</h2>;
};

export default ItemTitle;
