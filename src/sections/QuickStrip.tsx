import { motion } from 'framer-motion';
import { Waves, Wrench, PenTool, Phone } from 'lucide-react';

const items = [
  { icon: Waves, title: 'New Pool Construction', subtitle: 'Domestic & Commercial' },
  { icon: Wrench, title: 'Pool Maintenance', subtitle: 'Repairs & Servicing' },
  { icon: PenTool, title: 'Custom Design', subtitle: 'Tailored to Your Vision' },
  { icon: Phone, title: 'Free Consultation', subtitle: 'Call 0722 668 855' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const QuickStrip = () => {
  return (
    <motion.div
      className="bg-[#0a4f6e] grid grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            className="py-7 px-6 text-center border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors duration-300"
            variants={itemVariants}
          >
            <Icon className="mx-auto mb-2 text-[#3ab5d4]" size={28} />
            <h4 className="font-display text-lg text-white font-semibold mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-white/50 tracking-wide">{item.subtitle}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default QuickStrip;
