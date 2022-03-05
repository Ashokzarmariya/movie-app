import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchMovieVideo,
  fetchSingleMovie,
} from "../../ReduxToolkit/MovieDetailSlice";
import YouTube from "react-youtube";
//import "./DetailCss.css"

const Details = () => {
  const { id } = useParams() || "id";
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleMove);
  console.log("store", data);
  useEffect(() => {
    dispatch(fetchSingleMovie(id));
    dispatch(fetchMovieVideo(id));
  }, [dispatch, id]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <>
      <div>
        <div className="container flex relative mt-5">
          <div className="bg-gray-800 w-2/4 h-96 bg-opacity-40 z-10 absolute left-0">
            <div className="p-10">
              <h1 className="text-white text-3xl font-bold">
                {" "}
                {data.movieDetail.original_title}
              </h1>
              <div className="flex">
                <p className="text-white mt-10">
                  {" "}
                  {data.movieDetail.release_date}
                </p>
                <p className="text-white mt-10 ml-1">
                  {" "}
                  {data.movieDetail.spoken_languages[0].name}
                </p>
                {/* <p className="text-white mt-10 ml-1">
                  {" "}
                  {data.movieDetail.genres[0].name}
                </p> */}
              </div>

              <p className="text-white mt-10"> {data.movieDetail.overview}</p>
            </div>
          </div>
          <div className="bg-green-600 w-4/5 right-0 absolute">
            <img
              className="w-2/3 absolute right-0 h-96"
              src={`https://image.tmdb.org/t/p/original/${data.movieDetail.backdrop_path}`}
              alt="Sphere"
            />
          </div>
        </div>
      </div>
      {/* <div>
        <YouTube videoId="X48VuDVv0do" opts={opts} />
      </div> */}
    </>
  );
};

export default Details;
