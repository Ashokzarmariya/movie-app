import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
//import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import {
  fetchMovieVideo,
  fetchSingleMovie,
} from "../../ReduxToolkit/MovieDetailSlice";
//
//import Loading from "../Spinner/Loading";
import "./DetailCss.css";
import { FaPlay } from "react-icons/fa";
import SimilerMovie from "./SimilerMovie";
import MovieDetail from "./MovieDetail";

const Details = () => {
  const { id } = useParams() || "id";
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleMove);
  const loading = data.loding;
  console.log("details", data);

  console.log("store", data);
  useEffect(() => {
    dispatch(fetchSingleMovie(id));
    dispatch(fetchMovieVideo(id));
  }, [dispatch, id]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div>
    
      {!loading && (
        <div>
          
          <div>
            <MovieDetail
          title={data.movieDetail.original_title}
          date={data.movieDetail.release_date}
          languages={data.movieDetail.spoken_languages[0].english_name}
          genres={data.movieDetail.genres[0].name}
          overview={data.movieDetail.overview}
          imgPath={data.movieDetail.backdrop_path}
          />
          </div>
          <div>
            <SimilerMovie id={id} />
          </div>
          
          
        </div>
        
        
      )}

      
    </div>
  );
};

export default Details;

//
//
//
//
//
//
