"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  // Gallery items with different categories
  const galleryItems = [
    {
      id: 1,
      category: "WEB DESIGN",
      title: "MINIMAL.UI",
      description: "Clean interface design",
    },
    {
      id: 2,
      category: "MOBILE APP",
      title: "RETRO.MOBILE",
      description: "iOS app design",
    },
    {
      id: 3,
      category: "BRANDING",
      title: "LOGO.SYSTEM",
      description: "Brand identity",
    },
    {
      id: 4,
      category: "WEB DESIGN",
      title: "DARK.THEME",
      description: "Dark mode interface",
    },
    {
      id: 5,
      category: "ILLUSTRATION",
      title: "PIXEL.ART",
      description: "Retro illustrations",
    },
    {
      id: 6,
      category: "PHOTOGRAPHY",
      title: "URBAN.SHOTS",
      description: "City photography",
    },
    {
      id: 7,
      category: "WEB DESIGN",
      title: "GRID.SYSTEM",
      description: "Layout experiments",
    },
    {
      id: 8,
      category: "BRANDING",
      title: "TYPE.DESIGN",
      description: "Custom typography",
    },
    {
      id: 9,
      category: "MOBILE APP",
      title: "GESTURE.UI",
      description: "Interaction design",
    },
  ];

  const categories = [
    "ALL",
    "WEB DESIGN",
    "MOBILE APP",
    "BRANDING",
    "ILLUSTRATION",
    "PHOTOGRAPHY",
  ];
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems =
    activeCategory === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 px-4 bg-retro-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : ""}`}>
          <h2 className="retro-title text-retro-black mb-4">GALLERY.IMG</h2>
          <div className="w-24 h-1 bg-retro-accent mx-auto mb-8"></div>
          <p className="retro-body text-retro-dark max-w-3xl mx-auto text-lg">
            A curated collection of design work, experiments, and creative
            explorations spanning web design, mobile apps, and visual identity.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 ${
            isVisible ? "fade-in" : ""
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`font-retro text-xs tracking-wider px-4 py-2 ${
                activeCategory === category
                  ? "bg-retro-black text-retro-white"
                  : "border-retro-medium text-retro-dark hover:bg-retro-black hover:text-retro-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer retro-hover ${
                isVisible ? "fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-square bg-retro-light border-2 border-retro-medium group-hover:border-retro-black transition-all duration-300 overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-retro-medium/30 to-retro-dark/30" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-retro-black text-retro-white text-xs font-retro">
                    {item.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-retro-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-retro-white">
                    <h3 className="font-retro font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-retro-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-transparent hover:bg-retro-white/20 text-retro-white p-2"
              >
                <X size={24} />
              </Button>

              <div className="bg-retro-white border-4 border-retro-dark p-8">
                {(() => {
                  const item = galleryItems.find((i) => i.id === selectedImage);
                  return item ? (
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-retro-accent text-retro-white text-xs font-retro mb-4">
                        {item.category}
                      </span>
                      <h3 className="font-retro font-bold text-2xl text-retro-black mb-2">
                        {item.title}
                      </h3>
                      <p className="retro-body text-retro-dark mb-6">
                        {item.description}
                      </p>
                      <div className="aspect-video bg-retro-light border-2 border-retro-medium">
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-retro text-retro-medium">
                            FULL SIZE IMAGE
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
