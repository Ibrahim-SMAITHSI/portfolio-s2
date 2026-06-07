import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { galleryData } from '../data/portfolioData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          effect="coverflow"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1.5, slideShadows: false }}
          centeredSlides
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={`${import.meta.env.BASE_URL}${item.src.replace(/^\//, '')}`}
                alt={item.alt}
              />
              <div className="slide-overlay">{item.alt}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
