import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSimilerMovie } from "../../ReduxToolkit/SimilerMovieSlice";
import HomeCard from "../Home/homeMovies/HomeCard";
import MovieCard from "../MovieCard";

const SimilerMovie = ({ id }) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const similerMoives = store.similarMovie.similerMovie;
  const loading = store.similarMovie.loading;
  const similerMovieData = similerMoives.results;
  console.log("similer loading", loading);
  console.log("similer movie", store.similarMovie.loading);

  useEffect(() => {
    dispatch(fetchSimilerMovie(id));
  }, [id, dispatch]);
  return (
    <div className="">
      {/* <h1 className="text-white">Ashok</h1> */}
      {!loading && (

        <HomeCard trendingData={similerMovieData} sectionName={ "More Like This"}/>

      
      )}
    </div>
  );
};

export default SimilerMovie;
