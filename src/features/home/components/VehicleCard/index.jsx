import {
  FaLocationDot,
  FaCar,
  FaCalendar,
  FaGauge,
  FaFileLines,
  FaCarBurst,
} from 'react-icons/fa6';
import { GiGearStickPattern } from 'react-icons/gi';
import { BsFuelPumpFill } from 'react-icons/bs';
import { MdSpeed } from 'react-icons/md';
import './styles.scss';

// ── İkon eşlemesi ──────────────────────────────────────────
const FEATURE_ICONS = {
  marka: <FaCar size={12} />,
  yil: <FaCalendar size={12} />,
  km: <MdSpeed size={13} />,
  vites: <GiGearStickPattern size={12} />,
  yakit: <BsFuelPumpFill size={12} />,
  belge: <FaFileLines size={12} />,
  hasar: <FaCarBurst size={12} />,
};

// ── Alt bileşen: özellik etiketi ──────────────────────────
function FeatureBadge({ type = 'marka', label }) {
  return (
    <div className="vc-badge">
      <span className="vc-badge__icon">
        {FEATURE_ICONS[type] ?? <FaCar size={12} />}
      </span>
      <span className="vc-badge__label">{label}</span>
    </div>
  );
}

// ── Ana bileşen ───────────────────────────────────────────
export default function VehicleCard({
  ihaleNo = '302646',
  baslik = '2024 DAILY VAN 35 S 16 A 8 VAN 4100 H2 E6E GSR24 / SOĞUTUCU HARİÇ',
  konum = 'AKSAM SAMANDIRA',
  fiyat = '825.000 ₺',
  detayUrl = '#',
  gorsel = 'https://images.aksamoto.com/operasyon.autogong_img/2026/03/30/y3400336_20260330093054.jpeg',
  marka = 'IVECO',
  yil = '2024',
  km = '55.875',
  vites = 'OTOMATİK',
  yakit = 'DİZEL',
  belge = 'ÇEKME BELGELİ',
  hasarDurumu = 'ÇARPMA-ÇARPIŞMA',
}) {
  return (
    <article className="vc">
      {/* ── Görsel ── */}
      <a href={detayUrl} className="vc__thumb">
        <img src={gorsel} alt={baslik} className="vc__img" />
      </a>

      {/* ── İçerik ── */}
      <div className="vc__body">
        <a href={detayUrl} className="vc__title-link">
          <h5 className="vc__title">{baslik}</h5>
        </a>

        <div className="vc__meta">
          <span className="vc__meta-item">
            <FaLocationDot size={11} />
            {konum}
          </span>
          <span className="vc__meta-item vc__meta-item--ihale">
            <strong>İhale No:</strong>&nbsp;{ihaleNo}
          </span>
        </div>

        <div className="vc__divider" />

        <div className="vc__features">
          <FeatureBadge type="marka" label={marka} />
          <FeatureBadge type="yil" label={yil} />
          <FeatureBadge type="km" label={`${km} km`} />
          <FeatureBadge type="vites" label={vites} />
          <FeatureBadge type="yakit" label={yakit} />
          {belge && <FeatureBadge type="belge" label={belge} />}
          {hasarDurumu && <FeatureBadge type="hasar" label={hasarDurumu} />}
        </div>
      </div>

      {/* ── Fiyat ── */}
      <div className="vc__price-col">
        <span className="vc__price">{fiyat}</span>
        <a href={detayUrl} className="vc__btn">
          İncele
        </a>
      </div>
    </article>
  );
}
