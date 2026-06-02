import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Skeleton from '@/components/Skeleton';

interface Testimonial {
  text: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Sahihi Pools built us a beautiful domestic pool at our home in Nairobi. Robert was professional from start to finish, the quality of work was outstanding, and they delivered on time. We couldn't be happier!",
    author: 'James K.',
    location: 'Residential Client, Nairobi',
  },
  {
    text: "We contracted Sahihi Pools for our hotel's commercial pool. The entire process was smooth, transparent, and the final result exceeded our expectations. Our guests absolutely love it.",
    author: 'Grace M.',
    location: 'Hotel Manager, Mombasa',
  },
  {
    text: 'Robert took our vision and turned it into reality. The custom design he created for our property is stunning. The craftsmanship, the tiling, everything is world-class. Highly recommended!',
    author: 'David O.',
    location: 'Property Developer, Kisumu',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
  <motion.div
    className="bg-white p-9 rounded border border-[rgba(10,79,110,0.08)] relative"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(10,79,110,0.08)' }}
    transition={{ duration: 0.3 }}
  >
    <span className="absolute top-3 left-6 font-display text-[5rem] text-[#c8eef8] leading-none select-none">
      &ldquo;
    </span>
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-[#c59a3c] fill-[#c59a3c]" />
      ))}
    </div>
    <p className="text-sm text-[#4d7280] leading-relaxed mb-6 italic pt-6">{testimonial.text}</p>
    <div>
      <strong className="text-sm text-[#05303f] font-semibold block">{testimonial.author}</strong>
      <span className="text-xs text-[#4d7280]">{testimonial.location}</span>
    </div>
  </motion.div>
);

const TestimonialSkeleton = () => (
  <div className="bg-white p-9 rounded border border-[rgba(10,79,110,0.08)]">
    <Skeleton variant="text" width={80} height={16} className="mb-3" />
    <Skeleton variant="text" width="100%" height={14} className="mb-2" />
    <Skeleton variant="text" width="95%" height={14} className="mb-2" />
    <Skeleton variant="text" width="90%" height={14} className="mb-2" />
    <Skeleton variant="text" width="85%" height={14} className="mb-6" />
    <Skeleton variant="text" width="40%" height={16} className="mb-1" />
    <Skeleton variant="text" width="30%" height={12} />
  </div>
);

const Testimonials = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-[5vw] bg-[#f7f3ed]">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs tracking-[2.5px] uppercase text-[#3ab5d4] font-semibold">
          Client Stories
        </span>
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-[#05303f] leading-tight mt-2 mb-4">
          What People Say
        </h2>
        <div className="w-[50px] h-[3px] bg-[#c59a3c] mx-auto mb-4" />
        <p className="text-[#4d7280] text-base leading-relaxed max-w-xl mx-auto">
          Don&apos;t just take our word for it — here&apos;s what our clients say about working with
          Sahihi Pools.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <TestimonialSkeleton key={i} />)
          : testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} index={i} />)}
      </div>
    </section>
  );
};

export default Testimonials;
