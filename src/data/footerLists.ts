import { ListType } from "../types/List.types";

export const mainList: ListType = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    text: "Movie Providers",
    path: "/providers/movie",
  },
  {
    id: 4,
    text: "TV Providers",
    path: "/providers/tv",
  },
];

export const movieList: ListType = [
  {
    id: 1,
    text: "Upcoming",
    path: "/movies/upcoming",
  },
  {
    id: 2,
    text: "Now Playing",
    path: "/movies/now-playing",
  },
  {
    id: 3,
    text: "Popular",
    path: "/movies/popular",
  },
  {
    id: 4,
    text: "Top Rated",
    path: "/movies/top-rated",
  },
  {
    id: 5,
    text: "Trending",
    path: "/movies/trending",
  },
];

export const seriesList: ListType = [
  {
    id: 1,
    text: "Airing Today",
    path: "/tv/airing-today",
  },
  {
    id: 2,
    text: "On the Air",
    path: "/tv/on-the-air",
  },
  {
    id: 3,
    text: "Popular",
    path: "/tv/popular",
  },
  {
    id: 4,
    text: "Top Rated",
    path: "/tv/top-rated",
  },
  {
    id: 5,
    text: "Trending",
    path: "/tv/trending",
  },
];
