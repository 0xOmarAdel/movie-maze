import { ListType } from "../types/List.types";

export const mainList: ListType = [
  {
    id: 1,
    text: "Home",
    path: "/",
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
    text: "Popular",
    path: "/movies/popular",
  },
  {
    id: 2,
    text: "Trending",
    path: "/movies/trending",
  },
  {
    id: 3,
    text: "Top Rated",
    path: "/movies/top-rated",
  },
  {
    id: 4,
    text: "Now Playing",
    path: "/movies/now-playing",
  },
  {
    id: 5,
    text: "Upcoming",
    path: "/movies/upcoming",
  },
];

export const seriesList: ListType = [
  {
    id: 1,
    text: "Popular",
    path: "/tv-series/popular",
  },
  {
    id: 2,
    text: "Trending",
    path: "/tv-series/trending",
  },
  {
    id: 3,
    text: "Top Rated",
    path: "/tv-series/top-rated",
  },
  {
    id: 4,
    text: "On the Air",
    path: "/tv-series/on-the-air",
  },
  {
    id: 5,
    text: "Airing Today",
    path: "/tv-series/airing-today",
  },
];
