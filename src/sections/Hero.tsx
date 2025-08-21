"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "PORTFOLIO.EXE";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const nameText = document.querySelector(".scrollingText");

    gsap.to(nameText, {
      y: 100,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-retro-light"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]" />

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="retro-title mb-4">
            <span className="inline-block">
              {displayText}
              <span className="animate-pulse">_</span>
            </span>
          </h1>

          <div className="fade-in-delayed">
            <p className="retro-subtitle text-retro-medium mb-2">
              &gt; FULL STACK DEVELOPER
            </p>
            {/* <p className="retro-body text-retro-medium max-w-2xl mx-auto">
              Creating digital experiences with clean code and creative
              solutions. Specializing in modern web technologies and
              user-centered design.
            </p> */}
            <p className="retro-body text-retro-medium max-w-2xl mx-auto">
              Hi, my name is{" "}
              <span className="bg-black p-1 text-white">Victor Jack</span>, I am
              a software Engineer, a true definition of a Philomath and a Tech
              addict. I strive to bring innovative ideas to life. My goal is to
              craft seamless digital experiences that not only meet but exceed
              client expectations.
            </p>
          </div>
        </div>

        <div className="fade-in-delayed space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToProjects()}
              className="bg-black text-sm text-white h-10 rounded retro-hover bg-retro-black text-retro-white hover:bg-retro-dark font-retro tracking-wider px-8 py-3"
            >
              VIEW PROJECTS
            </button>
            <Button
              variant="outline"
              className="retro-hover border-2 border-retro-black text-retro-black hover:bg-retro-black hover:text-retro-white font-retro tracking-wider px-8 py-3"
            >
              <a href="/VictorJack.pdf" download>
                DOWNLOAD CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/thedon-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-hover p-3 border-2 border-retro-medium hover:border-retro-black hover:bg-retro-black hover:text-retro-white transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/victorjackadokiye"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-hover p-3 border-2 border-retro-medium hover:border-retro-black hover:bg-retro-black hover:text-retro-white transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:viktoh7351@gmail.com"
              className="retro-hover p-3 border-2 border-retro-medium hover:border-retro-black hover:bg-retro-black hover:text-retro-white transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full border-2 border-retro-medium hover:border-retro-black transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Retro grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <p className="scrollingText tracking-[0.5rem] lg:tracking-[5rem] opacity-25 retro-title font-semibold uppercase absolute bottom-24">
        Victor Jack
      </p>
    </section>
  );
};

export default Hero;
