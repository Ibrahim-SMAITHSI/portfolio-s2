import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData } from '../data/portfolioData';
import { FiCode, FiPenTool, FiTool, FiCamera } from 'react-icons/fi';
import './Skills.css';

const catIcons = [FiCode, FiPenTool, FiTool, FiCamera];

function SkillBar({ name, level, icon: Icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">
          {Icon && <Icon className="skill-icon" />}
          {name}
        </span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="skills-container">
        {skillsData.map((cat, i) => {
          const CatIcon = catIcons[i];
          return (
            <motion.div
              key={cat.category}
              className="skill-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <h3>
                <CatIcon className="cat-icon" />
                {cat.category}
              </h3>
              {cat.items.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
