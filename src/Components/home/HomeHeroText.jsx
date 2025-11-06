import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex items-center leading-[8.5vw]">
        THE SPARK FOR
      </div>
      <div className="text-[9.5vw] justify-center flex items-center leading-[8.5vw]">
        ALL
        <div className="h-[7vw] w-[14vw] rounded-full -mt-4 overflow-hidden">
          <Video />
        </div>
        THINGS
      </div>
      <div className="text-[9.5vw] leading-[8.5vw]">CREATIVE</div>
    </div>
  );
};

export default HomeHeroText;
