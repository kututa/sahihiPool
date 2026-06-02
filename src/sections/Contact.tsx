import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    poolType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', poolType: '', message: '' });
    }, 3000);
  };

  const inputClasses =
    'w-full px-4 py-3 border-[1.5px] border-[rgba(10,79,110,0.15)] rounded-sm font-body text-sm text-[#162830] transition-colors duration-200 bg-white focus:outline-none focus:border-[#3ab5d4]';

  return (
    <section id="contact" className="py-24 px-[5vw] bg-[#f4f8fa]">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <span className="text-xs tracking-[2.5px] uppercase text-[#3ab5d4] font-semibold">
          Get In Touch
        </span>
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-[#05303f] leading-tight mt-2 mb-4">
          Contact Us
        </h2>
        <div className="w-[50px] h-[3px] bg-[#c59a3c] mb-10" />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Form */}
          <motion.div
            className="bg-white p-10 rounded border border-[rgba(10,79,110,0.08)]"
            variants={fadeUp}
          >
            <h3 className="font-display text-2xl text-[#05303f] mb-6 font-bold">
              Send Us a Message
            </h3>

            {submitted ? (
              <motion.div
                className="bg-green-50 border border-green-200 text-green-800 p-6 rounded text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-lg font-semibold mb-1">Thank you!</p>
                <p className="text-sm">We will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#162830] tracking-wider uppercase mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Kamau"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#162830] tracking-wider uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 0722 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#162830] tracking-wider uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#162830] tracking-wider uppercase mb-2">
                    Type of Pool
                  </label>
                  <select
                    name="poolType"
                    value={formData.poolType}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select pool type...</option>
                    <option value="domestic">Domestic Pool (KES 4–5M)</option>
                    <option value="commercial">Commercial Pool (KES 7–10M)</option>
                    <option value="repair">Pool Repair / Maintenance</option>
                    <option value="unsure">Not Sure Yet</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-[#162830] tracking-wider uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project, location, and any specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-y min-h-[110px]`}
                    rows={4}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#0a4f6e] text-white py-3.5 font-body text-[0.95rem] font-semibold tracking-wider rounded-sm hover:bg-[#3ab5d4] transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message →
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display text-2xl text-[#05303f] mb-6 font-bold">
              Our Contact Details
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-[#0a4f6e] text-white flex items-center justify-center flex-shrink-0">
                  <User size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#4d7280] mb-1">
                    Lead Engineer
                  </div>
                  <div className="text-[0.95rem] text-[#05303f] font-medium">Robert M. Icututa</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-[#0a4f6e] text-white flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#4d7280] mb-1">Phone</div>
                  <div className="text-[0.95rem] text-[#05303f] font-medium">
                    <a
                      href="tel:+254722668855"
                      className="hover:text-[#3ab5d4] transition-colors block"
                    >
                      0722 668 855
                    </a>
                    <a
                      href="tel:+254722285420"
                      className="hover:text-[#3ab5d4] transition-colors block"
                    >
                      0722 285 420
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-[#0a4f6e] text-white flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#4d7280] mb-1">Email</div>
                  <div className="text-[0.95rem] text-[#05303f] font-medium">
                    <a
                      href="mailto:sahihipools@gmail.com"
                      className="hover:text-[#3ab5d4] transition-colors"
                    >
                      sahihipools@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-[#0a4f6e] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#4d7280] mb-1">
                    Location
                  </div>
                  <div className="text-[0.95rem] text-[#05303f] font-medium">
                    Kenya — Nationwide Service
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-[#c8eef8] rounded h-[200px] flex items-center justify-center text-[#0a4f6e] text-sm font-medium border border-dashed border-[#3ab5d4]">
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                We serve all of Kenya — Contact us today
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
