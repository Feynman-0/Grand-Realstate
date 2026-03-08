import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Layouts", path: "/layouts" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-charcoal shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start">
          <span className="font-serif text-xl md:text-2xl font-semibold text-light-on-dark tracking-wide">
            THE GRAND STONE
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
            by Nea Maya
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-light-on-dark/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:Aida@neamaya.com?subject=Application Inquiry — The Grand Stone"
            className="btn-gold text-xs py-2 px-6 rounded-sm"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href="mailto:Aida@neamaya.com?subject=Application Inquiry — The Grand Stone"
            className="btn-gold text-[10px] py-2 px-4 rounded-sm"
          >
            Apply Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-light-on-dark"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-sm uppercase tracking-[0.2em] ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-light-on-dark/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
