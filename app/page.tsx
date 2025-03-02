// import About from "@/components/About";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
// import Remote from "@/components/ui/Remote";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero></Hero>
        {/* <About></About> */}
        <Projects></Projects>
        <Skills></Skills>
        {/* <Remote></Remote> */}
      </div>
    </main>
  );
}
