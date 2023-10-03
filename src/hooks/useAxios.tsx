import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apiConfig from "../api/apiConfig.ts";

interface AxiosResponse<T> {
  data: T;
}

interface QueryParams {
  [key: string]: string;
}

const useAxios = <T,>(url: string, queryParams?: QueryParams) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<T> = await axios({
        method: "get",
        url: apiConfig.baseUrl + url,
        params: { api_key: apiConfig.apiKey, ...queryParams },
      });
      setData(response.data);
    } catch (error) {
      setError(!!error);
    } finally {
      setLoading(false);
    }
  }, [url, queryParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const reFetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, reFetch };
};

export default useAxios;
