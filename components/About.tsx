import Image from "next/image";
import React from "react";
import profile from "@/public/images/parvaj.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  const text1 = `I'm Md. Parvaj Mosharof, a full-stack web developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, and PostgreSQL. I’m passionate about building scalable web apps and I’ve built projects like Rento (real estate platform), Diagno (Diagnosting Center), and a Library Management System. Currently, I’m pursuing a BSc in CSE at Uttara University and constantly improving my skills. Check out my work and let's connect! 🚀.`;

  return (
    <div className="h-screen flex items-center">
      {/* profile image  */}
      <div className="w-1/2">
        <Image
          src={profile}
          alt="profile"
          className="brightness-75 rounded-full"
        ></Image>
      </div>
      {/* about text  */}

      <div className="w-1/2 text-sm">
        {/* <TextGenerateEffect words={text1}></TextGenerateEffect> */}
        {/* <TextGenerateEffect words={text2}></TextGenerateEffect>
        <TextGenerateEffect words={text3}></TextGenerateEffect>
        <TextGenerateEffect words={text4}></TextGenerateEffect> */}
      </div>
    </div>
  );
};

export default About;
