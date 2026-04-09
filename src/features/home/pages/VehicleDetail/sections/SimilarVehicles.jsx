import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './SimilarVehicles.module.scss';
import { FaMapMarkerAlt, FaPhone, FaCar, FaArrowRight } from 'react-icons/fa';

const SimilarVehicles = ({ vehicles = [], currentId }) => {
  const filtered = vehicles.filter((v) => v.id !== currentId);

  if (filtered.length === 0) return null;

  return (
    <div className="mt-10 pb-12">
      <h4 className="text-lg font-bold text-slate-900 pb-3 mb-6 border-b-2 border-emerald-500 inline-block">
        Benzer Araçlar
      </h4>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        loop={filtered.length > 3}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className={styles.swiper}
      >
        {filtered.map((v) => (
          <SwiperSlide key={v.id}>
            <div className={styles.card}>
              <a href={`/detay/${v.id}/${v.slug}`}>
                <img src={v.img} alt={v.title} className={styles.img} />
              </a>
              <div className={styles.body}>
                <h6 className={styles.title}>{v.title}</h6>
                <ul className={styles.info}>
                  <li>
                    <FaMapMarkerAlt size={12} className={styles.icon} />
                    <span>{v.location}</span>
                  </li>
                  <li>
                    <FaPhone size={12} className={styles.icon} />
                    <span>{v.phone}</span>
                  </li>
                  <li>
                    <FaCar size={12} className={styles.icon} />
                    <span>{v.id}</span>
                  </li>
                </ul>
                <a
                  href={`/detay/${v.id}/${v.slug}`}
                  className={styles.detailBtn}
                >
                  Araç Detay <FaArrowRight size={11} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarVehicles;
