import React from "react";
import { GlareCard } from "./ui/glare-card";
import { SparklesCore } from "./ui/sparkles";

const WhatIDO = () => {
  return (
    <div className="sm:max-w-7xl max-w-sm mt-20">
      {/* heading  */}
      <h1 className="text-7xl font-bold text-blue-100 text-center mb-2">
        What I Do
      </h1>
      {/* gradient */}
      <div className="w-[20rem] md:w-[40rem] h-24 md:h-[8rem] relative mb-10 mx-auto sm:max-w-7xl max-w-sm">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/2 md:w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/2 md:w-3/4" />
        <div className="absolute inset-x-28 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/3 md:w-1/4 blur-sm" />
        <div className="absolute inset-x-28 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/3 md:w-1/4" />

        {/* SPARKLES  */}

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black-100 md:[mask-image:radial-gradient(300px_100px_at_top,transparent_20%,white)] [mask-image:radial-gradient(200px_80px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center">
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">
            🖥️ Frontend Development
          </p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Building interactive and responsive UIs using modern technologies
            like HTML, CSS, React.js, and Tailwind CSS.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">🛠️ Backend Development</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Developing robust server-side applications and APIs with Node.js,
            Express.js, and JWT for authentication.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">🗃️ Database Management</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Handling NoSQL databases with MongoDB, performing CRUD operations,
            and maintaining efficient database connections.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">🌐 API Integration</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Integrating RESTful APIs to enable communication between frontend
            and backend services.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">⚙️ Tools & Workflow</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Skilled in Git, GitHub, VSCode, Postman, and Figma to streamline
            development and design workflows.
          </p>
        </GlareCard>
      </div>
    </div>
  );
};

export default WhatIDO;
