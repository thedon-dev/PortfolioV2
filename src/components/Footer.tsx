"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/Button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-retro-black text-retro-white py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-retro font-bold text-xl tracking-wider mb-4">
              PORTFOLIO.EXE
            </h3>
            <p className="retro-body text-retro-medium text-sm leading-relaxed">
              Full-stack developer passionate about creating digital experiences
              that bridge creativity and functionality.
            </p>
          </div>

          <div>
            <h4 className="font-retro font-bold text-sm tracking-wider mb-4 text-retro-light">
              QUICK LINKS
            </h4>
            <nav className="space-y-2">
              {[
                "HOME",
                "ABOUT",
                "EXPERIENCE",
                "PROJECTS",
                "GALLERY",
                "CONTACT",
              ].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const section =
                      link.toLowerCase() === "home"
                        ? "hero"
                        : link.toLowerCase();
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-pointer block font-retro text-sm text-retro-medium hover:text-retro-accent transition-colors"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-retro font-bold text-sm tracking-wider mb-4 text-retro-light">
              CONNECT
            </h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/thedon-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-retro-medium hover:border-retro-accent hover:bg-retro-accent transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/victorjackadokiye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-retro-medium hover:border-retro-accent hover:bg-retro-accent transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:viktoh7351@gmail.com"
                className="p-2 border border-retro-medium hover:border-retro-accent hover:bg-retro-accent transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="font-retro text-xs text-retro-medium">
              viktoh7351@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-retro-dark pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-retro text-xs text-retro-medium">
              © {currentYear} PORTFOLIO.EXE - ALL RIGHTS RESERVED
            </p>
            <p className="font-retro text-xs text-retro-medium mt-1">
              BUILT WITH NEXTJS + TYPESCRIPT + TAILWIND CSS
            </p>
          </div>

          <Button
            onClick={scrollToTop}
            className="bg-transparent border border-retro-medium hover:border-retro-accent hover:bg-retro-accent text-retro-white p-2"
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
