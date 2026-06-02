import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Gem, Sparkles, Shapes, TreePine, Droplets, Palette, Hotel, GraduationCap } from 'lucide-react';

type TabId = 'rectangular' | 'lshape' | 'kidney' | 'custom';

interface PoolModel {
  icon: React.ElementType;
  title: string;
  depth: string;
  description: string;
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'rectangular', label: 'Rectangular' },
  { id: 'lshape', label: 'L-Shape' },
  { id: 'kidney', label: 'Kidney' },
  { id: 'custom', label: 'Custom' },
];

const models: Record<TabId, PoolModel[]> = {
  rectangular: [
    {
      icon: Waves,
      title: 'Classic Rectangle',
      depth: 'Depth: 1.2m – 2.1m',
      description:
        'The most popular shape — ideal for lap swimming, family use, and easy maintenance. Clean lines, timeless design.',
    },
    {
      icon: Gem,
      title: 'Olympic Style',
      depth: 'Depth: 1.5m – 2.5m',
      description:
        'Longer rectangular pools perfect for fitness training and competitive swimming. Great for hotels and fitness centres.',
    },
    {
      icon: Sparkles,
      title: 'Infinity Edge',
      depth: 'Depth: 1.2m – 2.0m',
      description:
        'A stunning visual effect where water flows over one edge. Perfect for hilltop properties and luxury residences.',
    },
  ],
  lshape: [
    {
      icon: Shapes,
      title: 'Classic L-Shape',
      depth: 'Depth: 1.2m – 2.0m',
      description:
        'Two zones in one pool — a shallow area for children and a deeper section for adults. Perfect for family homes.',
    },
    {
      icon: Waves,
      title: 'L-Shape with Spa',
      depth: 'Depth: 1.0m – 1.8m',
      description:
        'Combines a swimming pool with an attached jacuzzi/spa area. The ultimate home luxury experience.',
    },
    {
      icon: Hotel,
      title: 'Corner L-Shape',
      depth: 'Depth: 1.2m – 2.2m',
      description:
        'Designed to fit perfectly into a corner of your property — maximising space while providing a generous swim area.',
    },
  ],
  kidney: [
    {
      icon: Shapes,
      title: 'Classic Kidney',
      depth: 'Depth: 1.0m – 2.0m',
      description:
        'A naturally flowing curved shape that blends beautifully with landscaping. Popular for luxury homes and resorts.',
    },
    {
      icon: TreePine,
      title: 'Freeform Kidney',
      depth: 'Depth: 0.9m – 1.8m',
      description:
        'Organic curves that mimic a natural lagoon. Ideal for tropical garden settings and resort-style properties.',
    },
    {
      icon: Droplets,
      title: 'Kidney + Water Feature',
      depth: 'Depth: 1.0m – 2.0m',
      description:
        'Classic kidney shape enhanced with waterfalls, fountains, or grottos. A true statement piece for any property.',
    },
  ],
  custom: [
    {
      icon: Palette,
      title: 'Fully Custom Design',
      depth: 'Any depth to your spec',
      description:
        'No standard mould — we work with your architect or directly with you to create a completely one-of-a-kind pool.',
    },
    {
      icon: Hotel,
      title: 'Resort / Hotel Pool',
      depth: 'Depth: 1.2m – 3.0m',
      description:
        'Large-scale commercial pools with full filtration, lighting, tiling and water feature systems. Built to international codes.',
    },
    {
      icon: GraduationCap,
      title: 'School / Sports Pool',
      depth: 'Depth: 0.9m – 2.5m',
      description:
        'Safe, durable pools designed for educational institutions and sports clubs with lane markings and safety features.',
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const PoolModels = () => {
  const [activeTab, setActiveTab] = useState<TabId>('rectangular');

  return (
    <section id="models" className="py-24 px-[5vw] bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[2.5px] uppercase text-[#3ab5d4] font-semibold">
            Designs We Build
          </span>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-[#05303f] leading-tight mt-2 mb-4">
            Pool Models
          </h2>
          <div className="w-[50px] h-[3px] bg-[#c59a3c]" />
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-[rgba(10,79,110,0.1)] mb-10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-body text-sm font-medium whitespace-nowrap border-b-[3px] -mb-[2px] transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-[#0a4f6e] border-[#3ab5d4]'
                  : 'text-[#4d7280] border-transparent hover:text-[#0a4f6e]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {models[activeTab].map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.title}
                  className="border border-[rgba(10,79,110,0.1)] rounded overflow-hidden hover:shadow-[0_8px_24px_rgba(10,79,110,0.1)] transition-shadow duration-300"
                  custom={i}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="h-[200px] bg-gradient-to-br from-[#c8eef8] to-[#3ab5d4] flex items-center justify-center">
                    <Icon size={48} className="text-white/80" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-xl text-[#05303f] font-bold mb-1">
                      {model.title}
                    </h4>
                    <p className="text-xs text-[#4d7280] mb-3 tracking-wide">{model.depth}</p>
                    <p className="text-sm text-[#4d7280] leading-relaxed">{model.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PoolModels;
