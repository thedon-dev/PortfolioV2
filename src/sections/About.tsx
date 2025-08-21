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
      description: "AWS, Docker, Vercel, CI/CD, Github",
      details: "Automated deployment and cloud infrastructure",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : ""}`}>
          <h2 className="retro-title text-retro-black mb-4">ABOUT.TXT</h2>
          <div className="w-24 h-1 bg-retro-accent mx-auto mb-8"></div>
          <p className="retro-body text-retro-dark max-w-3xl mx-auto text-lg leading-relaxed">
            I'm a passionate software developer with a love for creating digital
            experiences that matter. My journey in tech started with curiosity
            and has evolved into a commitment to building softwares and
            solutions that bridge creativity and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div
          className={`mt-16 text-center ${isVisible ? "fade-in-delayed" : ""}`}
        >
          <div className="bg-retro-black text-retro-white p-8 border-4 border-retro-dark inline-block">
            <p className="font-retro text-lg mb-4">
              &gt; CURRENT STATUS: AVAILABLE FOR PROJECTS
            </p>
            <p className="retro-body">
              Ready to collaborate on your next big idea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
