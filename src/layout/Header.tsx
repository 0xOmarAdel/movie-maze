import { Link, NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  const headerLinks = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/movies",
      text: "Movies",
    },
    {
      path: "/series",
      text: "TV Series",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 h-fit py-12 px-24 flex flex-row items-center justify-between">
      <Link to="/">
        <div className="flex flex-row items-center gap-3 text-white text-4xl font-medium">
          <FaPlay className="text-indigo-500 scale-105" />
          <p>Movie Maze</p>
        </div>
      </Link>
      <ul className="flex flex-row gap-6 text-white text-2xl font-semibold">
        {headerLinks.map((headerLink, index) => (
          <li key={index}>
            <NavLink
              to={headerLink.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-[3px] border-indigo-600"
                  : "hover:border-b-[3px] hover:border-indigo-600"
              }
            >
              {headerLink.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
