import { motion } from 'framer-motion';

interface Reason {
  num: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    num: '01',
    title: 'Qualified Swimming Pool Engineer',
    description:
      'Every project is personally designed and supervised by Robert M. Kututa, a certified pool engineer with real field experience.',
  },
  {
    num: '02',
    title: 'Domestic & Commercial Expertise',
    description:
      'We build both home pools and large commercial facilities — from KES 4M to KES 10M and beyond.',
  },
  {
    num: '03',
    title: 'Transparent, Honest Pricing',
    description:
      'No hidden costs. We give you a full breakdown before any work begins so you always know what you\'re paying for.',
  },
  {
    num: '04',
    title: 'Free On-Site Consultation',
    description:
      'We come to your site, assess the space, and advise you — all at no charge. Contact us to book yours today.',
  },
  {
    num: '05',
    title: 'End-to-End Project Management',
    description:
      'From first sketch to final water fill — we manage the entire process so you don\'t have to worry about a thing.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Reasons = () => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why" className="bg-[#05303f]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 px-[5vw] max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[2.5px] uppercase text-[#3ab5d4] font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-white leading-tight mt-2 mb-4">
            Top Reasons To Contact Us Today!
          </h2>
          <div className="w-[50px] h-[3px] bg-[#3ab5d4] mb-6" />
          <p className="text-white/60 leading-relaxed text-[0.97rem] mb-8">
            We&apos;re not just pool builders — we&apos;re pool engineers. The difference is in the
            details, the durability, and the dedication we bring to every single project.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-block bg-[#c59a3c] text-white px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide hover:opacity-85 transition-opacity duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Quote
          </motion.a>
        </motion.div>

        {/* Right - Reasons List */}
        <motion.ul
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {reasons.map((reason) => (
            <motion.li
              key={reason.num}
              className="flex items-start gap-4 p-5 bg-white/5 border-l-[3px] border-[#3ab5d4] rounded-r"
              variants={itemVariants}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)', x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-display text-[2rem] text-[rgba(58,181,212,0.3)] font-bold min-w-[40px] leading-none">
                {reason.num}
              </span>
              <div>
                <strong className="text-[#3ab5d4] text-[1.05rem] block mb-1">{reason.title}</strong>
                <span className="text-white/60 text-sm leading-relaxed">{reason.description}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Reasons;
