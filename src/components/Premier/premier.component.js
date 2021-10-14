import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.components"
import settings from "../../config/Poster.config"
import PremierImage from "../../config/TempPoster.config";

const Premier = () => {
    return (
        <>
        <div className="flex flex-col pl-6">
            <h3 className="text-white text-xl font-bold">
                Premiers
            </h3>
            <p className="tex-sm text-gray-300">
                Watch new movies at home, every Friday
            </p>
        </div>
        <Slider {...settings}>
        {
            PremierImage.map((image) => (
                <Poster {...image} isDark />
            ))
        }
        </Slider>
        </>
    );
}

export default Premier;
