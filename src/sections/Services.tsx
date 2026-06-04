import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Skeleton from '@/components/Skeleton';

interface Service {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const services: Service[] = [
  {
    image: '/images/svc1.jpg',
    title: 'Domestic Pool Construction',
    description:
      'Custom-built residential pools designed for your home. We work with your space, style, and budget to create the perfect private pool. Starting from KES 4 Million.',
    link: '#contact',
    linkText: 'Get a Quote',
  },
  {
    image: '/images/svc2.jpg',
    title: 'Commercial Pool Construction',
    description:
      'Large-scale aquatic facilities for hotels, resorts, schools, and recreation centres. Built to international safety and quality standards. Starting from KES 7 Million.',
    link: '#contact',
    linkText: 'Get a Quote',
  },
  {
    image: '/images/svc3.jpg',
    title: 'Repair & Maintenance',
    description:
      'Keep your pool in perfect condition year-round. We offer professional repair, cleaning, chemical balancing, and equipment servicing for all pool types.',
    link: '#contact',
    linkText: 'Learn More',
  },
];

// Single service card with mouse parallax tilt
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-4, 4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded overflow-hidden border border-[rgba(10,79,110,0.08)] cursor-pointer group"
      style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(10,79,110,0.12)' }}
    >
      <div className="h-[200px] overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          width={1200}
          height={800}
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[rgba(5,48,63,0.3)] group-hover:bg-[rgba(5,48,63,0.15)] transition-colors duration-300" />
      </div>
      <div className="p-7">
        <h3 className="font-display text-[1.35rem] text-[#05303f] mb-2.5 font-bold">
          {service.title}
        </h3>
        <p className="text-sm text-[#4d7280] leading-relaxed mb-4">{service.description}</p>
        <a
          href={service.link}
          onClick={(e) => {
            e.preventDefault();
            handleClick(service.link);
          }}
          className="text-xs text-[#3ab5d4] font-semibold tracking-wider inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
        >
          {service.linkText}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </motion.div>
  );
};

// Skeleton loader for service cards
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded overflow-hidden border border-[rgba(10,79,110,0.08)]">
    <Skeleton variant="rectangular" height={200} />
    <div className="p-7 space-y-3">
      <Skeleton variant="text" width="70%" height={24} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="90%" height={16} />
      <Skeleton variant="text" width="40%" height={14} />
    </div>
  </div>
);

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="py-24 px-[5vw] bg-[#f4f8fa]">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs tracking-[2.5px] uppercase text-[#3ab5d4] font-semibold">
          What We Offer
        </span>
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-[#05303f] leading-tight mt-2 mb-4">
          Our Services
        </h2>
        <div className="w-[50px] h-[3px] bg-[#c59a3c] mx-auto mb-4" />
        <p className="text-[#4d7280] text-base leading-relaxed max-w-xl mx-auto">
          From new construction to ongoing maintenance, Sahihi Pools covers every aspect of your
          swimming pool needs.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <ServiceCardSkeleton key={i} />)
          : services.map((service, i) => <ServiceCard key={i} service={service} index={i} />)}
      </div>
    </section>
  );
};

export default Services;
