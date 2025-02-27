import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import RevealText from "./RevealText";
import { ColourfulText } from "./ui/colourful-text";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen">
      <Spotlight />
      <div className="flex flex-col justify-center items-center text-xl">
        {/* name section  */}
        <div>
          <p className=" tracking-widest">
            Hi, I&apos;m <span className="font-bold">
              <ColourfulText text="PARVAJ"></ColourfulText> MOSHAROF
            </span>
          </p>
        </div>

        {/* developer */}
        <div className="relative w-full flex justify-center">
          <RevealText></RevealText>
          <div className="absolute -top-5 left-0">web</div>
        </div>

        {/* work  */}

        <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] text-center">
            <span className="">Crafting Modern, High-Performance & Scalable <br /> Web Solutions with Next.js & Modern Technologies.</span>
          </div>
      </div>
    </div>
  );
};

export default Hero;
