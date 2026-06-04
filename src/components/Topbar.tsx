import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Topbar = () => {
  return (
    <motion.header
      className="bg-[#05303f] text-white/60 text-xs py-2 px-[5vw] flex justify-between items-center"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
    >
      <div className="flex items-center gap-4 flex-wrap">
        <a
          href="tel:+254722668855"
          className="flex items-center gap-1.5 hover:text-[#3ab5d4] transition-colors duration-200"
        >
          <Phone size={12} className="text-[#3ab5d4]" />
          <span>0722 668 855</span>
        </a>
        <span className="hidden sm:inline opacity-30">|</span>
        <a
          href="mailto:sahihipools@gmail.com"
          className="flex items-center gap-1.5 hover:text-[#3ab5d4] transition-colors duration-200"
        >
          <Mail size={12} className="text-[#3ab5d4]" />
          <span>sahihipools@gmail.com</span>
        </a>
      </div>
      <div className="hidden md:block text-xs tracking-wide">
        Kenya&apos;s Trusted Swimming Pool Engineers
      </div>
    </motion.header>
  );
};

export default Topbar;
