import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import { NextArrow, PrevArrow } from "./Arrows.component"

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
      const requestNowPlayingMovies = async() => {
        const getImages = await axios.get("/movie/now_playing");
        setImages(getImages.data.results);
      };
      requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        autoplay: true,
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: "300px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        arrows: true,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
            {
                images.map((image) => (
                    <div className="w-full h-60 md:h-96 pt-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt={image} className="w-full h-full rounded-md"></img>
                    </div>
                ))
            }
            </HeroSlider>
        </div>

        <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
            {
                images.map((image) => (
                    <div className="w-full h-96 px-2 pt-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt={image} className="w-full h-full rounded-md"></img>
                    </div>
                ))
            }
            </HeroSlider>
        </div>


      </>
    );
}

export default HeroCarousal;
