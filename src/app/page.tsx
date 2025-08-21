import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
// import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </div>
  );
}
