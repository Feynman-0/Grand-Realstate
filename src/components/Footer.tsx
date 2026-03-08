import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-light-on-dark">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide mb-2">
              THE GRAND STONE
            </h3>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-6">
              Luxury Apartments by Nea Maya
            </p>
            <p className="font-body text-sm text-light-on-dark/60 leading-relaxed">
              12 meticulously designed residences where elevated finishes meet generous living spaces.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-6">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Floor Plans", path: "/layouts" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-light-on-dark/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm text-light-on-dark/70">
              <p>9201 N. Milwaukee Ave, Niles, IL</p>
              <a href="tel:847-987-9600" className="hover:text-gold transition-colors">
                847-987-9600
              </a>
              <a href="mailto:Aida@neamaya.com" className="hover:text-gold transition-colors">
                Aida@neamaya.com
              </a>
            </div>
          </div>
        </div>

        <div className="gold-hr mt-12 mb-8" />

        <p className="text-center font-body text-xs text-light-on-dark/40">
          © 2025 Nea Maya Real Estate & Development LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
