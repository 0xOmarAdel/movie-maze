type Props = {
  genres: {
    id: number;
    name: string;
  }[];
};

const Genres: React.FC<Props> = ({ genres }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {genres?.slice(0, 5).map((genre) => (
        <span
          key={genre.id}
          className="h-fit px-4 py-1 text-gray-200 text-sm bg-indigo-600 rounded-3xl"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default Genres;
