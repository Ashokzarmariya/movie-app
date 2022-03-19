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

const Details = () => {
  const { id } = useParams() || "id";
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleMove);
  const loading = data.loding;
  //console.log(loading)

  console.log("store", data);
  useEffect(() => {
    dispatch(fetchSingleMovie(id));
    dispatch(fetchMovieVideo(id));
  }, [dispatch, id]);

  const opts = {
    height:"100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <>
      {!loading && (
        <div className="">
          <div className=" flex relative mt-5 container bg-gray-900 ">
            <div className="bg-gray-900  w-2/4 p-16  z-0 absolute left-0">
              <div className="p-10">
                <h1 className="text-white text-3xl font-bold">
                  {data.movieDetail.original_title}
                </h1>
                <div className="flex">
                  <p className="text-white mt-10">
                    {data.movieDetail.release_date}
                  </p>
                  <p className="text-white mt-10 ml-1">
                    {" "}
                    {data.movieDetail.spoken_languages[0].english_name}
                  </p>
                  <p className="text-white mt-10 ml-1">
                    {" "}
                    {data.movieDetail.genres[0].name}
                  </p>
                </div>

                <p className="text-white mt-10"> {data.movieDetail.overview}</p>
              </div>
            </div>
            <div className="right-0 absolute w-2/4 p-2 bg-gray-900">
              {/* <Link to={`/movie/trailer/${data.movieVideo[0].key}`}> */}
              {/* <YouTube videoId={data.movieVideo[0].key} opts={opts} /> */}
              <img className=" " src="https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
