import styles from './ProductInfo.module.scss';
import { FaMapMarkerAlt, FaPhone, FaCar, FaWhatsapp } from 'react-icons/fa';

const ProductInfo = ({ product }) => {
  const {
    id,
    title,
    brand,
    model,
    year,
    price,
    location,
    phone,
    specs = {},
  } = product;

  return (
    <div className={styles.wrapper}>
      {/* Başlık */}
      <h2 className="text-xl font-bold text-slate-900 mb-1">{title}</h2>
      <p className="text-xs text-slate-400 mb-4">Stok No: {id}</p>

      {/* Fiyat */}
      {price && (
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3 mb-5 inline-block">
          <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wide mb-0.5">
            Fiyat
          </p>
          <p className="text-2xl font-bold text-emerald-700">{price}</p>
        </div>
      )}

      {/* Konum & İletişim */}
      <div className="flex flex-col gap-3 mb-6">
        <div className={styles.infoRow}>
          <FaMapMarkerAlt size={14} className={styles.infoIcon} />
          <div>
            <span className="block text-xs text-slate-400 mb-0.5">
              Lokasyon
            </span>
            <span className="text-sm font-semibold text-slate-700">
              {location}
            </span>
          </div>
        </div>
        <div className={styles.infoRow}>
          <FaPhone size={14} className={styles.infoIcon} />
          <div>
            <span className="block text-xs text-slate-400 mb-0.5">Telefon</span>
            <a
              href={`tel:${phone}`}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              {phone}
            </a>
          </div>
        </div>
        <div className={styles.infoRow}>
          <FaCar size={14} className={styles.infoIcon} />
          <div>
            <span className="block text-xs text-slate-400 mb-0.5">Stok No</span>
            <span className="text-sm font-semibold text-slate-700">{id}</span>
          </div>
        </div>
      </div>

      {/* Teknik Bilgiler Özeti */}
      {Object.keys(specs).length > 0 && (
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Teknik Bilgiler
          </p>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key}>
                <p className="text-xs text-slate-400 mb-0.5">{key}</p>
                <p className="text-sm font-semibold text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Butonları */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`https://wa.me/${phone?.replace(/\D/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className={styles.whatsappBtn}
        >
          <FaWhatsapp size={18} />
          WhatsApp ile İletişim
        </a>
        <a href={`tel:${phone}`} className={styles.callBtn}>
          <FaPhone size={14} />
          Hemen Ara
        </a>
      </div>
    </div>
  );
};

export default ProductInfo;
