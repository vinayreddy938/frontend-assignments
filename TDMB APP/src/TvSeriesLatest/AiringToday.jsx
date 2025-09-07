import { useEffect, useState } from 'react';
import MovieCard from '../Trending/MovieCard';

const AiringToday = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("airing_today");

  async function getMovieList() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg',
      },
    };

    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${query}?language=en-US&page=1`,
      options
    );
    const jsonData = await data.json();
    setMovieList(jsonData.results);
  }

  function getOnTheAir() {
    setQuery("on_the_air");
  }
  function getPopular() {
    setQuery("popular");
  }
  function getTopRated() {
    setQuery("top_rated");
  }
  function getAirToday() {
    setQuery("airing_today");
  }

  useEffect(() => {
    getMovieList();
  }, [query]);

  // Button common style function
 const buttonStyle = (isActive) => ({
  padding: "8px 16px",
  borderRadius: "20px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  backgroundColor: isActive ? "navy" : "gray", // navy if active, gray if not
  color: "white",
  transform: isActive ? "scale(1.05)" : "scale(1)",
});

  return (
    <>
      <div
        className="button-container"
        style={{ display: "flex", gap: "10px", margin: "20px 0" }}
      >
        <button
          style={buttonStyle(query === "airing_today")}
          onClick={getAirToday}
        >
          Airing Today
        </button>

        <button
          style={buttonStyle(query === "on_the_air")}
          onClick={getOnTheAir}
        >
          On The Air
        </button>

        <button
          style={buttonStyle(query === "popular")}
          onClick={getPopular}
        >
          Popular
        </button>

        <button
          style={buttonStyle(query === "top_rated")}
          onClick={getTopRated}
        >
          Top Rated
        </button>
      </div>

      <div
        className="movie-trending-container"
      >
        {movieList.map((item) => {
          return <MovieCard key={item.id} data={item} />;
        })}
      </div>
    </>
  );
};

export default AiringToday;
