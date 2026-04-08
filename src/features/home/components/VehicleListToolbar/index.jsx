import { FaList, FaTableCells } from 'react-icons/fa6';
import './styles.scss';

const SIRALAMA_SECENEKLERI = [
  { value: '', label: 'Gelişmiş Sıralama' },
  { value: 'fiyatyuk', label: 'Fiyata Göre Yüksek' },
  { value: 'fiyatdus', label: 'Fiyata Göre Düşük' },
  { value: 'enson', label: 'En Son Eklenen' },
];

// viewMode: 'list' | 'grid'
export default function VehicleListToolbar({
  toplamSonuc = 0,
  sayfaBaslangic = 1,
  sayfaBitis = 15,
  siralamaValue = '',
  viewMode = 'list',
  onSiralama, // (value: string) => void
  onViewMode, // ('list' | 'grid') => void
}) {
  function handleSiralama(e) {
    onSiralama?.(e.target.value);
  }

  return (
    <div className="vlt">
      {/* ── Sol: sıralama + görünüm ── */}
      <div className="vlt__left">
        <span className="vlt__sort-label">Sırala:</span>

        <select
          className="vlt__select"
          value={siralamaValue}
          onChange={handleSiralama}
        >
          {SIRALAMA_SECENEKLERI.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="vlt__view-btns">
          <button
            type="button"
            className={`vlt__view-btn ${viewMode === 'list' ? 'vlt__view-btn--active' : ''}`}
            onClick={() => onViewMode?.('list')}
            title="Liste görünümü"
          >
            <FaList size={13} />
          </button>
          <button
            type="button"
            className={`vlt__view-btn ${viewMode === 'grid' ? 'vlt__view-btn--active' : ''}`}
            onClick={() => onViewMode?.('grid')}
            title="Grid görünümü"
          >
            <FaTableCells size={13} />
          </button>
        </div>
      </div>

      {/* ── Sağ: sonuç sayısı ── */}
      <p className="vlt__result-text">
        <strong>
          {sayfaBaslangic} – {sayfaBitis}
        </strong>{' '}
        arası, toplam <strong>{toplamSonuc}</strong> sonuç
      </p>
    </div>
  );
}
