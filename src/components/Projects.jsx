import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const filters = ['all', 'web', 'react', 'education'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
                alt={project.title}
                className="card-image"
              />
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span className="tech-tag">{project.tech}</span>
                <div className="card-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo">
                    <FiExternalLink /> Demo
                  </a>
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github">
                      <FiGithub /> Github
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
