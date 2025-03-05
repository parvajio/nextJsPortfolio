import About from "@/components/About";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
// import Remote from "@/components/ui/Remote";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto">
        <Hero />
        <About />
        <Projects />
        <Skills />
        {/* <Remote /> */}
    </main>
  );
}
