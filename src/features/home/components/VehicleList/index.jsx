import VehicleCard from '../VehicleCard';
import './styles.scss';

// ── Mock veri — API'den gelecek ───────────────────────────
const MOCK_VEHICLES = [
  {
    id: 1,
    ihaleNo: '302646',
    baslik: '2024 DAILY VAN 35 S 16 A 8 VAN 4100 H2 E6E GSR24 / SOĞUTUCU HARİÇ',
    konum: 'AKSAM SAMANDIRA',
    fiyat: '825.000 ₺',
    detayUrl: '/detay/302646/iveco-daily-van',
    gorsel:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    marka: 'IVECO',
    yil: '2024',
    km: '55.875',
    vites: 'OTOMATİK',
    yakit: 'DİZEL',
    belge: 'ÇEKME BELGELİ',
    hasarDurumu: 'ÇARPMA-ÇARPIŞMA',
  },
  {
    id: 2,
    ihaleNo: '298431',
    baslik: '2022 FORD TRANSIT 350 L3H3 JUMBO 2.0 ECOBLUE 170PS',
    konum: 'AKSAM KARTAL',
    fiyat: '1.150.000 ₺',
    detayUrl: '/detay/298431/ford-transit',
    gorsel:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    marka: 'FORD',
    yil: '2022',
    km: '88.430',
    vites: 'MANUEL',
    yakit: 'DİZEL',
    belge: 'ÇEKME BELGELİ',
    hasarDurumu: 'YANMA',
  },
  {
    id: 3,
    ihaleNo: '301120',
    baslik: '2021 RENAULT MEGANE 1.3 TCE 140HP EDC TOUCH',
    konum: 'AKSAM GEBZE',
    fiyat: '620.000 ₺',
    detayUrl: '/detay/301120/renault-megane',
    gorsel:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    marka: 'RENAULT',
    yil: '2021',
    km: '42.100',
    vites: 'OTOMATİK',
    yakit: 'BENZİN',
    belge: 'ÇEKME BELGELİ',
    hasarDurumu: null,
  },
  {
    id: 4,
    ihaleNo: '299875',
    baslik: '2023 BMW 320I M SPORT 2.0 170HP SEDAN',
    konum: 'AKSAM SAMANDIRA',
    fiyat: '2.450.000 ₺',
    detayUrl: '/detay/299875/bmw-320i',
    gorsel:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    marka: 'BMW',
    yil: '2023',
    km: '21.550',
    vites: 'OTOMATİK',
    yakit: 'BENZİN / ELEKTRİK',
    belge: 'ÇEKME BELGELİ',
    hasarDurumu: 'ÇARPMA-ÇARPIŞMA',
  },
  {
    id: 5,
    ihaleNo: '300012',
    baslik: '2020 VOLKSWAGEN CRAFTER 35 2.0 TDI 177HP LONG KASA',
    konum: 'AKSAM KARTAL',
    fiyat: '980.000 ₺',
    detayUrl: '/detay/300012/vw-crafter',
    gorsel:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    marka: 'VOLKSWAGEN',
    yil: '2020',
    km: '134.200',
    vites: 'MANUEL',
    yakit: 'DİZEL',
    belge: null,
    hasarDurumu: 'KAZA',
  },
];

// ── Skeleton kart (yükleme) ───────────────────────────────
function SkeletonCard() {
  return (
    <div className="vl-skeleton">
      <div className="vl-skeleton__thumb" />
      <div className="vl-skeleton__body">
        <div className="vl-skeleton__line vl-skeleton__line--title" />
        <div className="vl-skeleton__line vl-skeleton__line--meta" />
        <div className="vl-skeleton__line vl-skeleton__line--meta" />
        <div className="vl-skeleton__badges">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="vl-skeleton__badge" />
          ))}
        </div>
      </div>
      <div className="vl-skeleton__price-col" />
    </div>
  );
}

// ── Boş durum ─────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="vl-empty">
      <span className="vl-empty__icon">🔍</span>
      <p className="vl-empty__title">Araç bulunamadı</p>
      <p className="vl-empty__sub">
        Filtrelerinizi değiştirerek tekrar deneyin.
      </p>
    </div>
  );
}

// ── Ana bileşen ───────────────────────────────────────────
export default function VehicleList({
  vehicles = MOCK_VEHICLES,
  loading = false,
  total = null,
}) {
  const count = total ?? vehicles.length;

  return (
    <section className="vl">
      {/* Üst bar */}
      <div className="vl__topbar">
        <p className="vl__count">
          {loading ? (
            <span className="vl__count-skeleton" />
          ) : (
            <>
              <strong>{count}</strong> araç listeleniyor
            </>
          )}
        </p>
      </div>

      {/* Liste */}
      <div className="vl__list">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
        ) : vehicles.length === 0 ? (
          <EmptyState />
        ) : (
          vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              ihaleNo={vehicle.ihaleNo}
              baslik={vehicle.baslik}
              konum={vehicle.konum}
              fiyat={vehicle.fiyat}
              detayUrl={vehicle.detayUrl}
              gorsel={vehicle.gorsel}
              marka={vehicle.marka}
              yil={vehicle.yil}
              km={vehicle.km}
              vites={vehicle.vites}
              yakit={vehicle.yakit}
              belge={vehicle.belge}
              hasarDurumu={vehicle.hasarDurumu}
            />
          ))
        )}
      </div>
    </section>
  );
}
