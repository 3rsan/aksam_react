import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './VehicleSlider.module.scss';
import { FaMapMarkerAlt, FaPhone, FaCar } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const vehicles = [
  {
    id: 330500,
    title: '2013 SPORTAGE 1.6 (135) GSL PLUS OV',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3985379_20260330091055.jpeg',
    slug: 'hasarli-oto-2013-kia-sportage-16-135-gsl-plus-ov',
  },
  {
    id: 326134,
    title: '2023 DUSTER ESSENTIAL BLUE DCI 115 4x4',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/04/08/y3419763_20260408085049.jpeg',
    slug: 'hasarli-oto-2023-dacia-duster-essential-blue-dci-115-4x4',
  },
  {
    id: 328005,
    title: '2025 SCUDO COMBI STD (L2) LOUNGE 2.0 MJ 145',
    location: 'AKSAM MASLAK',
    phone: '0 (212) 305 86 83',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/25/y6054789_20260325130534.jpeg',
    slug: 'hasarli-oto-2025-fiat-scudo-combi-std-l2-lounge-20-mj-145',
  },
  {
    id: 327902,
    title: '2025 E-5008 GT 157KW 210',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y4999860_20260330091203.jpeg',
    slug: 'hasarli-oto-2025-peugeot-e-5008-gt-157kw-210',
  },
  {
    id: 329914,
    title: '2021 CEKICI T 520 HIGHCAB 4X2 T E6 RET',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/04/02/y6071775_20260402093726.jpeg',
    slug: 'hasarli-oto-2021-renault-trucks-cekici-t-520-highcab-4x2-t-e6-ret',
  },
  {
    id: 332693,
    title: '2012 C-MAX TITANIUM 1.6 TDCI (115)',
    location: 'AKSAM MASLAK',
    phone: '0 (212) 305 86 83',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/04/06/y341866_20260406171709.jpeg',
    slug: 'hasarli-oto-2012-ford-c-max-titanium-16-tdci-115',
  },
  {
    id: 329381,
    title: '2012 330D X DRIVE',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/11/y7255794_20260311092936.jpeg',
    slug: 'hasarli-oto-2012-bmw-330d-x-drive',
  },
  {
    id: 325061,
    title: '2025 I4 EDRIVE40 SPORT LINE (160KW)',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/31/y6154463_20260331091012.jpeg',
    slug: 'hasarli-oto-2025-bmw-i4-edrive40-sport-line-160kw',
  },
  {
    id: 330304,
    title: '2017 QASHQAI 1.2 TEKNA SKY PACK',
    location: 'AKSAM MASLAK',
    phone: '0 (212) 305 86 83',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/26/y4492607_20260326160455.jpeg',
    slug: 'hasarli-oto-2017-nissan-qashqai-12-tekna-sky-pack',
  },
  {
    id: 329573,
    title: '2023 TAIGO 1.5 TSI 150 STYLE DSG',
    location: 'AKSAM MASLAK',
    phone: '0 (212) 305 86 83',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/31/y3621321_20260331090636.jpeg',
    slug: 'hasarli-oto-2023-volkswagen-taigo-15-tsi-150-style-dsg',
  },
  {
    id: 328644,
    title: '2014 POLO 1.2 TDI (75) TRENDLINE',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/24/y4334665_20260324090507.jpeg',
    slug: 'hasarli-oto-2014-volkswagen-polo-12-tdi-75-trendline',
  },
  {
    id: 315134,
    title: '2021 CRAFTER PANELVAN 2+1 LWB HR 140 3.5T COMFORT',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/04/09/y4012263_20260409094316.jpeg',
    slug: 'hasarli-oto-2021-volkswagen-crafter-panelvan-2-1-lwb-hr-140-35t-comfort',
  },
  {
    id: 331332,
    title: '2017 CEKICI R450 LA 4X2 MEB E6',
    location: 'PERT PARK URFA',
    phone: '0 (212) 305 86 83',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/04/09/y210059_20260409094527.jpeg',
    slug: 'hasarli-oto-2017-scania-cekici-r450-la-4x2-meb-e6',
  },
  {
    id: 330819,
    title: '2020 KONA 1.6 CRDI ELITE SMART DCT',
    location: 'AKSAM MASLAK',
    phone: '0 (212) 305 86 83',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/04/08/y2193501_20260408150442.jpeg',
    slug: 'hasarli-oto-2020-hyundai-kona-16-crdi-elite-smart-dct',
  },
  {
    id: 325578,
    title: '2025 T10F V2 RWD UZUN MENZIL 160KW',
    location: 'AKSAM SAMANDIRA',
    phone: '0 (212) 305 86 81',
    img: 'https://images.aksamoto.com/operasyon.autogong_img/2026/04/09/y6981148_20260409093408.jpeg',
    slug: 'hasarli-oto-2025-togg-t10f-v2-rwd-uzun-menzil-160kw',
  },
];

const VehicleSlider = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        {/* Harita */}
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

        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Araçlarımız</h2>
        </div>

        {/* Slider */}
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
