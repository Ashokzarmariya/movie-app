import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import { Link } from "react-router-dom";

export default function TrendingMovieSlider({data}) {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
  };


  return (
    <div className="relative z-0">
       <Slider className="mt-8 absolute" {...settings}>
        {data.map((item) => <div key={item.id} className="mx-24 ">
          <Link to={`/movie/${item.id}`}>
            <img
          className="carouselImg rounded h-96"
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          alt=""
        />
          </Link>
        
      </div>)}
    </Slider>
    </div>
   
  );
}
