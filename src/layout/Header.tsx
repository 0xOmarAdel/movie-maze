import { useEffect, useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  const [headerClasses, setHeaderClasses] = useState("");

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setHeaderClasses("!py-5 bg-opacity-100");
      } else {
        setHeaderClasses("");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div
      className={`page-container py-9 fixed top-0 left-0 z-[100] w-full bg-[#0f0f0f] bg-opacity-0 transition-all duration-300 ${headerClasses}`}
    >
      <div className="h-full flex items-center justify-center md:justify-between">
        <Link to="/">
          <div className="flex flex-row items-center gap-3 text-white text-3xl md:text-4xl font-medium">
            <FaPlay className="text-indigo-500 scale-105" />
            <p>Movie Maze</p>
          </div>
        </Link>
        <ul className="page-container !py-5 md:!p-0 fixed md:static bottom-0 left-0 w-full md:w-fit flex items-center justify-between gap-8 bg-[#0f0f0f] md:bg-transparent header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "relative text-base md:text-2xl font-bold text-white order-2 md:order-1"
                : "relative text-base md:text-2xl font-bold text-gray-400 transition duration-300 hover:text-white order-2 md:order-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies/popular"
            className={
              useMatch("/movies/*")
                ? "relative text-base md:text-2xl font-bold text-white order-1 md:order-2"
                : "relative text-base md:text-2xl font-bold text-gray-400 transition duration-300 hover:text-white order-1 md:order-2"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv-series/popular"
            className={
              useMatch("/tv-series/*")
                ? "relative text-base md:text-2xl font-bold text-white order-3"
                : "relative text-base md:text-2xl font-bold text-gray-400 transition duration-300 hover:text-white order-3"
            }
          >
            TV Series
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
