import { useEffect, useState } from 'react';
import MovieCard from '../Trending/MovieCard';
const Popular = () => {
  const [movieList, setMovieList] = useState([]);
  async function getMovieList() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg',
      },
    };

    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const jsonData = await data.json();
    setMovieList(jsonData.results);
  }

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
    <h1>Popular</h1>
    <div className="movie-trending-container">
        {
            movieList.map((item)=>{
               return <MovieCard key={item.id} data={item}/>
            })
         }
     
    </div>
    </>
  );
};

export default Popular;
