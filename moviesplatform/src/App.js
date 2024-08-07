import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./Components/MovieCard";
//41517e3 of omdb api
const API_KEY = "db681e9d1f2a29029f34efc224fdf0bb";
const API_URL = "https://api.themoviedb.org/3/search/movie";

const movie1 = {
  adult: false,
  backdrop_path: "/52oOtS4jYfSEIoXByyb3bEMVi9Z.jpg",
  genre_ids: [878, 28, 12],
  id: 1061474,
  original_language: "en",
  original_title: "Superman",
  overview:
    "Superman, a cub reporter in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
  popularity: 36.266,
  poster_path: "/8ixB1k2GcJbMbmw8Q7QmJxKi3ie.jpg",
  release_date: "2025-07-09",
  title: "Superman",
  video: false,
  vote_average: 0,
  vote_count: 0,
};
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&query=${title}`
    );
    const data = await response.json();
    //console.log(data.results);
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies("garden");
  }, []);
  return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
