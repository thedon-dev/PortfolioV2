"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "EMAIL",
      value: "hello@portfolio.dev",
      link: "mailto:hello@portfolio.dev",
    },
    {
      icon: <Phone size={24} />,
      title: "PHONE",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin size={24} />,
      title: "LOCATION",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GITHUB",
      url: "https://github.com",
    },
    {
      icon: <Linkedin size={24} />,
      name: "LINKEDIN",
      url: "https://linkedin.com",
    },
    {
      icon: <Twitter size={24} />,
      name: "TWITTER",
      url: "https://twitter.com",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : ""}`}>
          <h2 className="retro-title text-foreground mb-4">CONTACT.EXE</h2>
          <div className="w-24 h-1 bg-retro-accent mx-auto mb-8"></div>
          <p className="retro-body text-retro-medium max-w-3xl mx-auto text-lg">
            Ready to collaborate on your next project? Let's connect and build
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? "fade-in" : ""}`}>
            <div className="bg-card border-2 border-retro-light p-8">
              <h3 className="font-retro font-bold text-xl text-foreground mb-6 tracking-wider">
                SEND MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-retro text-sm text-retro-dark mb-2 tracking-wider">
                      NAME
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-retro border-2 border-retro-medium focus:border-retro-black"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-retro text-sm text-retro-dark mb-2 tracking-wider">
                      EMAIL
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-retro border-2 border-retro-medium focus:border-retro-black"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-retro text-sm text-retro-dark mb-2 tracking-wider">
                    SUBJECT
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="font-retro border-2 border-retro-medium focus:border-retro-black"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block font-retro text-sm text-retro-dark mb-2 tracking-wider">
                    MESSAGE
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="font-retro border-2 border-retro-medium focus:border-retro-black resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full retro-hover bg-retro-black text-retro-white hover:bg-retro-dark font-retro tracking-wider py-3"
                >
                  <Send size={18} className="mr-2" />
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? "fade-in-delayed" : ""}`}>
            <div>
              <h3 className="font-retro font-bold text-xl text-foreground mb-6 tracking-wider">
                GET IN TOUCH
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 border-2 border-retro-light hover:border-retro-dark transition-colors group"
                  >
                    <div className="text-retro-black group-hover:text-retro-accent transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-retro text-sm text-retro-medium tracking-wider">
                        {info.title}
                      </p>
                      <p className="retro-body text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-retro font-bold text-xl text-foreground mb-6 tracking-wider">
                SOCIAL LINKS
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-hover aspect-square border-2 border-retro-medium hover:border-retro-black hover:bg-retro-black hover:text-retro-white transition-all flex flex-col items-center justify-center p-4 group"
                  >
                    <div className="mb-2 group-hover:text-retro-white">
                      {social.icon}
                    </div>
                    <span className="font-retro text-xs tracking-wider">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-retro-black text-retro-white p-6 border-4 border-retro-dark">
              <p className="font-retro text-sm mb-2">
                &gt; STATUS: AVAILABLE FOR WORK
              </p>
              <p className="retro-body text-sm">
                Currently accepting new projects and collaborations. Response
                time: 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
