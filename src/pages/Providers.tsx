import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ItemBanner from "../components/ItemPageInfo/ItemBanner.tsx";
import { ProvidersType } from "../types/Providers.types";
import useAxios from "../hooks/useAxios.tsx";
import { ProviderType } from "../types/Provider.types.ts";
import apiConfig from "../api/apiConfig.ts";
import { toast } from "react-toastify";

const Providers = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const allowedCategories = ["movie", "tv"];

    if (!allowedCategories.includes(category!)) {
      navigate("/error");
    }
  }, [navigate, category]);

  const [providers, setProviders] = useState<ProviderType[]>();

  const { data, loading, error, reFetch } = useAxios<ProvidersType>(
    category === "movie" ? "watch/providers/movie" : "watch/providers/tv"
  );

  useEffect(() => {
    if (data) {
      setProviders(data.results.slice(0, 25));
    }
  }, [data]);

  useEffect(() => {
    if (category) {
      reFetch();
    }
  }, [category, reFetch]);

  const list = [
    { id: 1, text: "Movies", path: "/providers/movie", value: "movie" },
    { id: 2, text: "TV Series", path: "/providers/tv", value: "tv" },
  ];

  useEffect(() => {
    if (error) {
      toast.info("An error occurred!");
    }
  }, [error]);

  return (
    <>
      <ItemBanner
        image="/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
        backdropClasses="!bg-opacity-75"
      />
      <div className="relative z-50 -mt-[26rem] py-12 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-22 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-white font-medium">Providers</h2>
          <ul className="flex flex-row flex-wrap gap-4 text-2xl text-white">
            {list.map((item) => (
              <li
                key={item.id}
                className={`transition duration-300 ${
                  item.value === category
                    ? "text-indigo-500"
                    : "hover:text-indigo-500"
                }`}
              >
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {!loading ? (
          <div className="grid grid-cols-providersGrid gap-8">
            {providers?.map((item) => (
              <div key={item.provider_id} className="flex flex-col gap-3">
                <img
                  src={apiConfig.w500Image(item.logo_path)}
                  alt=""
                  className="rounded-full"
                />
                <p className="text-white text-center">{item.provider_name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">Loading..</p>
        )}
      </div>
    </>
  );
};

export default Providers;
