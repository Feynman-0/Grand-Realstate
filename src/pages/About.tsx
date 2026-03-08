import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GoldDivider from "@/components/GoldDivider";
import brochure2 from "@/assets/brochure_2.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const neighborhoodItems = [
  {
    title: "Award-Winning Family Environment",
    content: "Niles has a long-standing reputation as a premier destination for families. It was famously named the 'Best Place in the U.S. to Raise Kids' by Bloomberg Businessweek. The town is safe, clean, and filled with tree-lined streets and quiet neighborhoods.",
  },
  {
    title: "Exceptional Schools & Parks",
    content: "Niles is served by highly-rated districts, including Park Ridge-Niles School District 64 and Maine Township High School District 207. The Niles Park District features the Oasis Fun Center, Pioneer Park, and access to forest preserves like Bunker Hill and Miami Woods.",
  },
  {
    title: "Unbeatable Shopping & Dining",
    content: "Home to Golf Mill Shopping Center and minutes from luxury shopping at Old Orchard. The culinary scene spans the legendary Omega Restaurant & Bakery to international options like Super H Mart and Siam's House.",
  },
  {
    title: "Ultimate Convenience & Transport",
    content: "The Niles Free Bus provides complimentary local transit. Quick access to I-90 and I-94, short drive from O'Hare International Airport and several Metra stations.",
  },
  {
    title: "Iconic Culture & Community",
    content: "Home to the Leaning Tower of Niles — a half-size replica of the Leaning Tower of Pisa. Annual community events include the July 4th Parade, the Niles Summer Festival, and cultural celebrations at the Niles-Maine District Library.",
  },
];

const About = () => {
  return (
    <>
      <PageHero eyebrow="OUR STORY" title="About The Grand Stone" />

      {/* Developer Vision */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow mb-4">THE DEVELOPER</p>
              <h2 className="section-heading mb-6">
                Nea Maya Real Estate & Development
              </h2>
              <p className="font-body text-body/80 leading-relaxed">
                Nea Maya Real Estate and Development LLC is a Chicago-area developer committed to building residential spaces that combine modern design philosophy with lasting quality. The Grand Stone at 9201 N. Milwaukee Ave represents their vision: a building where architecture, comfort, and community converge to create something truly extraordinary. Every decision — from the heated underground parking to the marble lobby finishes — was made with the resident's daily experience in mind.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-3 border border-gold/30">
                <img
                  src={brochure2}
                  alt="The Grand Stone living room"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Welcome to Niles */}
      <section className="py-20 md:py-28 bg-warm-gray/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow mb-4">YOUR NEIGHBORHOOD</p>
            <h2 className="section-heading mb-6">Welcome to Niles, Illinois</h2>
            <p className="font-body text-body/80 leading-relaxed">
              Located just 15 miles northwest of downtown Chicago, Niles, Illinois, is a vibrant, family-oriented suburb that perfectly balances small-town charm with big-city accessibility. Consistently recognized as one of the best places to live in Illinois, it's a community designed for convenience, safety, and a high quality of life.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="space-y-3">
              {neighborhoodItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-l-2 border-l-gold border rounded-sm bg-background px-6"
                >
                  <AccordionTrigger className="font-serif text-lg text-charcoal hover:text-gold transition-colors hover:no-underline py-5">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-body/80 leading-relaxed pb-5">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* Premium Finishes */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <p className="section-eyebrow mb-4">PREMIUM QUALITY</p>
            <h2 className="section-heading-light">Finishes & Features</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <h3 className="font-serif text-2xl text-light-on-dark mb-6">Interior Finishes</h3>
              <ul className="space-y-3">
                {[
                  "High-grade laminate flooring — sleek, contemporary, durable",
                  "Quartz countertops in every kitchen",
                  "Full GE appliance suite (refrigerator + dishwasher included)",
                  "Massive walk-in closets with custom shelving",
                  "In-unit private laundry room",
                ].map((item, i) => (
                  <li key={i} className="font-body text-sm text-light-on-dark/70 flex items-start gap-3">
                    <span className="text-gold mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h3 className="font-serif text-2xl text-light-on-dark mb-6">Building Features</h3>
              <ul className="space-y-3">
                {[
                  "Secured motion-sensor entry system",
                  "Two high-speed elevators",
                  "Indoor heated parking garage",
                  "Pet-friendly (up to 25 lbs)",
                  "Exclusive turf area by reservation",
                  "Water & scavenger services included in rent",
                ].map((item, i) => (
                  <li key={i} className="font-body text-sm text-light-on-dark/70 flex items-start gap-3">
                    <span className="text-gold mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-warm-gray/50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="section-eyebrow mb-4">INCLUDED IN RENT</p>
            <h2 className="section-heading mb-12">What's Covered</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: "✅", text: "Water & Scavenger Services Included" },
              { icon: "✅", text: "Professional Building Maintenance Included" },
              { icon: "ℹ️", text: "Tenants responsible for: Gas, Electric, Wi-Fi, Renter's Insurance" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background p-8 rounded-sm border border-border">
                  <p className="text-2xl mb-3">{item.icon}</p>
                  <p className="font-body text-sm text-body/80">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
