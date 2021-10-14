import React from "react";
import Poster from "../Poster/poster.components"
import images from "./PlayImage.component";

const PlayPoster = () => {
    return (
        <>
        <div className="flex flex-wrap">
            {
                images.map((image) => (
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 py-4">
                        <Poster
                                src={image.src} alt={image.alt}
                                title={image.title}
                                subtitle={image.subtitle}
                                isDark={false} isCircle={false}
                        />
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default PlayPoster;
