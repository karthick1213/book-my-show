import React from "react";
import PlayPoster from "./PlayPoster.component";
import PlayFilter from "./PlayFilter.component"

const PlayHero = () => {
    return (
        <>
        <div className="w-full h-full container lg:flex lg:flex-row-reverse">
            <div className="w-full h-full flex flex-col p-4">

                <h1 className="text-2xl font-bold px-5">Plays in Gaya</h1>
                <PlayPoster />

            </div>

            <div className="container flex flex-col pl-36 w-1/2">
                <h2 className="text-2xl font-bold">Filters</h2>
                <div className="py-5 flex flex-col gap-3">
                    <PlayFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                    <PlayFilter title="Language" tags={["Hindi", "Tamil", "English", "Urdu"]}/>
                    <PlayFilter title="Catergories" tags={["Theatre", "Stroytelling"]}/>
                    <PlayFilter title="Genres" tags={["Drama", "Adaption", "Historical", "Online Streaming Plays"]}/>
                    <PlayFilter title="More Filters" tags={["Online Streaming", "Outdoor Events", "Kids Allowed"]}/>
                    <PlayFilter title="Price" tags={["Free", "0 - 500", "501 - 2000", "Above 2000"]}/>
                </div>

                <div className="border-2 border-red-500 rounded p-2 w-1/2 flex cursor-pointer">
                    <p className="text-red-500 items-center text-lg">Browse by Venues</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default PlayHero;
