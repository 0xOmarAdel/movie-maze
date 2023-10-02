import axiosClient from "./axiosClient";
import { movieListsTypes } from "../types/MovieLists.types";
import { TVSeriesListsTypes } from "../types/TVSeriesLists.types";
import { CategoriesTypes } from "../types/Categories.types";

const tmdbApi = {
  getMoviesList: (type: movieListsTypes, params: object) => {
    const url = "movie/" + type;
    return axiosClient.get(url, params);
  },

  getTvList: (type: TVSeriesListsTypes, params: object) => {
    const url = "tv/" + type;
    return axiosClient.get(url, params);
  },

  getVideos: (category: CategoriesTypes, id: string) => {
    const url = category + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },

  detail: (category: CategoriesTypes, id: string, params: object) => {
    const url = category + "/" + id;
    return axiosClient.get(url, params);
  },

  credits: (category: CategoriesTypes, id: string) => {
    const url = category + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },

  similar: (category: CategoriesTypes, id: string) => {
    const url = category + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
