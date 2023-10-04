import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import GridItem from "../components/GridItems/GridItem.tsx";
import useInfiniteFetch from "../hooks/useInfiniteFetch.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { seriesList } from "../data/footerLists";
import SearchBar from "../ui/SearchBar.tsx";
import ItemBanner from "../components/ItemPageInfo/ItemBanner.tsx";
import { MovieType } from "../types/Movie.types.js";
import { TVSeriesType } from "../types/TVSeries.types.js";
import CardSkeleton from "../skeletons/CardSkeleton.tsx";
import { toast } from "react-toastify";
import { apiKey } from "../api/apiKey";

const TVSeries = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const allowedTypes = [
      "airing-today",
      "on-the-air",
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
    error,
    hasMore: feedPostsHasMore,
    reFetch,
    fetchMoreData,
  } = useInfiniteFetch<MovieType & TVSeriesType>(
    query
      ? "https://api.themoviedb.org/3/search/tv"
      : `https://api.themoviedb.org/3/${
          type === "trending"
            ? "trending/tv/day"
            : "tv/" + type!.replace(/-/g, "_")
        }`,
    "id",
    query
      ? {
          api_key: apiKey,
          query,
        }
      : {
          api_key: apiKey,
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

  useEffect(() => {
    if (error) {
      toast.info("An error occurred!");
    }
  }, [error]);

  const isActiveLink = (link: string) => {
    return (
      type!.replace(/-/g, "_").toLocaleLowerCase() ===
      link.replace(/ /g, "_").toLocaleLowerCase()
    );
  };

  return (
    <>
      <ItemBanner
        image="/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"
        backdropClasses="!bg-opacity-75"
      />
      <div className="page-container relative z-50 -mt-[30rem] md:-mt-[26rem] py-6 md:py-12 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-3 md:gap-6">
          <h2 className="text-3xl md:text-4xl text-white font-medium">
            TV Series
          </h2>
          <ul className="flex flex-row flex-wrap gap-y-1 gap-x-3 md:gap-4 text-xl md:text-2xl text-white">
            {seriesList.map((item) => (
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
        {initialLoading ? (
          <div className="grid grid-cols-itemsGridMobile md:grid-cols-itemsGrid gap-8">
            <CardSkeleton repeat={10} />
          </div>
        ) : profilePosts && profilePosts?.length > 0 ? (
          <InfiniteScroll
            dataLength={profilePosts?.length || 0}
            next={fetchMoreData}
            hasMore={feedPostsHasMore}
            loader={
              <>
                <CardSkeleton repeat={10} />
              </>
            }
            className="grid grid-cols-itemsGridMobile md:grid-cols-itemsGrid gap-8 !overflow-hidden"
          >
            {profilePosts?.map((item) => (
              <GridItem key={item.id} item={item} category="tv" />
            ))}
          </InfiniteScroll>
        ) : (
          <p className="text-xl text-gray-300">
            Couldn't find anything related to your search query.
          </p>
        )}
      </div>
    </>
  );
};

export default TVSeries;
