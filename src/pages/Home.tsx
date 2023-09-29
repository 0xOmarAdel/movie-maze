import HeroSlider from "../components/HeroSlider";
import SwiperList from "../components/SwiperList/SwiperList.js";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="py-16 px-24 flex flex-col gap-5">
        <SwiperList
          title="Upcoming Movies"
          link="/movies/upcoming"
          category="movie"
          type="upcoming"
        />
        <SwiperList
          title="TV Series Airing Today"
          link="/tv-series/airing-today"
          category="tv"
          type="airing_today"
        />
        <SwiperList
          title="Popular TV Series"
          link="/tv-series/popular"
          category="tv"
          type="popular"
        />
        <SwiperList
          title="Popular Movies"
          link="/movies/popular"
          category="movie"
          type="popular"
        />
      </div>
    </>
  );
};

export default Home;
