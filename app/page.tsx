import About from "@/components/About";
import Approach from "@/components/Approch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WhatIDO from "@/components/WhatIDO";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-white" />
      ),
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto">
      <FloatingNav navItems={navItems}></FloatingNav>
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
