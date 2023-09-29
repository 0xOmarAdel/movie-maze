const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4ebefa13f2774d2fc3cd40a76212fee8",
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
