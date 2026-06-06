import Achievements from '../components/Achievements';
import { motion } from 'framer-motion';

export default function AchievementsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Achievements />
    </motion.div>
  );
}
