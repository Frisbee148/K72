import React from "react";
import Video from "../Components/home/Video.jsx";
import HomeHeroText from "../Components/home/HomeHeroText.jsx";
import HomeBottomtext from "../Components/home/HomeBottomtext.jsx";

const Home = () => {
  return (
    <>
    <div className="h-screen w-screen fixed">
      <Video />
    </div>
    <div className="h-screen w-scrren relative flex flex-col">
      <HomeHeroText />
      <HomeBottomtext />

    </div>
    </>
  );
};

export default Home;
