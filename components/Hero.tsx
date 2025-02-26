import React from "react";
import { Spotlight } from "./ui/spotlight-new";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen">
      <Spotlight />
      <div className="flex flex-col justify-center items-center">
        <div>
          <p>
            Hi, I am
            <span> Parvaj </span>
            Mosharof
          </p>
        </div>
        <div className="relative border w-full flex justify-center">
          <p className="text-7xl w-[90%] text-center">Developer</p>
          <div className="absolute top-0 left-0">
            web
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
