import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import RevealText from "./RevealText";
import { ColourfulText } from "./ui/colourful-text";
import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/hero-highlight";
import { Cover } from "./ui/cover";

const Hero = () => {
  const words = ["Modern", "High-Performance", "Scalable"];

  return (
    <div className="flex flex-col justify-center h-screen">
      <Spotlight />
      <div className="flex flex-col justify-center items-center text-xl">
        {/* name section  */}
        <div>
          <p className=" tracking-widest text-white-100">
            Hi, I&apos;m{" "}
            <span className="font-bold">
              <ColourfulText text="Parvaj Mosharof" ></ColourfulText>
            </span>
          </p>
        </div>

        {/* developer */}
        <div className="relative w-full flex justify-center">
          <RevealText></RevealText>
          <div className="absolute top-12 left-16 text-3xl text-blue-100"></div>
        </div>

        {/* work  */}

        <div className="text-blue-100 tracking-widest flex flex-col gap-3 text-md text-center w-full">
          <div className="">
            Crafting <FlipWords words={words}></FlipWords>{" "}
          </div>
          <div className="text-sm tracking-widest">
            <Highlight className="p-2">Web Solution</Highlight> with{" "}
            <Cover>Next.js & Modern Technologies.</Cover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
