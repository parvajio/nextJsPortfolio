import About from "@/components/About";
import Approach from "@/components/Approch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import WhatIDO from "@/components/WhatIDO";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto">
      <Hero />
      <About />
      <Projects />
      <RecentProjects></RecentProjects>
      <Skills />
      <WhatIDO></WhatIDO>
      <Approach></Approach>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
