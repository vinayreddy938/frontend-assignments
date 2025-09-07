const MovieCard = (props) => {
  const { adult, original_language, original_title, overview, popularity, poster_path, release_date, title } = props.obj;

  return (
    <div className="card-container">
      {
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
      }

      {/* Movie Info */}
      <div className="text-box">
        <h2 >{original_title}</h2>
        <p >{overview}</p>
        <div >
          <span>Popularity: {popularity}</span>
          <span>Release: {release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
