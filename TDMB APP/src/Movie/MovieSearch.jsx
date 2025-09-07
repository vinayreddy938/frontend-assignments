import { useEffect, useState } from 'react';
import MovieCard from './Card';

const MovieSearch = () => {
  const [movieList, setMovieList] = useState([]);
  const [movieText, setMovieText] = useState('');

  function getMovieText(event) {
    setMovieText(event.target.value);
  }

  async function getMovieByName() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg',
      },
    };

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieText}&include_adult=false&language=en-US&page=1`,
      options,
    );
    const jsonData = await data.json();
    setMovieList(jsonData.results);
  }
 

  return (
    <>
      <div className="movie-search-container">
        <label htmlFor=""></label>
        <input type="text" onChange={getMovieText} placeholder='search your movie here' />
        <button onClick={getMovieByName}>Search</button>
      </div>
      <div className="movieContainer">
        {movieList.map((item)=>{
        return <MovieCard key={item.id} obj={item}/>
        })}
      </div>
    </>
  );
};
export default MovieSearch;
