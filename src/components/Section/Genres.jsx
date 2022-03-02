import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Pagination from "../../Pagination/Pagination";
import { fetchAsyncMovies } from "../../ReduxToolkit/MovieSlice";
import MovieCard from "../MovieCard";

const Genres = () => {
  const { genres } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie.movies);

  const [count, setCount] = useState(1);
  const page = (n) => {
    setCount(count + n);
  };
    useEffect(() => {
      
    dispatch(fetchAsyncMovies(genres, count));
  }, [genres, dispatch, count]);
  console.log(count);

  return (
    <div className="container">
      <div className="flex flex-wrap justify-center">
        {movies.map((item) => {
          return (
            <MovieCard
              id={item.id}
              key={item.id}
              imgUrl={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
          );
        })}
      </div>
      <div className="mt-11">
        <Pagination
          prevPage={() => {
            page(-1);
          }}
          nextPage={() => {
            page(1);
          }}
        />
      </div>
    </div>
  );
};

export default Genres;
