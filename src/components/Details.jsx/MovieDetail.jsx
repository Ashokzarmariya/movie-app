import React from 'react'
import { FaPlay } from "react-icons/fa";

const MovieDetail = ({title,date,languages,genres, overview, imgPath}) => {
  return (
    <div>
      <div className="">
          <div className="flex relative mt-5 container bg-gray-900 ">
            <div className="bg-gray-900 detail w-2/4  left-0">
              <div className="p-10">
                <h1 className="text-white text-3xl font-bold">
                  {title}
                </h1>
                <div className="flex">
                  <p className="text-white mt-10">
                    {date +" ."}
                  </p>
                  <p className="text-white mt-10 ml-2">
                    {" "}
                    {languages+" ."}
                  </p>
                  <p className="text-white mt-10 ml-2">
                    {" "}
                    {genres}
                  </p>

                </div>

                <p className="text-white mt-10"> {overview}</p>
                <div className="flex absolute bottom-10">
                  <FaPlay color="white" size={"1.5em"}/>
                  <p className="text-white ml-10 text-xl font-bold">Watch Movie</p>
                
                </div>
              </div>
            </div>
            <div className="right-0 absolute w-2/4  bg-gray-900">
              <img className="detail" src={`https://image.tmdb.org/t/p/original${imgPath}` }alt="" />
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default MovieDetail
