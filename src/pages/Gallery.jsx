import Gallery from '../components/Gallery';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Gallery />
    </motion.div>
  );
}
