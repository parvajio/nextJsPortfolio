import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import RevealText from "./RevealText";
import { ColourfulText } from "./ui/colourful-text";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen">
      <Spotlight />
      <div className="flex flex-col justify-center items-center text-xl">
        <div>
          <p className=" tracking-widest">
            Hi, I&apos;m <span className="font-bold">
              <ColourfulText text="PARVAJ"></ColourfulText> MOSHAROF
            </span>
          </p>
        </div>
        <div className="relative w-full flex justify-center">
          <RevealText></RevealText>
          <div className="absolute top-0 left-0">web</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
