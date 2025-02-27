import Image from "next/image";
import React from "react";
import profile from "@/public/images/parvaj.png";

const About = () => {
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

      <p>
        Hi, I&apos;m Md. Parvaj Mosharof, a passionate full-stack web developer
        with expertise in JavaScript, TypeScript, React, Next.js, Node.js,
        Express.js, MongoDB, and PostgreSQL. I love building dynamic and
        scalable web applications with clean, efficient code.
        <br />
        Currently, I&apos;m pursuing a BSc in Computer Science & Engineering at
        Uttara University, where I actively participate in competitive
        programming to sharpen my problem-solving skills. I also enjoy exploring
        cloud computing and am currently learning AWS to expand my expertise in
        cloud-based solutions.
        <br />
        I have worked on multiple projects, including real estate platforms,
        tour booking applications, and library management systems, integrating
        modern authentication, database management, and advanced UI/UX design.
        <br />
        My goal is to continuously learn, innovate, and contribute to impactful
        projects while growing as a developer. Feel free to check out my work
        and connect with me!
      </p>
    </div>
  );
};

export default About;
