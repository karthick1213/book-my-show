import React, { useEffect, useState } from "react";
import axios from "axios";

import EnterainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.components";

function Home() {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
      const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");
        setPopularMovies(getPopularMovies.data.results);
      };
      requestPopularMovies();
    },[]);

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect(() => {
      const requestNowPlayingMovies = async () => {
        const getNowPlayingMovies = await axios.get("/movie/now_playing");
        setNowPlayingMovies(getNowPlayingMovies.data.results);
      };
      requestNowPlayingMovies();
    },[]);

    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
      const requestUpcomingMovies = async () => {
        const getUpcomingMovies = await axios.get("/movie/now_playing");
        setUpcomingMovies(getUpcomingMovies.data.results);
      };
      requestUpcomingMovies();
    },[]);

    return (
        <>
        <div className="flex flex-col bg-gray-200 px-20 w-full">

            <div className="p-10">
                <h1 className="text-2xl font-bold px-2">The Best of Entertainment</h1>
                <EnterainmentCardSlider />
            </div>

        </div>

        <div className="flex flex-col bg-navCol-750 px-20 pb-10">

            <div className="flex flex-col w-full h-full py-4">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay" className="w-full h-full"/>
                <PosterSlider images={popularMovies} title="Premiers" subtitle="Watch new movies at home, every Friday" isDark={true} />
            </div>

        </div>

        <div className="flex flex-col bg-gray-200 px-20 pb-10">
            <PosterSlider images={nowPlayingMovies} title="Online Streaming Events" isDark={false} />
        </div>

        <div className="flex flex-col bg-navCol-750 px-20 pb-10">
            <PosterSlider images={upcomingMovies} title="Upcoming" isDark={true} />
        </div>
        </>
    );
}

export default Home;
