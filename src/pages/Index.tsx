import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Home, Car, WashingMachine, PawPrint, MapPin, ShoppingBag, TreePine, Bus, Plane, Trophy } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GoldDivider from "@/components/GoldDivider";
import exteriorImg from "@/assets/exterior_1.jpg";
import brochure1 from "@/assets/brochure_1.jpg";
import brochure2 from "@/assets/brochure_2.jpg";
import brochure5 from "@/assets/brochure_5.jpg";
import brochure13 from "@/assets/brochure_13.jpg";
import logo from "/nea-maya-logo.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${exteriorImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10" />
        {/* Focused radial vignette centred on the headline */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(14,11,9,0.62) 0%, transparent 80%)' }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <img src={logo} alt="Nea Maya Logo" className="h-16 md:h-20 w-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-eyebrow mb-4 hero-sub-shadow"
          >
            PRESENTS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-light-on-dark tracking-wide hero-title-shadow"
          >
            THE GRAND STONE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-light-on-dark/70 mt-3 hero-sub-shadow"
          >
            LUXURY APARTMENTS · NILES, ILLINOIS
          </motion.p>

          {/* Gold animated line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-px bg-gold mt-8 mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/layouts" className="btn-gold rounded-sm">
              Explore Units
            </Link>
            <Link to="/contact" className="btn-ghost rounded-sm">
              Take a Tour
            </Link>
          </motion.div>

          {/* Bounce arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 animate-bounce-down"
          >
            <ChevronDown className="text-gold" size={28} />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: "12", label: "Distinct Floor Plans" },
              { number: "1,267–1,522", label: "Square Feet" },
              { number: "2", label: "Bedrooms in Every Unit" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <p className="font-serif text-5xl md:text-6xl font-light text-gold mb-2">
                  {stat.number}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* The Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="overflow-hidden">
                <img
                  src={brochure2}
                  alt="Luxurious living room at The Grand Stone"
                  className="w-full h-[400px] lg:h-[550px] object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-eyebrow mb-4">WELCOME HOME</p>
              <h2 className="section-heading mb-6">
                Where Luxury Meets Community
              </h2>
              <p className="font-body text-body/80 leading-relaxed mb-8">
                The Grand Stone is a landmark residential development by Nea Maya Real Estate and Development LLC — a name synonymous with quality, vision, and community. Nestled in the heart of Niles, Illinois, just 15 miles northwest of downtown Chicago, The Grand Stone offers 12 meticulously designed two-bedroom residences where elevated finishes meet generous living spaces. This is not just an apartment — it is a statement.
              </p>
              <Link
                to="/about"
                className="font-sans text-sm uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2"
              >
                Discover Our Story →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Features Strip */}
      <section className="bg-charcoal py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Home size={28} />, title: "Quartz Countertops", desc: "Chef-ready kitchens with GE appliances" },
              { icon: <Car size={28} />, title: "Heated Garage Parking", desc: "Say goodbye to scraping ice forever" },
              { icon: <WashingMachine size={28} />, title: "In-Unit Laundry", desc: "Private utility/laundry room in every home" },
              { icon: <PawPrint size={28} />, title: "Pet Friendly", desc: "Pets up to 25 lbs warmly welcomed" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-gold mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="font-serif text-xl text-light-on-dark mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-light-on-dark/60">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[brochure1, brochure5, brochure13].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="overflow-hidden group">
                  <img
                    src={img}
                    alt="The Grand Stone interior"
                    className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-ghost-gold rounded-sm">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Location Teaser */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="section-eyebrow mb-4">LOCATION</p>
            <h2 className="section-heading mb-12">
              The Best of Niles, At Your Doorstep
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <MapPin size={20} />, text: "15 miles to downtown Chicago" },
              { icon: <ShoppingBag size={20} />, text: "Golf Mill Shopping Center nearby" },
              { icon: <TreePine size={20} />, text: "Forest preserves & parks" },
              { icon: <Bus size={20} />, text: "Niles Free Bus service" },
              { icon: <Plane size={20} />, text: "Minutes from O'Hare Airport" },
              { icon: <Trophy size={20} />, text: "\"Best Place to Raise Kids\" — Bloomberg" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-gold">{item.icon}</span>
                  <span className="font-body text-sm text-body/80">{item.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <Link
              to="/niles"
              className="font-sans text-sm uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2 mt-12"
            >
              Learn About Niles →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
