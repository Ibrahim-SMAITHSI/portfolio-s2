import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import AchievementsPage from './pages/Achievements';
import ProjectsPage from './pages/Projects';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="achievements" element={<AchievementsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
