import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Pagination from "../Pagination/PaginationCard";
import { fetchAsyncMovies } from "../../ReduxToolkit/MovieSlice";
import MovieCard from "../MovieCard";
import { setPage } from "../../ReduxToolkit/pageSlice";
import Loading from "../Spinner/Loading";
//import Loading from "../Spinner/Loading";

const Genres = () => {
  const { genres } = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const movies = store.movie.movies;
  const loading = store.movie.loading;
  const pageNo =  store.page.pageNo;
  //console.log("store",pageNo)
  const [count, setCount] = useState(1);

  const page = (n) => {
    setCount(count + n);
  };
  useEffect(() => {
    const genreCountObj = {
      genre: genres,
      count: pageNo,
    };
    dispatch(fetchAsyncMovies(genreCountObj));
    dispatch(setPage(count))
  }, [genres, dispatch, count, pageNo]);

  //console.log(count);

  return (
    <div className="container">
      {loading && <Loading/> }
     
      <div>
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
        {!loading && <div className="mt-11">
          <Pagination
            pageNo={pageNo}
          prevPage={() => {
              page(-1);
              if (count <= 1) setCount(1)
          }}
          nextPage={() => {
            page(1);
          }}
        />
      </div>}
      
      </div>
      
    </div>
  );
};

export default Genres;
