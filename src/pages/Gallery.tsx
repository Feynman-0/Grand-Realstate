import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { X } from "lucide-react";

import brochure1 from "@/assets/brochure_1.jpg";
import brochure2 from "@/assets/brochure_2.jpg";
import brochure5 from "@/assets/brochure_5.jpg";
import brochure6 from "@/assets/brochure_6.jpg";
import brochure8 from "@/assets/brochure_8.jpg";
import brochure12 from "@/assets/brochure_12.jpg";
import brochure13 from "@/assets/brochure_13.jpg";
import brochure14 from "@/assets/brochure_14.jpg";
import exterior1 from "@/assets/exterior_1.jpg";

type Tab = "interiors" | "building" | "exterior";

const interiorImages = [
  { src: brochure1, alt: "Dining and living area" },
  { src: brochure2, alt: "Living room" },
  { src: brochure5, alt: "Master bedroom" },
  { src: brochure6, alt: "Second bedroom" },
  { src: brochure8, alt: "Laundry room" },
];

const buildingImages = [
  { src: brochure13, alt: "Grand Lobby — Marble Floors & Sputnik Chandelier", caption: "Grand Lobby — Marble Floors & Sputnik Chandelier" },
  { src: brochure14, alt: "Secure Entry & Mailroom", caption: "Secure Entry & Mailroom" },
  { src: brochure12, alt: "Indoor Turf Activity Area", caption: "Indoor Turf Activity Area" },
];

const exteriorImages = [
  { src: exterior1, alt: "9201 N. Milwaukee Avenue, Niles, IL", caption: "9201 N. Milwaukee Avenue, Niles, IL — A landmark of modern brick architecture." },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<Tab>("interiors");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tabs: { key: Tab; label: string }[] = [
    { key: "interiors", label: "Interiors" },
    { key: "building", label: "Building & Amenities" },
    { key: "exterior", label: "Exterior" },
  ];

  const currentImages =
    activeTab === "interiors"
      ? interiorImages
      : activeTab === "building"
        ? buildingImages
        : exteriorImages;

  return (
    <>
      <PageHero eyebrow="GALLERY" title="A Closer Look" />

      {/* Tabs */}
      <section className="bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-8 justify-center py-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-sans text-xs uppercase tracking-[0.2em] pb-2 border-b-2 transition-all duration-300 ${
                  activeTab === tab.key
                    ? "text-gold border-gold"
                    : "text-muted-foreground border-transparent hover:text-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {currentImages.map((img, i) => (
              <AnimatedSection key={`${activeTab}-${i}`} delay={i * 0.1}>
                <div
                  className="group relative overflow-hidden cursor-pointer break-inside-avoid"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-xs uppercase tracking-[0.2em]">
                      View
                    </span>
                  </div>
                  {"caption" in img && (img as { caption?: string }).caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-body text-xs text-light-on-dark">
                        {(img as { caption: string }).caption}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <AnimatedSection>
            <p className="font-serif text-2xl md:text-3xl italic text-light-on-dark/90 leading-relaxed mb-6">
              "These homes are designed for modern comfort and effortless living — a perfect blend of open communal areas and private retreats."
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
              — Nea Maya Real Estate & Development LLC
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-light-on-dark hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
