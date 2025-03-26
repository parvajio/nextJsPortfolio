// import Image from "next/image";
import React from "react";
// import profile from "@/public/images/parvaj.png";
import { AboutScroll } from "./AboutScroll";
// import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  return (
    <section id="about" className="relative w-full">
      <AboutScroll></AboutScroll>
    </section>
  );
};

export default About;
