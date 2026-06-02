import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for images
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 px-[5vw] bg-white overflow-hidden">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Images Grid */}
        <motion.div className="grid grid-cols-2 gap-4" style={{ y: imgY }}>
          <motion.div
            className="col-span-1 row-span-2 rounded overflow-hidden"
            variants={fadeUp}
          >
            <img
              src="/images/about1.jpg"
              alt="Pool construction work"
              className="w-full h-full object-cover min-h-[380px]"
              loading="lazy"
            />
          </motion.div>
          <motion.div className="rounded overflow-hidden" variants={fadeUp}>
            <img
              src="/images/about2.jpg"
              alt="Pool equipment and maintenance"
              className="w-full h-full object-cover aspect-square"
              loading="lazy"
            />
          </motion.div>
          <motion.div className="rounded overflow-hidden" variants={fadeUp}>
            <img
              src="/images/about3.jpg"
              alt="Pool tile craftsmanship"
              className="w-full h-full object-cover aspect-square"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div variants={fadeUp}>
          <motion.span
            className="text-xs tracking-[2.5px] uppercase text-[#3ab5d4] font-semibold"
            variants={fadeUp}
          >
            Who We Are
          </motion.span>
          <motion.h2
            className="font-display text-[clamp(2rem,3.5vw,3rem)] text-[#05303f] leading-tight mt-2 mb-4"
            variants={fadeUp}
          >
            We Are Swimming Pool Builders &amp; Service Experts
          </motion.h2>
          <motion.div
            className="w-[50px] h-[3px] bg-[#c59a3c] mb-6"
            variants={fadeUp}
          />
          <motion.p className="text-[#4d7280] leading-relaxed mb-4 text-[0.97rem]" variants={fadeUp}>
            <strong className="text-[#162830]">Sahihi Pools</strong> is Kenya&apos;s trusted name in
            swimming pool engineering. Led by{' '}
            <strong className="text-[#162830]">Robert M. Icututa</strong>, our team brings deep
            technical expertise and a passion for perfection to every project we undertake.
          </motion.p>
          <motion.p className="text-[#4d7280] leading-relaxed mb-4 text-[0.97rem]" variants={fadeUp}>
            Whether you&apos;re dreaming of a sleek backyard pool for your family or a world-class
            aquatic facility for your hotel or resort, we have the skills, tools, and experience to
            bring it to life — on time and within budget.
          </motion.p>
          <motion.p className="text-[#4d7280] leading-relaxed mb-6 text-[0.97rem]" variants={fadeUp}>
            We handle everything from site assessment and design to construction, tiling, filtration
            systems, and final handover. Your satisfaction is our measure of success.
          </motion.p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-block bg-[#c59a3c] text-white px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide hover:opacity-85 hover:scale-[1.02] transition-all duration-200"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            More About Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
