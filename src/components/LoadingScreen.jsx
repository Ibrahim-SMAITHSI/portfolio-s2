import { motion } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen({ onFinish }) {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onAnimationEnd={onFinish}
    >
      <div className="loader">
        <div className="loader-ring" />
        <div className="loader-ring ring-2" />
        <span className="loader-text">Portfolio</span>
      </div>
    </motion.div>
  );
}
