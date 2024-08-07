const MovieCard = ({ movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
      </div>

      <div>
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
        )}
      </div>

      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
