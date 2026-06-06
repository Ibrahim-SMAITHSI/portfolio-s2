import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Particles from '../components/Particles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Particles />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  );
}
