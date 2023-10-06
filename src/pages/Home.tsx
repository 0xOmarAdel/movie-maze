import HeroSlider from "../components/HeroSlider/HeroSlider.js";
import SwiperList from "../components/SwiperList/SwiperList.js";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="page-container py-6 md:py-12 flex flex-col gap-5">
        <SwiperList
          title="Trending Movies"
          link="/movies/trending"
          category="movie"
          type="trending"
        />
        <SwiperList
          title="Trending TV Series"
          link="/tv-series/trending"
          category="tv"
          type="trending"
        />
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
      </div>
    </>
  );
};

export default Home;
