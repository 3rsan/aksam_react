import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Rotate from 'yet-another-react-lightbox/plugins/captions';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import styles from './ProductGallery.module.scss';
import { FaExpand } from 'react-icons/fa';

const ProductGallery = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      {/* Ana Görsel */}
      <Swiper
        modules={[Thumbs, Navigation]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        navigation
        className={styles.mainSwiper}
      >
        {images.length > 0 ? (
          images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className={styles.mainSlide} onClick={() => openLightbox(i)}>
                <img
                  src={img}
                  alt={`Görsel ${i + 1}`}
                  className={styles.mainImg}
                />
                <button
                  className={styles.expandBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(i);
                  }}
                >
                  <FaExpand size={14} />
                  Büyüt
                </button>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className={styles.placeholder}>
              <span className="text-slate-400 text-sm">Görsel bulunamadı</span>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* Thumbnail Swiper */}
      {images.length > 1 && (
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={4}
          watchSlidesProgress
          className={styles.thumbSwiper}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className={styles.thumb}>
                <img
                  src={img}
                  alt={`Küçük görsel ${i + 1}`}
                  className={styles.thumbImg}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom, Thumbnails]}
      />
    </div>
  );
};

export default ProductGallery;
