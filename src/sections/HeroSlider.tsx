import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  tag: string;
  title: string;
  titleAccent: string;
  description: string;
  primaryBtn: string;
  primaryHref: string;
  secondaryBtn: string;
  secondaryHref: string;
  image: string;
}

const slides: Slide[] = [
  {
    tag: "Kenya's Pool Experts",
    title: 'Build Your ',
    titleAccent: 'Dream',
    description:
      'From intimate home pools to grand commercial aquatic centres — we engineer pools that inspire and endure.',
    primaryBtn: 'Discover Our Services',
    primaryHref: '#services',
    secondaryBtn: 'Get a Free Quote',
    secondaryHref: '#contact',
    image: '/images/hero1.jpg',
  },
  {
    tag: 'Domestic Pools',
    title: 'Your Private\n',
    titleAccent: 'Oasis',
    description:
      'Beautifully crafted residential pools starting from KES 4 Million. Designed around your lifestyle and space.',
    primaryBtn: 'View Pool Models',
    primaryHref: '#models',
    secondaryBtn: 'Talk to Engineer',
    secondaryHref: '#contact',
    image: '/images/hero2.jpg',
  },
  {
    tag: 'Commercial Pools',
    title: 'World-Class\n',
    titleAccent: 'Commercial',
    description:
      'Hotels, resorts, schools & recreational centres. Commercial aquatic facilities built to international standards.',
    primaryBtn: 'Our Services',
    primaryHref: '#services',
    secondaryBtn: 'Start Your Project',
    secondaryHref: '#contact',
    image: '/images/hero3.jpg',
  },
];

const slideVariants = {
  enter: { opacity: 0, scale: 1.1 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

const contentVariants = {
  enter: { opacity: 0, y: 40 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle parallax for hero content
  const springConfig = { stiffness: 100, damping: 30 };
  const contentX = useSpring(useTransform(mouseX, [-500, 500], [8, -8]), springConfig);
  const contentY = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const changeSlide = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    },
    []
  );

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => changeSlide(1), 6000);
    return () => clearInterval(timer);
  }, [changeSlide]);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = slides[current];
  const titleParts = slide.title.split('\n');

  return (
    <div
      ref={containerRef}
      className="relative h-screen min-h-[580px] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,48,63,0.88)] via-[rgba(5,48,63,0.5)] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[5vw]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="max-w-[720px]"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ x: contentX, y: contentY }}
          >
            <motion.span
              className="inline-block border border-[rgba(58,181,212,0.6)] text-[#3ab5d4] text-xs tracking-[2px] uppercase px-4 py-1.5 rounded-sm mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {slide.tag}
            </motion.span>

            <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-white font-bold mb-5">
              {titleParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < titleParts.length - 1 && <br />}
                </span>
              ))}
              <em className="text-[#3ab5d4] not-italic">{slide.titleAccent}</em>
              {current === 0 && <br />}
              {current === 0 && 'Swimming Pool'}
            </h1>

            <motion.p
              className="text-base text-white/75 leading-relaxed max-w-[480px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slide.description}
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href={slide.primaryHref}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(slide.primaryHref);
                }}
                className="inline-block bg-[#c59a3c] text-white px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide hover:opacity-85 hover:scale-[1.02] transition-all duration-200"
              >
                {slide.primaryBtn}
              </a>
              <a
                href={slide.secondaryHref}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(slide.secondaryHref);
                }}
                className="inline-block border-[1.5px] border-white/50 text-white px-8 py-3.5 rounded-sm text-sm hover:border-[#3ab5d4] transition-colors duration-200"
              >
                {slide.secondaryBtn}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-[#3ab5d4] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
        onClick={() => changeSlide(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </motion.button>
      <motion.button
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-[#3ab5d4] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
        onClick={() => changeSlide(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
              i === current
                ? 'bg-[#3ab5d4] border-[#3ab5d4] scale-110'
                : 'border-white/60 bg-transparent hover:border-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
