import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./VehicleSlider.module.scss";
import { FaMapMarkerAlt, FaPhone, FaCar, FaArrowRight } from "react-icons/fa";
import { getVehicles } from "../../../../../services/vehicleService";

const VehicleSlider = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getVehicles({ limit: 15 })
      .then((data) => {
        const list = data.data ?? data.vehicles ?? data ?? [];
        const mapped = list.map((v) => ({
          id: v.id,
          title: `${v.year} ${v.title}`,
          location: v.location,
          phone: v.phone,
          img: v.image ?? "",
          slug: v.slug ?? "",
        }));
        setVehicles(mapped);
      })
      .catch(() => setVehicles([]));
  }, []);

  if (vehicles.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden border border-slate-200 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3005.771911352294!2d29.0239!3d41.1176722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bd7dc49fed%3A0xc8a8f9c390df3dc4!2sAksam%20Otomotiv%20Genel%20Merkez!5e0!3m2!1str!2str!4v1704447912113!5m2!1str!2str"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Aksam Otomotiv Konum"
          />
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Araçlarımız</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className={styles.swiper}
        >
          {vehicles.map((v) => (
            <SwiperSlide key={v.id}>
              <div className={styles.card}>
                <a href={`/detay/${v.id}/${v.slug}`}>
                  <img src={v.img} alt={v.title} className={styles.img} />
                </a>
                <div className={styles.body}>
                  <h6 className={styles.title}>{v.title}</h6>
                  <ul className={styles.info}>
                    <li>
                      <FaMapMarkerAlt size={13} className={styles.icon} />
                      <span>{v.location}</span>
                    </li>
                    <li>
                      <FaPhone size={13} className={styles.icon} />
                      <span>{v.phone}</span>
                    </li>
                    <li>
                      <FaCar size={13} className={styles.icon} />
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
    </section>
  );
};

export default VehicleSlider;
