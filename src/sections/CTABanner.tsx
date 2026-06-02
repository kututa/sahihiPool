import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CTABanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#05303f] to-[#1a6e8e]"
        style={{ y: bgY }}
      />
      <motion.div
        className="relative z-10 py-20 px-[5vw] flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] text-white font-bold max-w-xl leading-tight text-center lg:text-left">
          Ready to Build Your <em className="text-[#3ab5d4] not-italic">Dream Pool?</em>
          <br />
          We&apos;re Ready to Serve You.
        </h2>
        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
          className="bg-[#c59a3c] text-white px-10 py-4 rounded-sm text-base font-semibold tracking-wide hover:opacity-85 transition-opacity duration-200 whitespace-nowrap"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Request a Quote Today
        </motion.a>
      </motion.div>
    </div>
  );
};

export default CTABanner;
