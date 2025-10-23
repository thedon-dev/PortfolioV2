"use client";

import { useEffect, useRef, useState } from "react";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
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

  const skills = [
    {
      icon: <Code size={32} />,
      title: "FRONTEND",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      details: "Building responsive and interactive user interfaces",
    },
    {
      icon: <Database size={32} />,
      title: "BACKEND",
      description: "Node.js, Express.js, MongoDB",
      details: "Scalable server-side applications and APIs",
    },
    {
      icon: <Smartphone size={32} />,
      title: "MOBILE APPLICATIONS",
      description: "ReactNative, Expo",
      details:
        "Building cross-platform mobile experiences with native performance",
    },
    {
      icon: <Globe size={32} />,
      title: "DEPLOYMENT",
      description: "Hostinger, Vercel, CI/CD, Github/Github Actions, Pxxl",
      details: "Automated deployment and cloud infrastructure",
    },
  ];

  const techStack = [
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Hero UI", icon: "https://cdn.simpleicons.org/heroui" },
    { name: "Expo", icon: "https://cdn.simpleicons.org/expo" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    {
      name: "GitHub Actions",
      icon: "https://cdn.simpleicons.org/githubactions",
    },
    {
      name: "Hostinger",
      icon: "https://cdn.simpleicons.org/hostinger",
    },
    {
      name: "Postman",
      icon: "https://cdn.simpleicons.org/postman",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : ""}`}>
          <h2 className="retro-title text-retro-black mb-4">ABOUT.TXT</h2>
          <div className="w-24 h-1 bg-retro-accent mx-auto mb-8"></div>
          <p className="retro-body text-retro-dark max-w-3xl mx-auto text-lg leading-relaxed">
            I&apos;m a passionate software developer with a love for creating
            digital experiences that matter. My journey in tech started with
            curiosity and has evolved into a commitment to building softwares
            and solutions that bridge creativity and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`retro-hover bg-background border-2 border-retro-medium p-6 text-center ${
                isVisible ? "fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-retro-black mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="font-retro font-bold text-retro-black mb-2 tracking-wider">
                {skill.title}
              </h3>
              <p className="retro-body text-retro-dark text-sm mb-3">
                {skill.description}
              </p>
              <p className="text-xs text-retro-medium">{skill.details}</p>
            </div>
          ))}
        </div>
        <div className={`my-16 ${isVisible ? "fade-in-delayed" : ""}`}>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-36 lg:w-64 h-full bg-gradient-to-r from-white via-white to-transparent z-10"></div>

            <div className="absolute right-0 top-0 w-36 lg:w-64 h-full bg-gradient-to-l from-white via-white to-transparent z-10"></div>

            <div className="flex space-x-8 marquee-container">
              <div className="flex space-x-8 marquee-content flex-shrink-0">
                {techStack.map((tech, index) => (
                  <div
                    key={`${tech.name}-1`}
                    className="flex items-center space-x-3 bg-retro-white border-2 border-retro-medium p-3 retro-hover"
                  >
                    <img
                      src={tech.icon}
                      alt="skill icon"
                      width={100}
                      height={100}
                      className="w-[30px] h-[30px]"
                    />
                    {/* <span className="font-retro text-retro-black text-xs tracking-wide">
                      {tech.name}
                    </span> */}
                  </div>
                ))}
              </div>
              <div className="flex space-x-8 marquee-content flex-shrink-0">
                {techStack.map((tech, index) => (
                  <div
                    key={`${tech.name}-2`}
                    className="flex items-center space-x-3 bg-retro-white border-2 border-retro-medium p-3 retro-hover"
                  >
                    <img
                      src={tech.icon}
                      alt="skill icon"
                      width={100}
                      height={100}
                      className="w-[30px] h-[30px]"
                    />
                    {/* <span className="font-retro text-retro-black text-xs tracking-wide">
                      {tech.name}
                    </span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center ${isVisible ? "fade-in-delayed" : ""}`}
        >
          <div className="bg-retro-black text-retro-white p-8 border-4 border-retro-dark inline-block">
            <p className="font-retro lg:text-lg mb-4">
              &gt; CURRENT STATUS:{" "}
              <span className="text-retro-accent text-green-500">
                AVAILABLE FOR PROJECTS
              </span>
            </p>
            <p className="retro-body text-xs lg:text-base">
              Ready to collaborate on your next big idea
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .marquee-content {
          display: flex;
          align-items: center;
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }

        /* Pause animation when reduced motion is preferred */
        @media (prefers-reduced-motion: reduce) {
          .marquee-container {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
