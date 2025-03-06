// import Image from "next/image";
import React from "react";
// import profile from "@/public/images/parvaj.png";
import { AboutScroll } from "./AboutScroll";
import { GlowLamp } from "./GlowLamp";
import { SparklesCore } from "./ui/sparkles";
// import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  return (
    <div className="relative w-full">
      <AboutScroll></AboutScroll>
    </div>
  );
};

export default About;
