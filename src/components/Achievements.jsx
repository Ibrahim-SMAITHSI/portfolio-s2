import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <div className="timeline">
        {achievementsData.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
