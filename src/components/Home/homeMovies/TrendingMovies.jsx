import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingMovies } from '../../../ReduxToolkit/TrendingSlice';
import HomeCard from './HomeCard';

const TrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector((store) => store.Trending.trendingMovies)
    console.log("trendingMovies", trendingMovies);
    useEffect(() => {
        dispatch(fetchTrendingMovies())
    },[])
  return (
    <div>
      
      <HomeCard trendingData={trendingMovies} sectionName={"Trending Movie"} />
    </div>
  )
}

export default TrendingMovies
