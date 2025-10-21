"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    let animationFrameId: number;
    const speed = 1;

    const scroll = () => {
      if (
        scroller.scrollLeft >=
        (scroller.scrollWidth - scroller.clientWidth) / 2
      ) {
        scroller.scrollLeft = 0;
      } else {
        scroller.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const pauseScroll = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const resumeScroll = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroller.addEventListener("mouseenter", pauseScroll);
    scroller.addEventListener("mouseleave", resumeScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scroller.removeEventListener("mouseenter", pauseScroll);
      scroller.removeEventListener("mouseleave", resumeScroll);
    };
  }, []);

  const testimonials = [
    {
      name: "Honour Robinson",
      role: "Chief Executive Officer at PXXL",
      content:
        "Victor is a devoted frontend developer that builds really cool things, Worked alongside him for some projects and seen his workflow and final works, He cooks beautiful things!",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 px-4 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : ""}`}>
          <h2 className="retro-title text-retro-black mb-4">
            TESTIMONIALS.DAT
          </h2>
          <div className="w-24 h-1 bg-retro-accent mx-auto mb-8"></div>
          <p className="retro-body text-retro-dark max-w-3xl mx-auto text-lg leading-relaxed">
            What clients and colleagues have to say about working with me and
            the quality of solutions delivered.
          </p>
        </div>

        <div className="relative">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollerRef}
            className="flex overflow-x-hidden py-4 mb-12 scrollbar-hide relative"
            style={{ scrollBehavior: "auto" }}
          >
            <div className="flex space-x-8">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 retro-hover bg-background border-2 border-retro-medium p-6"
                >
                  <div className="text-retro-accent mb-4">
                    <Quote size={20} />
                  </div>
                  <p className="retro-body text-sm text-retro-dark mb-6 italic">
                    {testimonial.content}
                  </p>
                  <div>
                    <h3 className="font-retro font-bold text-retro-black">
                      {testimonial.name}
                    </h3>
                    <p className="text-retro-medium text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center" data-aos="fade-in">
          <div className="bg-retro-black text-retro-white p-8 border-4 border-retro-dark inline-block">
            <p className="font-retro lg:text-lg mb-4">
              &gt; CLIENT SATISFACTION:{" "}
              <span className="text-green-500">100%</span>
            </p>
            <p className="retro-body text-xs lg:text-base">
              Delivering excellence on every project
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
