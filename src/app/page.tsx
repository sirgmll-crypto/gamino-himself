import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Family from "@/components/Family";
import Contact from "@/components/Contact";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Family />
        <Contact />
      </main>
      <footer className="bg-[#1A1208] text-[#6B5E52] text-center text-xs py-6 tracking-widest uppercase">
        © {new Date().getFullYear()} Gamaliel Bepa — Gamino Himself
      </footer>
      <MusicPlayer />
    </>
  );
}