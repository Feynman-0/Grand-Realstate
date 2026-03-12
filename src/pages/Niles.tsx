import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GoldDivider from "@/components/GoldDivider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import exterior1 from "@/assets/exterior_1.jpg";

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

const Niles = () => {
  return (
    <>
      <PageHero eyebrow="LOCATION" title="Discover Niles, Illinois" />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow mb-4">YOUR NEIGHBORHOOD</p>
              <h2 className="section-heading mb-6">
                Where Community Meets Convenience
              </h2>
              <p className="font-body text-body/80 leading-relaxed">
                Located just 15 miles northwest of downtown Chicago, Niles, Illinois, is a vibrant, family-oriented suburb that perfectly balances small-town charm with big-city accessibility. Consistently recognized as one of the best places to live in Illinois, it's a community designed for convenience, safety, and a high quality of life.
              </p>
              <p className="font-body text-body/80 leading-relaxed mt-4">
                Whether you're commuting to the city or enjoying the local forest preserves, Niles offers a perfect balance for professionals and families alike. The Grand Stone is proud to be part of this thriving community.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-3 border border-gold/30">
                <img
                  src={exterior1}
                  alt="The Grand Stone Exterior"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Details */}
      <section className="py-20 md:py-28 bg-warm-gray/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading mb-6">Why We Love Niles</h2>
            <p className="font-body text-body/80 leading-relaxed">
              Explore what makes this town the perfect place for your next home. From award-winning parks to world-class shopping, everything you need is right here.
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

      {/* Quick Points */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatedSection>
              <h3 className="section-heading-light text-2xl mb-4">Commuter's Paradise</h3>
              <p className="text-light-on-dark/70 text-sm leading-relaxed">
                Niles offers unparalleled access to Chicago and the surrounding suburbs. With proximity to I-90 and I-94, and minutes from O'Hare International Airport, your travel is always effortless.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="section-heading-light text-2xl mb-4">Green Spaces</h3>
              <p className="text-light-on-dark/70 text-sm leading-relaxed">
                Enjoy the beauty of the Cook County Forest Preserves, including Miami Woods and Bunker Hill, providing miles of trails for biking, hiking, and exploring nature.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="section-heading-light text-2xl mb-4">Shopping Hub</h3>
              <p className="text-light-on-dark/70 text-sm leading-relaxed">
                From the Golf Mill Shopping Center to the nearby Old Orchard Mall, you'll have access to premier retail and dining experiences just minutes away.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Niles;
