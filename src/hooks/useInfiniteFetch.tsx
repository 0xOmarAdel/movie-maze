/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface AxiosResponse<T> {
  data: T;
}

const useInfiniteFetch = <T,>(
  url: string,
  uniqueKey: string,
  params?: object,
  displayToast?: boolean,
  reverse?: boolean
) => {
  const [data, setData] = useState<T[] | null>();
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [reFetchLoading, setReFetchLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);

  const paramsRef = useRef(params);

  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  const getUniqueData = useCallback(
    (data: T[]) => {
      return [
        ...new Set(data.map((item: any) => item[uniqueKey] as string)),
      ].map((id) => {
        return data.find((item: any) => item[uniqueKey] === id)!;
      });
    },
    [uniqueKey]
  );

  const fetchData = useCallback(
    async (p?: number) => {
      try {
        const pageToUse = p || page;

        setInitialLoading(pageToUse === 1);
        setReFetchLoading(pageToUse > 1);

        if (pageToUse > 1) {
          setReFetchLoading(true);
        }

        const response: AxiosResponse<{
          results: T[];
          total_pages: number;
          total_results: number;
        }> = await axios({
          method: "get",
          url: `${url}?page=${pageToUse}`,
          params: paramsRef.current || {},
        });

        setHasMore(pageToUse < response.data.total_pages);
        setTotal(response.data.total_results);

        setData((prevData) => {
          if (prevData && pageToUse > 1) {
            const allData: T[] = reverse
              ? [...response.data.results, ...prevData]
              : [...prevData, ...response.data.results];
            return getUniqueData(allData);
          } else {
            return response.data.results;
          }
        });
      } catch (error) {
        setError(!!error);
        if (displayToast) {
          toast.info(`Something went wrong!`);
        }
      } finally {
        setInitialLoading(false);
        setReFetchLoading(false);
      }
    },
    [url, reverse, getUniqueData, displayToast]
  );

  const reFetch = useCallback(() => {
    setPage((prevState) => {
      console.log(prevState);
      fetchData(1);
      return 1;
    });
  }, [fetchData]);

  const fetchMoreData = useCallback(() => {
    if (hasMore) {
      setPage((prevState) => {
        fetchData(prevState + 1);
        return prevState + 1;
      });
    }
  }, [hasMore, fetchData]);

  return {
    data,
    total,
    initialLoading,
    reFetchLoading,
    error,
    hasMore,
    fetchMoreData,
    reFetch,
  };
};

export default useInfiniteFetch;
