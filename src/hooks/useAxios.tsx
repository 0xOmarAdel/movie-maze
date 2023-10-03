import { useState, useEffect, useCallback } from "react";
import axios, { Method } from "axios";
import { toast } from "react-toastify";

interface AxiosResponse<T> {
  data: T;
}

const useAxios = <T,>(
  url: string,
  method: Method,
  body?: object,
  displayToast?: boolean
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<T> = await axios({
        method,
        url,
        data: body,
      });
      setData(response.data);
    } catch (error) {
      setError(!!error);
      if (displayToast) {
        toast.info(`Something went wrong!`);
      }
    } finally {
      setLoading(false);
    }
  }, [method, url, body, displayToast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const reFetch = useCallback(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  return { data, loading, error, reFetch };
};

export default useAxios;
