import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import "./homeCard.css";
//MdOutlineNavigateNext

const HomeCard = ({trendingData,sectionName}) => {
    const slideRef = useRef();
    const [flag, setFlage] = useState(false);
    console.log(slideRef.current)

   
 
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 6.1,
    slidesToScroll: 5,
  };

  return (
      <div className="relative mt-5"
          onMouseEnter={() => {
          setFlage(true)
          }}
          onMouseLeave={() => {
              setFlage(false)
          }}
      >
      <h2 className="text-white left-4 ml-3 font-bold text-2xl" > {sectionName} </h2>

      <Slider ref={slideRef} {...settings} >
        {trendingData.map((item) => 
          
            
          <div className="mt-4 mx-4">
            <Link to={`/movie/${item.id}`}><img
                  className=" w-60"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
            </Link>
                
              </div>
            
          
        )}
          </Slider>
          
      <div className="absolute right-4 top-2/4">
        <button
          className={flag?"block":"hidden"}
                  onClick={() => {
              console.log("ashok")
            slideRef.current.slickNext();
          }}
        >
          <MdOutlineNavigateNext size="3em" color="white" />
        </button>
      </div>
      <div className="absolute left-4 top-2/4">
        <button
          className={flag?"block":"hidden"}
          onClick={() => {
            slideRef.current.slickPrev();
          }}
        >
          <MdKeyboardArrowLeft size="3em" color="white" />
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
//<GrNext style={{ color: "white" }} className="text-4xl" />

