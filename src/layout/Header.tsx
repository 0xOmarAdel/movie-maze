import { Link, NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { headerLinks } from "../data/headerLists";

const Header = () => {
  return (
    <div className="page-container fixed inset-0 z-50 h-fit flex flex-row items-center justify-between">
      <Link to="/">
        <div className="flex flex-row items-center gap-3 text-white text-4xl font-medium">
          <FaPlay className="text-indigo-500 scale-105" />
          <p>Movie Maze</p>
        </div>
      </Link>
      <ul className="flex flex-row gap-6 text-white text-2xl font-semibold">
        {headerLinks.map((headerLink) => (
          <li key={headerLink.id}>
            <NavLink to={headerLink.path} className="relative group">
              {headerLink.text}
              <div className="absolute -bottom-1.5 left-1/2 w-0 h-1 bg-indigo-600 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
