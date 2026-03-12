import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GoldDivider from "@/components/GoldDivider";
import { Phone, Mail, Building2, MapPin } from "lucide-react";
import { units } from "@/data/units";
import logo from "/nea-maya-logo.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const faqs = [
  {
    q: "What is included in rent?",
    a: "Water and scavenger services + professional building maintenance. Tenants pay gas, electric, Wi-Fi, and renter's insurance.",
  },
  {
    q: "Are pets allowed?",
    a: "Yes! Pets up to 25 lbs are warmly welcomed.",
  },
  {
    q: "Is parking available?",
    a: "Yes — we offer an indoor heated parking garage, keeping your vehicle protected year-round.",
  },
  {
    q: "How do I schedule a tour?",
    a: "Contact our Managing Broker Aida Joseph directly at 847-987-9600 or Aida@neamaya.com.",
  },
  {
    q: "What appliances are included?",
    a: "Every kitchen is equipped with a GE refrigerator and dishwasher, plus quartz countertops throughout.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    unit: "",
    message: "",
  });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const unitId = searchParams.get("unit");
    if (unitId) {
      const selectedUnit = units.find(u => u.id === unitId);
      if (selectedUnit) {
        setForm(prev => ({ ...prev, unit: selectedUnit.name }));
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto
    const subject = encodeURIComponent(`Inquiry — The Grand Stone ${form.unit ? `(${form.unit})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nUnit of Interest: ${form.unit || "Not specified"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Aida@neamaya.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-24 md:py-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold))_1px,transparent_1px)] bg-[length:30px_30px]" />
        <div className="text-center px-6 relative z-10">
          <AnimatedSection>
            <div className="mb-8 flex justify-center">
              <img src={logo} alt="Nea Maya Logo" className="h-16 md:h-20 w-auto" />
            </div>
            <h1 className="section-heading-light mb-4 text-4xl md:text-5xl">
              Apply to The Grand Stone
            </h1>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold">
              Your future home awaits
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Details */}
            <AnimatedSection>
              <div className="bg-card border border-border p-8 md:p-10 rounded-sm">
                <h2 className="font-serif text-2xl text-charcoal mb-6">Get in Touch</h2>
                <p className="font-serif text-xl text-charcoal font-semibold">Aida Joseph</p>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Managing Broker — Nea Maya Real Estate & Development LLC
                </p>

                <div className="space-y-4 mb-8">
                  <a href="tel:847-987-9600" className="flex items-center gap-3 font-body text-sm text-body hover:text-gold transition-colors">
                    <Phone size={16} className="text-gold" /> 847-987-9600
                  </a>
                  <a href="mailto:Aida@neamaya.com" className="flex items-center gap-3 font-body text-sm text-body hover:text-gold transition-colors">
                    <Mail size={16} className="text-gold" /> Aida@neamaya.com
                  </a>
                  <p className="flex items-center gap-3 font-body text-sm text-body">
                    <Building2 size={16} className="text-gold" /> 8108 N. Lincoln Ave., Skokie, IL 60077
                  </p>
                  <p className="flex items-center gap-3 font-body text-sm text-body">
                    <MapPin size={16} className="text-gold" /> 9201 N. Milwaukee Ave., Niles, IL
                  </p>
                </div>

                <div className="gold-hr !w-full !mx-0 mb-6 opacity-30" />

                <p className="font-body text-sm text-body/80 mb-8">
                  Please use the form to the right to submit your application details. Once received, our team will reach out to schedule a tour and complete the next steps.
                </p>
                
                <div className="p-4 bg-warm-gray/30 border border-gold/20 rounded-sm">
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">Requirements</p>
                  <ul className="text-xs text-body/70 space-y-1">
                    <li>• Two Person Max per Unit</li>
                    <li>• 12 Month Lease Preferred</li>
                    <li>• Pet Friendly (under 25 lbs)</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={0.2}>
              <div id="apply" className="bg-card border border-border p-8 md:p-10 rounded-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-body rounded-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-body rounded-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-body rounded-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                      Unit of Interest
                    </label>
                    <select
                      value={form.unit}
                      onChange={(e) => setForm({ ...form, unit: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-body rounded-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">All Units</option>
                      {units.map((u) => (
                        <option key={u.id} value={u.name}>
                          {u.name} — {u.sqft.toLocaleString()} sq.ft. — ${u.price.toLocaleString()}/mo
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="I'm interested in scheduling a private tour or have a question about..."
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-body rounded-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full rounded-sm py-4 text-sm font-semibold tracking-[0.1em]">
                    SUBMIT APPLICATION
                  </button>
                  <p className="text-center font-body text-xs text-muted-foreground">
                    Or call us directly: <a href="tel:847-987-9600" className="text-gold hover:underline">847-987-9600</a>
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.6!2d-87.8!3d42.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcf0e0e0e0e0e%3A0x0!2s9201+N+Milwaukee+Ave%2C+Niles%2C+IL+60714!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Grand Stone location"
          className="grayscale contrast-125"
        />
      </section>

      <GoldDivider />

      {/* FAQ */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading-light">Frequently Asked Questions</h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-l-2 border-l-gold border border-light-on-dark/10 rounded-sm px-6"
              >
                <AccordionTrigger className="font-serif text-lg text-light-on-dark hover:text-gold transition-colors hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-light-on-dark/70 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Contact;
