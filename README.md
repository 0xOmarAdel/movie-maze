# Movies Maze App 
 
This is a web application built using React.js, Tailwind CSS, React Router, and TypeScript. It utilizes the TMDB API to fetch movies and TV series data. The app provides various features such as searching, sorting, and viewing details of movies and TV series. It also includes a providers page that displays the top 50 providers for both movies and TV series. 
 
## Features 
 
- Home Page: 
  - Slider showcasing the top 5 popular movies 
  - Lists of top-rated movies and popular TV shows 
- Details Page: 
  - Displays additional information about the selected movie/TV series 
  - Information includes name, overview, tagline, rating, runtime, release date, season number, status, cast, and a trailer 
- Movies/TV Series Pages: 
  - Allows users to search for specific movies/TV series 
  - Provides sorting options such as top-rated, popular, etc. 
- Providers Page: 
  - Shows the top 50 providers for both movies and TV series 
 
## Installation 
 
1. Clone the repository:  `git clone https://github.com/0xOmarAdel/movie-maze.git`
2. Navigate to the project directory:  `cd movie-maze`
3. Install dependencies:  `npm install`
 
## Configuration 
 
To use the TMDB API, you need to obtain an API key from [TMDB website](https://www.themoviedb.org/documentation/api). Once you have the key, create a  .env  file in the project root directory and add the following line:
`VITE_API_KEY=your_api_key_here`
## Usage 
 
Run the following command to start the development server:
`npm start`
Open your browser and visit `http://localhost:3000` to access the app. 
 
## License 
 
This project is licensed under the [MIT License](LICENSE). 
 
## Tools Used 
 
- [React.js](https://reactjs.org/) 
- [React Router](https://reactrouter.com/) 
- [TypeScript](https://www.typescriptlang.org/) 
- [Tailwind CSS](https://tailwindcss.com/) 
- [TMDB API](https://www.themoviedb.org/documentation/api)