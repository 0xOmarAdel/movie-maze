import ItemBanner from "../components/ItemPageInfo/ItemBanner.tsx";
const AboutUs = () => {
  return (
    <div>
      <ItemBanner
        image="/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"
        backdropClasses="!bg-opacity-75"
      />
      <div className="page-container relative z-50 -mt-[28rem] flex flex-col gap-6 text-2xl text-gray-200">
        <p className="text-4xl text-white">About us</p>
        <p>
          We are passionate about movies and TV series,
          and our goal is to provide you with the best information and
          experience when it comes to your favorite entertainment. At our
          website, you can explore a vast collection of movies and TV series.
          Our home page features the top 5 popular movies, as well as lists of
          trending and upcoming movies and TV series. Stay up to date with the
          latest releases and discover what's currently trending in the world of
          entertainment. On the Movies page, you can search for movies, apply
          filters, and sort them by top-rated, upcoming, or trending. Similarly,
          on the TV Series page, you can explore a wide range of TV series with
          the same search, filter, and sorting options. Find your favorite shows
          and discover new ones to binge-watch. When you click on a movie or TV
          series, you'll be taken to the details page. Here, you'll find
          comprehensive information about the selected title, including cast
          members, genres, ratings, tagline, poster, release date, status,
          seasons, runtime, and more. Get all the details you need to make an
          informed decision about what to watch next. We also have dedicated
          provider pages for movies and TV series. These pages list all the
          available providers where you can watch your favorite content. Use the
          search option to find specific providers and easily access their
          offerings. Our website is built using React, React Router, Tailwind
          CSS, TypeScript, React Icons, Axios, React Infinite Scroll Component,
          React Circular Progressbar, and Swiper. These technologies help us
          deliver a seamless and user-friendly experience for all our visitors.
          We hope you enjoy using our website and find it helpful in discovering
          and exploring your favorite movies and TV series. If you have any
          questions or feedback, please don't hesitate to reach out to us. Happy
          browsing and happy watching!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
