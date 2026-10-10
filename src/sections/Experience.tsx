"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "ClassroomIO",
      position: "Software Engineer",
      period: "",
      location: "Port-Harcourt, Rivers State",
      description:
        "Designed, developed, and maintained features for ClassroomIO's education platform, contributing to both frontend and backend development. Built responsive user interfaces with Svelte and Tailwind CSS, developed backend services and APIs using Hono, and managed database operations with PostgreSQL and Drizzle ORM. Collaborated on feature implementation, application reliability, and code quality to deliver scalable and maintainable software.",
      technologies: [
        "Svelte",
        "Hono",
        "Tailwind",
        "Storybook",
        "PostgreSQL",
        "Drizzle ORM",
      ],
    },
    {
      company: "Royler Voucher",
      position: "Mobile App Engineer & Developer Support",
      period: "",
      location: "Port-Harcourt, Rivers State",
      description:
        "Engineered cross-platform web and mobile applications with React, Next.js, and React Native, focusing on performance and scalability. Integrated and managed API consumption for dynamic data handling across both platforms. Led deployment workflows, successfully publishing and maintaining applications on the Play Store and App Store.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Tailwindcss",
        "React Native",
        "Expo",
        "Nativewind",
      ],
    },
    {
      company: "Kleeth Technologies",
      position: "FrontEnd Engineer",
      period: "",
      location: "Port-Harcourt, Rivers State",
      description:
        "Led frontend development for cross-platform mobile and web applications, ensuring high-quality user experiences. Oversaw the entire deployment process, implementing and managing CI/CD pipelines to automate and accelerate application delivery.",
      technologies: [
        "NextJS",
        "TypeScript",
        "Tailwindcss",
        "ReactNative",
        "Expo",
        "Hostinger",
        "Github Actions",
      ],
    },
    {
      company: "Let's Build Labs",
      position: "FrontEnd Developer",
      period: "",
      location: "Remote",
      description:
        "Led development of scalable web3 applications using NextJS. Implemented CI/CD pipelines reducing deployment time by 40%.",
      technologies: ["NextJS", "TypeScript", "Firebase", "Github Actions"],
    },
    {
      company: "Silicon Delta Innovation Hub",
      position: "Software Engineer",
      period: "",
      location: "Port-Harcourt, Rivers State",
      description:
        "Developed responsive user interfaces for clients and in-house projects. Collaborated with UX designers to implement pixel-perfect designs.",
      technologies: [
        "ReactJS",
        "Next.js",
        "Tailwind CSS",
        "ReactNative",
        "Expo",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 bg-retro-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : ""}`}>
          <h2 className="retro-title text-retro-black mb-4">EXPERIENCE.LOG</h2>
          <div className="w-24 h-1 bg-retro-accent mx-auto mb-8"></div>
          <p className="retro-body text-retro-dark max-w-3xl mx-auto text-lg leading-relaxed">
            My professional journey through the tech industry, working with
            innovative companies and delivering impactful solutions.
          </p>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 border bg-retro-medium transform -translate-x-1/2 z-0"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } ${isVisible ? "fade-in" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-retro-accent rounded-full border-4 border-retro-white transform -translate-x-1/2 z-10"></div>
              <div
                className={`ml-[15px] md:ml-0 mt-3 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="retro-hover bg-background border-2 border-retro-medium p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-retro font-bold text-retro-black text-xl mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-retro-accent font-medium flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex  flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center text-retro-medium text-sm mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="retro-body text-retro-dark mb-4 text-sm">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-retro-light text-retro-dark text-xs font-retro border border-retro-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-in">
          <div className="bg-retro-black text-retro-white p-8 border-4 border-retro-dark inline-block">
            <p className="font-retro lg:text-lg mb-4">
              &gt; TOTAL EXPERIENCE:{" "}
              <span className="text-green-500">4 YEARS</span>
            </p>
            <p className="retro-body text-xs lg:text-base">
              Continuously learning and evolving with technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
