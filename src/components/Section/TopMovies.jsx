import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { fetchuptMovies } from '../../ReduxToolkit/TopMovieSlice';
import MovieCard from '../MovieCard';

const TopMovies = () => {
    const  {id}  = useParams();
    console.log("utp",id)
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.TopMovies.uptMovies);
    console.log(movies)

    useEffect(() => {
        dispatch(fetchuptMovies(id))
    },[dispatch,id])
  return (
    <div>
          <h1>ashok</h1>
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
    </div>
  )
}

export default TopMovies
