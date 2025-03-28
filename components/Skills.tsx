"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import GridItem from "./GridItem";
import { backend, databases, frontend, tools } from "@/lib/skillsArray";
import { SparklesCore } from "./ui/sparkles";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center my-20 pb-10 overflow-hidden sm:max-w-7xl max-w-sm px-10">
      {/* heading  */}
      <h1 className="text-7xl font-bold text-blue-100 text-center mb-2">
        Skills
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

      {/* cards */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-neutral-400" />}
          title="Front-end"
          description="Building dynamic and interactive web applications with modern UI/UX best practices."
          items={frontend}
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-neutral-400" />}
          title="Back-end"
          description="Developing scalable and efficient server-side applications with secure APIs."
          items={backend}
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-neutral-400" />}
          title="Learning"
          description="Always exploring and learning new technologies based on project requirements and industry trends."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-neutral-400" />}
          title="Database"
          description="Designing and managing structured and unstructured databases for reliable data storage."
          items={databases}
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13] rounded-3xl"
          icon={<Search className="h-4 w-4 text-neutral-400" />}
          title="Tools"
          description="Leveraging powerful tools for version control, API testing, and seamless development workflow."
          items={tools}
        />
      </ul>
    </div>
  );
};

export default Skills;
