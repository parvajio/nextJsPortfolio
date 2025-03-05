// import Image from "next/image";
import React from "react";
// import profile from "@/public/images/parvaj.png";
import { AboutScroll } from "./AboutScroll";
import { GlowLamp } from "./GlowLamp";
// import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  return (
    <div className="relative w-full">
      {/* <GlowLamp></GlowLamp> */}

      <AboutScroll></AboutScroll>
    </div>
  );
};

export default About;
