import { useState, useMemo } from 'react';
import VehicleCard from '../VehicleCard';
import VehicleListToolbar from '../VehicleListToolbar';
import './styles.scss';

// ── Helpers ───────────────────────────────────
function parsePrice(priceStr = '') {
  return Number(priceStr.replace(/[^\d]/g, '')) || 0;
}

function sortVehicles(vehicles, sortValue) {
  if (!sortValue) return vehicles;
  const sorted = [...vehicles];

  switch (sortValue) {
    case 'priceAsc':
      return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case 'priceDesc':
      return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    case 'newest':
      // API'den date alanı gelince: new Date(b.createdAt) - new Date(a.createdAt)
      return sorted.sort((a, b) => b.id - a.id);
    case 'oldest':
      return sorted.sort((a, b) => a.id - b.id);
    default:
      return vehicles;
  }
}

// ── Mock data ─────────────────────────────────
const MOCK_VEHICLES = [
  {
    id: 1,
    auctionNo: '302646',
    title: '2024 DAILY VAN 35 S 16 A 8 VAN 4100 H2 E6E GSR24 / SOĞUTUCU HARİÇ',
    location: 'AKSAM SAMANDIRA',
    price: '825.000 ₺',
    detailUrl: '/detay/302646/iveco-daily-van',
    image:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    brand: 'IVECO',
    year: '2024',
    mileage: '55.875',
    transmission: 'OTOMATİK',
    fuel: 'DİZEL',
    document: 'ÇEKME BELGELİ',
    damageStatus: 'ÇARPMA-ÇARPIŞMA',
  },
  {
    id: 2,
    auctionNo: '298431',
    title: '2022 FORD TRANSIT 350 L3H3 JUMBO 2.0 ECOBLUE 170PS',
    location: 'AKSAM KARTAL',
    price: '1.150.000 ₺',
    detailUrl: '/detay/298431/ford-transit',
    image:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    brand: 'FORD',
    year: '2022',
    mileage: '88.430',
    transmission: 'MANUEL',
    fuel: 'DİZEL',
    document: 'ÇEKME BELGELİ',
    damageStatus: 'YANMA',
  },
  {
    id: 3,
    auctionNo: '301120',
    title: '2021 RENAULT MEGANE 1.3 TCE 140HP EDC TOUCH',
    location: 'AKSAM GEBZE',
    price: '620.000 ₺',
    detailUrl: '/detay/301120/renault-megane',
    image:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    brand: 'RENAULT',
    year: '2021',
    mileage: '42.100',
    transmission: 'OTOMATİK',
    fuel: 'BENZİN',
    document: 'ÇEKME BELGELİ',
    damageStatus: null,
  },
  {
    id: 4,
    auctionNo: '299875',
    title: '2023 BMW 320I M SPORT 2.0 170HP SEDAN',
    location: 'AKSAM SAMANDIRA',
    price: '2.450.000 ₺',
    detailUrl: '/detay/299875/bmw-320i',
    image:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    brand: 'BMW',
    year: '2023',
    mileage: '21.550',
    transmission: 'OTOMATİK',
    fuel: 'BENZİN / ELEKTRİK',
    document: 'ÇEKME BELGELİ',
    damageStatus: 'ÇARPMA-ÇARPIŞMA',
  },
  {
    id: 5,
    auctionNo: '300012',
    title: '2020 VOLKSWAGEN CRAFTER 35 2.0 TDI 177HP LONG KASA',
    location: 'AKSAM KARTAL',
    price: '980.000 ₺',
    detailUrl: '/detay/300012/vw-crafter',
    image:
      'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
    brand: 'VOLKSWAGEN',
    year: '2020',
    mileage: '134.200',
    transmission: 'MANUEL',
    fuel: 'DİZEL',
    document: null,
    damageStatus: 'KAZA',
  },
];

// ── Skeleton ──────────────────────────────────
function SkeletonCard({ viewMode }) {
  return (
    <div
      className={`vl-skeleton ${viewMode === 'grid' ? 'vl-skeleton--grid' : ''}`}
    >
      <div className="vl-skeleton__thumb" />
      <div className="vl-skeleton__body">
        <div className="vl-skeleton__line vl-skeleton__line--title" />
        <div className="vl-skeleton__line vl-skeleton__line--meta" />
        <div className="vl-skeleton__badges">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="vl-skeleton__badge" />
          ))}
        </div>
      </div>
      {viewMode === 'list' && <div className="vl-skeleton__price-col" />}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="vl-empty">
      <span className="vl-empty__icon">🔍</span>
      <p className="vl-empty__title">No vehicles found</p>
      <p className="vl-empty__sub">Try adjusting your filters.</p>
    </div>
  );
}

// ── Main component ────────────────────────────
export default function VehicleList({
  vehicles = MOCK_VEHICLES,
  loading = false,
  total = null,
  pageStart = 1,
  pageEnd = 15,
}) {
  const [viewMode, setViewMode] = useState('list');
  const [sortValue, setSortValue] = useState('');

  const sortedVehicles = useMemo(
    () => sortVehicles(vehicles, sortValue),
    [vehicles, sortValue],
  );

  const count = total ?? vehicles.length;

  return (
    <section className="vl">
      <VehicleListToolbar
        totalCount={count}
        pageStart={pageStart}
        pageEnd={Math.min(pageEnd, count)}
        sortValue={sortValue}
        viewMode={viewMode}
        onSort={setSortValue}
        onViewMode={setViewMode}
      />

      <div
        className={`vl__list ${viewMode === 'grid' ? 'vl__list--grid' : ''}`}
      >
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} viewMode={viewMode} />
          ))
        ) : sortedVehicles.length === 0 ? (
          <EmptyState />
        ) : (
          sortedVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              viewMode={viewMode}
              auctionNo={vehicle.auctionNo}
              title={vehicle.title}
              location={vehicle.location}
              price={vehicle.price}
              detailUrl={vehicle.detailUrl}
              image={vehicle.image}
              brand={vehicle.brand}
              year={vehicle.year}
              mileage={vehicle.mileage}
              transmission={vehicle.transmission}
              fuel={vehicle.fuel}
              document={vehicle.document}
              damageStatus={vehicle.damageStatus}
            />
          ))
        )}
      </div>
    </section>
  );
}
