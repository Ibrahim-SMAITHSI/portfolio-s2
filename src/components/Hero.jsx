import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FiMail, FiEye } from 'react-icons/fi';
import { useTypewriter } from '../hooks/useTypewriter';
import profilImage from './foto/foto pp.jpeg';
import './Hero.css';

export default function Hero() {
  const { text } = useTypewriter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="hero" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="hero-left">
        <motion.p
          className="greeting"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Halo, Saya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ibrahim
        </motion.h1>

        <motion.div
          className="typewriter-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="typewriter-prefix">I&apos;m a </span>
          <span className="typewriter-text">{text}</span>
          <span className="typewriter-cursor">|</span>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Calon Web Development, Graphic Designer, dan Pelajar yang memiliki minat besar
          dalam teknologi, desain, dan pengembangan web modern.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a href="#projects" className="btn btn-primary">
            <FiEye /> Lihat Project Saya
          </a>
          <a href="#contact" className="btn btn-outline">
            <FiMail /> Contact Me
          </a>
        </motion.div>
      </div>

      <div className="hero-right">
        <motion.div
          className="profile-container"
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-ring" />
          <div className="profile-ring ring-2" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <img
            src={profilImage}
            alt="Ibrahim"
            className="profile-image"
          />
          <div className="profile-logo">H</div>
        </motion.div>
      </div>
    </section>
  );
}
