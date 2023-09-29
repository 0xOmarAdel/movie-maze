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
    async (reFetch?: boolean) => {
      try {
        let firstPage = 0;
        if (reFetch) {
          setInitialLoading(true);
          setReFetchLoading(false);
          setHasMore(true);
          setData([]);
          firstPage = 1;
        }

        if (page > 1) {
          setReFetchLoading(true);
        }

        const response: AxiosResponse<{
          results: T[];
          total_results: number;
        }> = await axios({
          method: "get",
          url: `${url}?page=${firstPage || page}`,
          params: paramsRef.current || {},
        });

        console.log(response.data);

        setHasMore(page < response.data.total_results / (page - 1));
        setTotal(response.data.total_results);

        setData((prevData) => {
          if (prevData) {
            const allData: T[] = reverse
              ? [...response.data.results, ...prevData]
              : [...prevData, ...response.data.results];
            return getUniqueData(allData);
          } else {
            setData(response.data.results);
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
    [url, page, reverse, getUniqueData, displayToast]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const reFetch = useCallback(() => {
    fetchData(true);
  }, [fetchData]);

  const fetchMoreData = useCallback(() => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore]);

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
