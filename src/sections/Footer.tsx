import { motion } from 'framer-motion';

const Footer = () => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05303f]">
      {/* Top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 px-[5vw] py-16 max-w-7xl mx-auto">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-2xl font-bold text-white tracking-wide inline-block mb-4"
          >
            Sahihi<span className="text-[#3ab5d4]">Pools</span>
          </a>
          <p className="text-sm text-white/45 leading-relaxed max-w-[260px]">
            Kenya&apos;s trusted swimming pool engineers. Building dream pools for homes, hotels,
            schools, and resorts across the country.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-xs uppercase tracking-[2px] text-white/40 mb-5 font-semibold">
            Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Pool Models', href: '#models' },
              { label: 'Request a Quote', href: '#contact' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-white/55 hover:text-[#3ab5d4] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-xs uppercase tracking-[2px] text-white/40 mb-5 font-semibold">
            Services
          </h4>
          <ul className="space-y-3">
            {['Domestic Pools', 'Commercial Pools', 'Repairs', 'Maintenance'].map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#services');
                  }}
                  className="text-sm text-white/55 hover:text-[#3ab5d4] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xs uppercase tracking-[2px] text-white/40 mb-5 font-semibold">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+254722668855"
                className="text-sm text-white/55 hover:text-[#3ab5d4] transition-colors duration-200"
              >
                0722 668 855
              </a>
            </li>
            <li>
              <a
                href="tel:+254722285420"
                className="text-sm text-white/55 hover:text-[#3ab5d4] transition-colors duration-200"
              >
                0722 285 420
              </a>
            </li>
            <li>
              <a
                href="mailto:sahihipools@gmail.com"
                className="text-sm text-white/55 hover:text-[#3ab5d4] transition-colors duration-200"
              >
                sahihipools@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.07] px-[5vw] py-5 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-7xl mx-auto">
        <p className="text-xs text-white/30">
          © 2026 <span className="text-[#3ab5d4]">Sahihi Pools</span>. All Rights Reserved.
        </p>
        <p className="text-xs text-white/30">
          Engineered with pride in <span className="text-[#3ab5d4]">Kenya</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
