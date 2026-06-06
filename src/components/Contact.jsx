import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import Swal from 'sweetalert2';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Nama harus diisi';
    if (!form.email.trim()) errs.email = 'Email harus diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email tidak valid';
    if (!form.message.trim()) errs.message = 'Pesan harus diisi';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Pesan Anda telah terkirim. Terima kasih!',
        background: 'var(--bg-card)',
        color: 'var(--text-primary)',
        confirmButtonColor: '#8b5cf6',
      });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="section contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Get In Touch</h3>
          <p>
            Punya pertanyaan, saran, atau ingin bekerja sama? Jangan ragu untuk
            menghubungi saya melalui form di samping atau langsung melalui kontak di bawah.
          </p>
          <div className="contact-item">
            <FiMail className="ci-icon" />
            <span>ibrahimhsi31@gmail.com</span>
          </div>
          <div className="contact-item">
            <FiPhone className="ci-icon" />
            <span>+62 882 0068 66581</span>
          </div>
          <div className="contact-item">
            <FiMapPin className="ci-icon" />
            <span>Sukabumi, Indonesia</span>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <label>Nama</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              className={errors.name ? 'error-input' : ''}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda..."
              className={errors.message ? 'error-input' : ''}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={submitting}>
            <FiSend /> {submitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
