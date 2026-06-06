import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import './Footer.css';

const staggerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function Footer() {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBack(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-content">
          <motion.div
            className="footer-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">Portfolio</div>
            <p>&copy; {new Date().getFullYear()} Ibrahim. All Rights Reserved.</p>
          </motion.div>

          <div className="footer-social">
            {socialLinks.map((link, i) => {
              if (link.name === 'Email') {
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = link.url;
                    }}
                    aria-label={link.name}
                    className="social-icon"
                    custom={i}
                    variants={staggerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <FiMail />
                    <span className="tooltip">{link.name}</span>
                  </motion.a>
                );
              }
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="social-icon"
                  custom={i}
                  variants={staggerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Icon />
                  <span className="tooltip">{link.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Built with ReactJS, Framer Motion, and <span className="footer-heart">&hearts;</span>
        </motion.div>
      </motion.footer>

      <AnimatePresence>
        {showBack && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
