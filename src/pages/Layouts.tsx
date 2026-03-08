import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GoldDivider from "@/components/GoldDivider";
import { units } from "@/data/units";
import floorplanImg from "@/assets/floorplan.jpg";
import { Home, Sun, Shirt, WashingMachine, UtensilsCrossed, Gem, BedDouble, LayoutGrid } from "lucide-react";

type Filter = "all" | "under3000" | "3000-3200" | "3200plus" | "largest" | "smallest";

const Layouts = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredUnits = useMemo(() => {
    let result = [...units];
    switch (filter) {
      case "under3000":
        result = result.filter((u) => u.price < 3000);
        break;
      case "3000-3200":
        result = result.filter((u) => u.price >= 3000 && u.price <= 3200);
        break;
      case "3200plus":
        result = result.filter((u) => u.price > 3200);
        break;
      case "largest":
        result.sort((a, b) => b.sqft - a.sqft);
        break;
      case "smallest":
        result.sort((a, b) => a.sqft - b.sqft);
        break;
    }
    return result;
  }, [filter]);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All Units" },
    { key: "under3000", label: "Under $3,000" },
    { key: "3000-3200", label: "$3,000–$3,200" },
    { key: "3200plus", label: "$3,200+" },
    { key: "largest", label: "Largest First" },
    { key: "smallest", label: "Smallest First" },
  ];

  return (
    <>
      <PageHero
        eyebrow="FLOOR PLANS"
        title="Find Your Perfect Home"
        subtitle="All residences feature 2 bedrooms, 2 bathrooms, a private balcony, and in-unit laundry."
      />

      {/* Filter Bar */}
      <section className="bg-background py-8 border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`font-sans text-xs uppercase tracking-[0.15em] px-5 py-2 rounded-sm border transition-all duration-300 ${
                  filter === f.key
                    ? "bg-gold text-charcoal border-gold"
                    : "bg-transparent text-body/70 border-border hover:border-gold hover:text-gold"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUnits.map((unit, i) => (
              <AnimatedSection key={unit.id} delay={i * 0.05}>
                <div className="group bg-card border border-border rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-gold/40 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={floorplanImg}
                      alt={`Floor plan for ${unit.name}`}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-gold text-charcoal font-sans text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1">
                      {unit.name}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="font-serif text-lg text-charcoal">
                        {unit.sqft.toLocaleString()} sq.ft.
                      </span>
                      <span className="font-serif text-xl text-gold font-semibold">
                        ${unit.price.toLocaleString()}/mo
                      </span>
                    </div>
                    <div className="gold-hr !w-full !mx-0 mb-3 opacity-30" />
                    <p className="font-body text-xs text-muted-foreground mb-4">
                      2 Bed · 2 Bath · Balcony · In-Unit Laundry
                      {unit.walkInClosets > 1 ? ` · ${unit.walkInClosets} Walk-in Closets` : " · Walk-in Closet"}
                    </p>
                    <button className="btn-ghost-gold w-full text-xs py-2 rounded-sm">
                      View Floor Plan
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Unit Features */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-heading-light">Every Unit Includes</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <LayoutGrid size={24} />, label: "Open-concept Living & Dining" },
              { icon: <Sun size={24} />, label: "Private Balcony" },
              { icon: <Shirt size={24} />, label: "Walk-in Closet(s)" },
              { icon: <WashingMachine size={24} />, label: "In-Unit Laundry Room" },
              { icon: <UtensilsCrossed size={24} />, label: "GE Appliances + Dishwasher" },
              { icon: <Gem size={24} />, label: "Quartz Countertops" },
              { icon: <BedDouble size={24} />, label: "King-size Ready Bedrooms" },
              { icon: <Home size={24} />, label: "Flexible Layout Options" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="text-center">
                  <div className="text-gold mb-3 flex justify-center">{item.icon}</div>
                  <p className="font-body text-xs md:text-sm text-light-on-dark/80">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gold py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            Ready to See Your Future Home?
          </h2>
          <p className="font-body text-sm text-charcoal/70 mb-8">
            Schedule a private tour with our Managing Broker, Aida Joseph
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-3 bg-charcoal text-light-on-dark font-sans text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-charcoal/90 rounded-sm"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </>
  );
};

export default Layouts;
