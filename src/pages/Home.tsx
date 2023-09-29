import HeroSlider from "../components/HeroSlider";
import SwiperList from "../components/SwiperList/SwiperList.js";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="py-16 px-24">
        <SwiperList title="Upcoming Movies" category="movie" type="upcoming" />
        <SwiperList
          title="TV Series Airing Today"
          category="tv"
          type="airing_today"
        />
        <SwiperList title="Popular TV Series" category="tv" type="popular" />
        <SwiperList title="Popular Movies" category="movie" type="popular" />
      </div>
    </>
  );
};

export default Home;
