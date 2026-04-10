import { FaList, FaTableCells } from 'react-icons/fa6';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import './styles.scss';

export default function VehicleListToolbar({
  totalCount = 0,
  loadedCount = 0,
  sortValue = '',
  viewMode = 'list',
  onSort, // (value: string) => void
  onViewMode, // ('list' | 'grid') => void
}) {
  return (
    <div className="vlt">
      <div className="vlt__left">
        <span className="vlt__sort-label">Sort:</span>

        <select
          className="vlt__select"
          value={sortValue}
          onChange={(e) => onSort?.(e.target.value)}
        >
          {SORT_OPTIONS.map((opt) => (
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
            title="List view"
          >
            <FaList size={13} />
          </button>
          <button
            type="button"
            className={`vlt__view-btn ${viewMode === 'grid' ? 'vlt__view-btn--active' : ''}`}
            onClick={() => onViewMode?.('grid')}
            title="Grid view"
          >
            <FaTableCells size={13} />
          </button>
        </div>
      </div>

      <p className="vlt__result-text">
        <strong>{Math.min(loadedCount, totalCount)}</strong> /{' '}
        <strong>{totalCount}</strong> araç gösteriliyor
      </p>
    </div>
  );
}
