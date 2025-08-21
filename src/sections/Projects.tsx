"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "SPA-BOOKING.WEB",
      category: "FULLSTACK",
      description:
        "A web application that streamlines spa appointment scheduling for both customers and spa administrators.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      status: "LIVE",
      image: "/Spa-Booking.png",
      githubLink: "https://github.com/thedon-dev/salon_site",
      liveLink: "https://salon-site-lilac.vercel.app",
    },
    {
      title: "BLOG.WEB",
      category: "FRONTEND",
      description:
        "blog website where users can read blogs. The blogs are gotten from gnews api",
      tech: ["Next.js", "TypeScript", "Tailwind", "Gnext API"],
      status: "BETA",
      image: "/iBLOG.png",
      githubLink: "https://github.com/thedon-dev/blog",
      liveLink: "iblog.pxxl.live",
    },
    {
      title: "E-COMMERCE.WEP",
      category: "FULLSTACK",
      description: "An e-commerce store for customized stickers",
      tech: ["NextJS", "TailwindCSS", "MongoDB"],
      status: "DEVELOPMENT",
      image: "/stickernator.png",
      githubLink: "",
      liveLink: "",
    },
    {
      title: "CAFE.WEB",
      category: "CREATIVE",
      description:
        "A website for a cafe to showcase what they do, events and promote their products",
      tech: ["React", "TailwindCSS"],
      status: "BETA",
      image: "/cafe-site.png",
      githubLink: "https://github.com/thedon-dev/cafe_site",
      liveLink: "https://cafe-site-cyan.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : ""}`}>
          <h2 className="retro-title text-foreground mb-4">PROJECTS.DIR</h2>
          <div className="w-24 h-1 bg-retro-accent mx-auto mb-8"></div>
          <p className="retro-body text-retro-medium max-w-3xl mx-auto text-lg">
            A collection of projects showcasing different aspects of modern web
            development, from user interfaces to backend architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group retro-hover bg-card border-2 border-retro-light hover:border-retro-dark transition-all duration-300 ${
                isVisible ? "fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-48 bg-retro-light border-b-2 border-retro-medium relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/30" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
        linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), 
        linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)
      `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-retro tracking-wider ${
                      project.status === "LIVE"
                        ? "bg-retro-accent text-retro-white"
                        : project.status === "DEVELOPMENT"
                        ? "bg-retro-medium text-retro-white"
                        : "bg-retro-dark text-retro-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* <div className="w-16 h-16 border-4 border-retro-dark bg-retro-white mx-auto mb-2 flex items-center justify-center">
                      <span className="font-retro text-xs">
                        {project.category}
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-retro font-bold text-xl text-foreground mb-2 group-hover:text-retro-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="retro-body text-retro-medium text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-retro-light text-retro-dark text-xs font-retro border border-retro-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 items-center">
                  <Link
                    href={project.githubLink}
                    className="flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="cursor-pointer text-white flex font-retro text-xs bg-black tracking-wider flex-1 p-2 border border-retro-dark rounded w-full justify-center">
                      <Github size={14} className="mr-2" />
                      CODE
                    </button>
                  </Link>

                  <Link
                    href={project.liveLink}
                    className="flex-1 w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full flex-1 border-retro-dark text-retro-dark hover:bg-retro-dark hover:text-retro-white font-retro text-xs tracking-wider"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      DEMO
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div
          className={`text-center mt-12 ${isVisible ? "fade-in-delayed" : ""}`}
        >
          <Button className="retro-hover bg-transparent border-2 border-retro-accent text-retro-accent hover:bg-retro-accent hover:text-retro-white font-retro tracking-wider px-8 py-3">
            VIEW ALL PROJECTS
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
