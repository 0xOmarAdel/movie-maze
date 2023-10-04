import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { headerLinks } from "../data/headerLists";

const Header = () => {
  const { pathname } = useLocation();
  const [headerClasses, setHeaderClasses] = useState("");

  const active = headerLinks.findIndex((e) => e.path === pathname);

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
      className={`page-container py-9 fixed top-0 left-0 z-[100] w-full bg-[#0f0f0f] bg-opacity-0 text-white transition-all duration-300 ${headerClasses}`}
    >
      <div className="h-full flex items-center justify-center md:justify-between">
        <Link to="/">
          <div className="flex flex-row items-center gap-3 text-white text-3xl md:text-4xl font-medium">
            <FaPlay className="text-indigo-500 scale-105" />
            <p>Movie Maze</p>
          </div>
        </Link>
        <ul className="page-container !py-5 md:!p-0 fixed md:static bottom-0 left-0 w-full md:w-fit flex items-center justify-between gap-8 bg-[#0f0f0f] md:bg-transparent header__nav">
          {headerLinks.map((e, i) => (
            <li
              key={i}
              className={`relative text-base md:text-2xl font-bold ${
                i === active ? "active" : ""
              }`}
            >
              <Link to={e.path}>{e.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
