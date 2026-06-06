import { motion } from 'framer-motion';
import { FiUser, FiCalendar, FiMapPin, FiBook, FiHeart, FiStar } from 'react-icons/fi';
import profilImage from './foto/foto pp.jpeg';
import './About.css';

export default function About() {
  const info = [
    { icon: FiUser, label: 'Nama Lengkap', value: 'Ibrahim' },
    { icon: FiCalendar, label: 'Umur', value: '17 Tahun' },
    { icon: FiMapPin, label: 'Domisili', value: 'Sukabumi, Indonesia' },
    { icon: FiBook, label: 'Pendidikan', value: 'SMA Kelas 11' },
    { icon: FiHeart, label: 'Hobi', value: 'Coding, Desain, Fotografi' },
    { icon: FiStar, label: 'Minat', value: 'Web Dev, UI/UX, Fotographer' },
  ];

  return (
    <section id="about" className="section about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profilImage}
            alt="About Ibrahim"
          />
        </motion.div>

        <div className="about-text">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tentang Saya
          </motion.h3>
          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Web Developer & Graphic Designer
          </motion.p>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {info.map((item, i) => (
              <div className="info-item" key={i}>
                <item.icon className="icon" />
                <strong>{item.label}:</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
