import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../../ReduxToolkit/TrendingSlice";
import TrendingMovieSlider from "../../Carousel/Carousel";
import TrendingMovies from "../homeMovies/TrendingMovies";




const Home = () => {
  const  data  = useSelector((store) => store.Trending.trendingMovies);
  console.log("data",data)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchTrendingMovies())
    //backdrop_path
  },[dispatch])
  return (
    <div>
     
      {/* <TrendingMovieSlider data={data} /> */}
      <TrendingMovies/>
      
      
    </div>
  );
};

export default Home;
