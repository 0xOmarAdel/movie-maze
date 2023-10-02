import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import GridItem from "../components/GridItems/GridItem.tsx";
import useInfiniteFetch from "../hooks/useInfiniteFetch.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import apiConfig from "../api/apiConfig";
import { movieList } from "../data/footerLists";
import SearchBar from "../ui/SearchBar.tsx";
import ItemBanner from "../components/ItemPageInfo/ItemBanner.tsx";
import { MovieType } from "../types/Movie.types.js";
import { TVSeriesType } from "../types/TVSeries.types.js";

const Movies = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const allowedTypes = [
      "upcoming",
      "now-playing",
      "popular",
      "top-rated",
      "trending",
    ];

    if (!allowedTypes.includes(type!)) {
      navigate("/error");
    }
  }, [navigate, type]);

  const {
    data: profilePosts,
    initialLoading,
    hasMore: feedPostsHasMore,
    reFetch,
    fetchMoreData,
  } = useInfiniteFetch<MovieType & TVSeriesType>(
    query
      ? "https://api.themoviedb.org/3/search/movie"
      : `https://api.themoviedb.org/3/${
          type === "trending"
            ? "trending/movie/day"
            : "movie/" + type!.replace(/-/g, "_")
        }`,
    "id",
    query
      ? {
          api_key: apiConfig.apiKey,
          query,
        }
      : {
          api_key: apiConfig.apiKey,
        }
  );

  useEffect(() => {
    if (type && query?.trim().length === 0) {
      reFetch();
    }
  }, [type]);

  useEffect(() => {
    reFetch();
  }, [query]);

  const isActiveLink = (link: string) => {
    return (
      type!.replace(/-/g, "_").toLocaleLowerCase() ===
      link.replace(/ /g, "_").toLocaleLowerCase()
    );
  };

  return (
    <>
      <ItemBanner
        image="/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
        backdropClasses="!bg-opacity-75"
      />
      <div className="relative z-50 -mt-[26rem] py-12 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-22 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-white font-medium">Movies</h2>
          <ul className="flex flex-row flex-wrap gap-4 text-2xl text-white">
            {movieList.map((item) => (
              <li
                key={item.id}
                className={`transition duration-300 ${
                  isActiveLink(item.text)
                    ? "text-indigo-500"
                    : "hover:text-indigo-500"
                }`}
              >
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <SearchBar
            placeholder="Search.."
            value={query}
            onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            containerClass="max-w-sm"
          />
        </div>
        {initialLoading || (profilePosts && profilePosts?.length > 0) ? (
          <InfiniteScroll
            dataLength={profilePosts?.length || 0}
            next={fetchMoreData}
            hasMore={feedPostsHasMore}
            loader={<p>ss</p>}
          >
            <div className="grid grid-cols-itemsGrid gap-8">
              {profilePosts?.map((item) => (
                <GridItem key={item.id} item={item} category="movie" />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <p className="text-white">Loading..</p>
        )}
      </div>
    </>
  );
};

export default Movies;
