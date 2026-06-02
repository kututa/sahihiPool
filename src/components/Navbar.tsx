import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pool Models', href: '#models' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contacts', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`sticky top-0 z-[200] flex items-center justify-between py-4 px-[5vw] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(10,79,110,0.07)] border-b border-[rgba(10,79,110,0.1)]'
          : 'bg-white border-b border-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <a
        href="#"
        className="font-display text-[1.7rem] font-bold text-[#05303f] tracking-wide no-underline"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Sahihi<span className="text-[#3ab5d4] not-italic">Pools</span>
      </a>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-sm font-medium text-[#162830] tracking-wide hover:text-[#3ab5d4] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3ab5d4] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('#contact');
        }}
        className="hidden lg:inline-block bg-[#0a4f6e] text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-[#3ab5d4] transition-colors duration-200"
      >
        Request a Quote
      </a>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden p-2 text-[#0a4f6e]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-[rgba(10,79,110,0.1)] lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="block text-base font-medium text-[#162830] hover:text-[#3ab5d4] transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="block text-center bg-[#0a4f6e] text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-[#3ab5d4] transition-colors"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
