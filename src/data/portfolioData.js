import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaPaintBrush,
  FaGithub, FaLinkedin, FaInstagram, FaWhatsapp,
  FaCamera, FaVideo, FaImage
} from 'react-icons/fa';
import { DiPhotoshop } from 'react-icons/di';
import { SiCanva, SiTailwindcss } from 'react-icons/si';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export const skillsData = [
  { category: 'Programming', items: [
    { name: 'HTML', level: 90, icon: FaHtml5 },
    { name: 'CSS', level: 85, icon: FaCss3Alt },
    { name: 'JavaScript', level: 75, icon: FaJs },
    { name: 'ReactJS', level: 70, icon: FaReact },
  ]},
  { category: 'Design', items: [
    { name: 'UI/UX Design', level: 89, icon: FaFigma },
    { name: 'Photoshop', level: 77, icon: DiPhotoshop },
    { name: 'Canva', level: 90, icon: SiCanva },
  ]},
  { category: 'Tools', items: [
    { name: 'Git & GitHub', level: 75, icon: FaGithub },
    { name: 'VS Code', level: 80, icon: null },
    { name: 'Figma', level: 90, icon: FaFigma },
    { name: 'Terminal', level: 70, icon: null },
  ]},
  { category: 'Photo & Video Editing', items: [
    { name: 'Lightroom', level: 87, icon: FaCamera },
    { name: 'CapCut', level: 90, icon: FaVideo },
    { name: 'Snapseed', level: 75, icon: FaImage },
  ]},
];

export const achievementsData = [
  { year: '2024', title: 'Mendalami Desain Digital', desc: 'Mempelajari dan menguasai Canva serta Figma untuk membuat berbagai desain kreatif dan UI sederhana.', type: 'Design Learning' },
  { year: '2025', title: 'Belajar Web Development', desc: 'Mempelajari HTML, CSS, dan JavaScript sebagai dasar pembuatan website yang responsif dan interaktif.', type: 'Web Development' },
  { year: '2026', title: 'Sertifikat Global English Pare', desc: 'Memperoleh sertifikat setelah menyelesaikan program pembelajaran bahasa Inggris di Global English Pare.', type: 'certificate' },
  { year: '2026', title: 'Mengikuti Webinar Data Analytics', desc: 'Mengikuti webinars tentang data analytics dan machine learning.', type: 'Web Development' },
  { year: '2026', title: 'ReactJS & AI Tools', desc: 'Mempelajari ReactJS, Vite, dan berbagai AI Tools untuk membangun aplikasi web modern dan meningkatkan produktivitas.', type: 'Fronted Developer' },
  { year: '2026', title: 'Bergabung dengan OSIS', desc: 'Aktif dalam kegiatan OSIS untuk melatih kepemimpinan, kerja sama tim, dan tanggung jawab.', type: 'Organizational Experience' },
];

export const projectsData = [
  {
    id: 9, title: 'Portfolio Pertama', category: 'web', tech: 'HTML, CSS, JavaScript',
    desc: 'Ini adalah web portfolio pertama saya yang dibuat menggunakan HTML, CSS, dan JavaScript. Web ini menampilkan informasi tentang diri saya, keterampilan, dan proyek-proyek yang telah saya buat.',
    image: '/public/portfolio1.jpeg',
    demo: 'https://himeruthuathade.vercel.app/', github: 'https://github.com/Ibrahim-SMAITHSI/portfolio',
  },
  {
    id: 8, title: 'Micro Teaching Bahasa Inggris', category: 'education', tech: 'Offline Teaching',
    desc: 'Dokumentasi tugas micro teaching bahasa Inggris offline berisi foto dan video selama mengajar.',
    image: '/micro-teaching.jpeg',
    demo: 'https://drive.google.com/drive/folders/1gyxJtL5RVLqvD-oxFdMcGuwoAyQbXbTT?usp=drive_link', github: '#',
  },
  {
    id: 1, title: 'Kalkulator Zakat Emas', category: 'web', tech: 'HTML, CSS, JavaScript',
    desc: 'Aplikasi web sederhana untuk menghitung zakat emas dengan antarmuka yang user-friendly.',
    image: '/kalkulator-zakat.jpeg',
    demo: 'https://kalkuator-zakat-emas.vercel.app/', github: 'https://github.com/Ibrahim-SMAITHSI/Kalkuator-zakat-emas',
  },
  {
    id: 2, title: 'Kalkulator', category: 'web', tech: 'HTML, CSS, JavaScript',
    desc: 'Aplikasi kalkulator interaktif dengan React, mendukung operasi dasar dan tampilan responsif.',
    image: '/kalkulator.jpeg',
    demo: 'https://ibrahim-smaithsi.github.io/kalkuator/', github: 'https://github.com/Ibrahim-SMAITHSI/Kalkuator',
  },
  {
    id: 3, title: 'Simulasi Lampu Merah', category: 'web', tech: 'HTML, CSS, JavaScript',
    desc: 'Simulasi lampu lalu lintas dengan animasi dan logika interaktif menggunakan JavaScript.',
    image: '/lampu-merah.jpeg',
    demo: 'https://ibrahim-smaithsi.github.io/lampu-lalu-lintas/', github: 'https://github.com/Ibrahim-SMAITHSI/lampu-lalu-lintas',
  },
  {
    id: 4, title: 'Aplikasi Penghitung Hafalan', category: 'react', tech: 'React',
    desc: 'Aplikasi React untuk membantu pengguna menghitung jumlah hafalan dengan fitur input dan tampilan hasil yang dinamis.',
    image: '/public/penghitung-hafalan.jpeg',
    demo: 'https://total-hafalan-himeru-td.vercel.app/', github: 'https://github.com/Ibrahim-SMAITHSI/mini-project-bonus',
  },
  {
    id: 5, title: 'Apklikasi Card', category: 'react', tech: 'react',
    desc: 'Aplikasi React untuk menampilkan kartu informasi dengan desain yang menarik dan responsif.',
    image: '/public/aplikasi-card.jpeg',
    demo: 'https://ibrahim-smaithsi.github.io/mini-project1/', github: 'https://github.com/Ibrahim-SMAITHSI/mini-project1',
  },
  {
    id: 6, title: 'To Do List', category: 'react', tech: 'React',
    desc: 'Aplikasi daftar tugas dengan fitur penambahan, penghapusan, dan penandaian tugas selesai.',
    image: '/public/to-do-list.jpeg',
    demo: 'https://ibrahim-smaithsi.github.io/mini-project2/', github: 'https://github.com/Ibrahim-SMAITHSI/mini-project2',
  },
  {
    id: 7, title: 'Weather Dashboard', category: 'react', tech: 'React',
    desc: 'Aplikasi dashboard cuaca yang menampilkan informasi cuaca terkini berdasarkan lokasi pengguna dengan desain yang menarik.',
    image: '/public/cuaca.jpeg',
    demo: 'https://ibrahim-smaithsi.github.io/mini-project3/', github: 'https://github.com/Ibrahim-SMAITHSI/mini-project3',
  },
];

export const galleryData = [
  { id: 1, src: '/public/bakar-bakar.jpeg', alt: 'Bakar-bakar' },
  { id: 2, src: '/public/bakar-bakar2.jpeg', alt: 'Bakar-bakar' },
  { id: 3, src: '/public/global-english.jpeg', alt: 'Global English' },
  { id: 4, src: '/public/global-english2.jpeg', alt: 'Global English' },
  { id: 5, src: '/public/idul-adha.jpeg', alt: 'Idul Adha' },
  { id: 6, src: '/public/idul-adha2.jpeg', alt: 'Idul Adha' },
  { id: 7, src: '/public/jualan.jpeg', alt: 'Jualan' },
  { id: 8, src: '/public/kereta.jpeg', alt: 'Kereta' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Ibrahim-SMAITHSI', icon: FaGithub },
  { name: 'Instagram', url: 'https://www.instagram.com/himeru_thuatha_de/', icon: FaInstagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibrahim-yusuf-2964a4401/', icon: FaLinkedin },
  { name: 'WhatsApp', url: 'https://wa.me/62882006866581', icon: FaWhatsapp },
];
