import {
  FaLocationDot,
  FaCar,
  FaCalendar,
  FaFileLines,
  FaCarBurst,
} from 'react-icons/fa6';
import { GiGearStickPattern } from 'react-icons/gi';
import { BsFuelPumpFill } from 'react-icons/bs';
import { MdSpeed } from 'react-icons/md';
import './styles.scss';

const FEATURE_ICONS = {
  brand: <FaCar size={12} />,
  year: <FaCalendar size={12} />,
  mileage: <MdSpeed size={13} />,
  transmission: <GiGearStickPattern size={12} />,
  fuel: <BsFuelPumpFill size={12} />,
  document: <FaFileLines size={12} />,
  damage: <FaCarBurst size={12} />,
};

function FeatureBadge({ type = 'brand', label }) {
  return (
    <div className="vc-badge">
      <span className="vc-badge__icon">
        {FEATURE_ICONS[type] ?? <FaCar size={12} />}
      </span>
      <span className="vc-badge__label">{label}</span>
    </div>
  );
}

// viewMode: 'list' | 'grid'
export default function VehicleCard({
  auctionNo = '302646',
  title = '2024 DAILY VAN 35 S 16 A 8 VAN 4100 H2 E6E GSR24',
  location = 'AKSAM SAMANDIRA',
  price = '825.000 ₺',
  detailUrl = '#',
  image = 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
  brand = 'IVECO',
  year = '2024',
  mileage = '55.875',
  transmission = 'OTOMATİK',
  fuel = 'DİZEL',
  document = 'ÇEKME BELGELİ',
  damageStatus = 'ÇARPMA-ÇARPIŞMA',
  viewMode = 'list',
}) {
  const isGrid = viewMode === 'grid';

  return (
    <article className={`vc ${isGrid ? 'vc--grid' : 'vc--list'}`}>
      {/* Thumbnail */}
      <a href={detailUrl} className="vc__thumb">
        <img src={image} alt={title} className="vc__img" />
        {!isGrid && <span className="vc__overlay">View Detail</span>}
      </a>

      {/* Body */}
      <div className="vc__body">
        <a href={detailUrl} className="vc__title-link">
          <h5 className="vc__title">{title}</h5>
        </a>

        <div className="vc__meta">
          <span className="vc__meta-item">
            <FaLocationDot size={11} />
            {location}
          </span>
          {!isGrid && (
            <span className="vc__meta-item vc__meta-item--auction">
              <strong>İhale No:</strong>&nbsp;{auctionNo}
            </span>
          )}
        </div>

        <div className="vc__divider" />

        <div className="vc__features">
          <FeatureBadge type="brand" label={brand} />
          <FeatureBadge type="year" label={year} />
          <FeatureBadge type="mileage" label={`${mileage} km`} />
          <FeatureBadge type="transmission" label={transmission} />
          <FeatureBadge type="fuel" label={fuel} />
          {document && <FeatureBadge type="document" label={document} />}
          {damageStatus && <FeatureBadge type="damage" label={damageStatus} />}
        </div>

        {/* Grid: price + button inside body */}
        {isGrid && (
          <div className="vc__grid-footer">
            <span className="vc__price">{price}</span>
            <a href={detailUrl} className="vc__btn">
              İncele
            </a>
          </div>
        )}
      </div>

      {/* List: price column on the right */}
      {!isGrid && (
        <div className="vc__price-col">
          <span className="vc__price">{price}</span>
          <a href={detailUrl} className="vc__btn">
            İncele
          </a>
        </div>
      )}
    </article>
  );
}
