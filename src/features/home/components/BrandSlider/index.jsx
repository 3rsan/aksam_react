import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import useVehicleBrands from '../../hooks/useVehicleBrands';
import BrandSliderLoading from './BrandSliderLoading';
import 'swiper/css';
import 'swiper/css/free-mode';
import './styles.scss';

const LOOP_MULTIPLIER = 4;

export default function VehicleBrandSlider() {
  const { brands, loading, error } = useVehicleBrands();
  const navigate = useNavigate();

  if (loading) return <BrandSliderLoading itemCount={8} />;
  if (error) return null;

  const loopedBrands =
    brands.length > 0
      ? Array.from({ length: LOOP_MULTIPLIER }, (_, i) =>
          brands.map((brand) => ({
            ...brand,
            _loopKey: `${i}-${brand.marka_ref_no}`,
          })),
        ).flat()
      : [];

  return (
    <section className="vbs">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        freeMode
        loop={false}
        spaceBetween={0}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove
        grabCursor
      >
        {loopedBrands.map((brand) => (
          <SwiperSlide key={brand._loopKey} className="vbs__slide">
            <button
              type="button"
              className="vbs__item"
              onClick={() => navigate(`/araclar?marka=${brand.marka_ref_no}`)}
            >
              <span className="vbs__logo-wrap">
                <img
                  src={brand.arac_resim}
                  alt={brand.marka}
                  className="vbs__logo"
                  loading="lazy"
                />
              </span>
              <span className="vbs__label">{brand.marka}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
