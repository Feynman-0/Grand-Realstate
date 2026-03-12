import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GoldDivider from "@/components/GoldDivider";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { url: "/gallery/brochure 1.jpg", category: "Interior" },
  { url: "/gallery/brochure 2.jpg", category: "Interior" },
  { url: "/gallery/Brochure 4 .jpg", category: "Interior" },
  { url: "/gallery/Brochure 5 .jpg", category: "Interior" },
  { url: "/gallery/Brochure 6.jpg", category: "Interior" },
  { url: "/gallery/Brochure 7.jpg", category: "Interior" },
  { url: "/gallery/Brochure 8.jpg", category: "Interior" },
  { url: "/gallery/Brochure 9.jpg", category: "Exterior" },
  { url: "/gallery/Brochure 10.jpg", category: "Turf & Amenity" },
  { url: "/gallery/Brochure 12.jpg", category: "Turf & Amenity" },
  { url: "/gallery/Brochure 13.jpg", category: "Interior" },
  { url: "/gallery/Brochure 14.jpg", category: "Interior" },
  { url: "/gallery/Brochure 15.jpg", category: "Interior" },
  { url: "/gallery/Brochure 16.jpg", category: "Turf & Amenity" },
  { url: "/gallery/Brochure 17.jpg", category: "Turf & Amenity" },
  { url: "/gallery/Brochure 18.jpg", category: "Interior" },
  { url: "/gallery/Brochure 20.jpg", category: "Interior" },
  { url: "/gallery/exterior 1.jpg", category: "Exterior" },
  { url: "/rendered/The Grand Stone Final New Price-06.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-07.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-08.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-09.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-10.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-11.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-12.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-13.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-14.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-15.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-16.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-17.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-18.jpg", category: "Render" },
  { url: "/rendered/The Grand Stone Final New Price-19.jpg", category: "Render" },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const nextImg = () => {
    if (selectedImg !== null) {
      setSelectedImg((selectedImg + 1) % galleryImages.length);
    }
  };

  const prevImg = () => {
    if (selectedImg !== null) {
      setSelectedImg((selectedImg - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <PageHero eyebrow="GALLERY" title="Experience The Grand Stone" />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div 
                  className="group relative overflow-hidden bg-warm-gray/5 aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImg(i)}
                >
                  <img
                    src={img.url}
                    alt={`The Grand Stone ${img.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize2 className="text-white" size={32} />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gold text-charcoal font-sans text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1">
                      {img.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <div className="absolute top-6 right-6 z-[110] flex gap-4">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-4 md:left-8 z-[110] text-white/50 hover:text-white transition-colors p-2"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div
              key={selectedImg}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImg].url}
                alt="Enlarged gallery view"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <span className="text-white/60 font-sans text-xs uppercase tracking-[0.2em]">
                  {selectedImg + 1} / {galleryImages.length} — {galleryImages[selectedImg].category}
                </span>
              </div>
            </motion.div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-4 md:right-8 z-[110] text-white/50 hover:text-white transition-colors p-2"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-charcoal py-20 text-center">
        <h2 className="section-heading-light mb-6">Want to See It in Person?</h2>
        <a href="/contact" className="btn-gold rounded-sm px-10">
          Book a Private Tour
        </a>
      </section>
    </>
  );
};

export default Gallery;
