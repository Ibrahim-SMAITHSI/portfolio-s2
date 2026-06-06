import { motion } from 'framer-motion';
import './ThankYou.css';

export default function ThankYou() {
  return (
    <section className="thankyou">
      <motion.div
        className="thankyou-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Terima Kasih</h2>
        <p>
          Terima kasih telah mengunjungi portfolio saya. Semoga karya dan pengalaman
          yang saya bagikan dapat memberikan gambaran tentang kemampuan dan perjalanan
          saya dalam dunia teknologi dan desain.
        </p>
        <div className="decoration">
          <span /><span /><span />
        </div>
      </motion.div>
    </section>
  );
}
