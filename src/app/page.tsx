import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/effects/ScrollProgress";

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <div className="flex flex-col gap-0">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </>
    );
}
