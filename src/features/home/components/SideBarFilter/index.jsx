import { useState, memo } from 'react';
import {
  FaChevronDown,
  FaMagnifyingGlass,
  FaCheck,
  FaListUl,
} from 'react-icons/fa6';
import './styles.scss';
import useVehicleStore from '../../../../app/store/useVehicleStore';
import AccordionSection from './AccordionSection';

const currentYear = new Date().getFullYear();
const YILLAR = Array.from({ length: currentYear - 1999 }, (_, i) =>
  String(currentYear - i),
);

function CheckList({ items, name, checked, onChange, scrollable = true }) {
  return (
    <ul className={`sf-checklist ${scrollable ? 'sf-checklist--scroll' : ''}`}>
      {items.map((item) => {
        const val =
          item.value ??
          String(
            item.id ??
              item.marka_ref_no ??
              item.arac_turu_ref_no ??
              item.yakit_turu_ref_no ??
              item.vites_turu_ref_no,
          );
        const label =
          item.label ??
          item.marka ??
          item.arac_turu ??
          item.yakit_turu ??
          item.vites_turu;
        const isChecked = checked.includes(val);
        return (
          <li key={val}>
            <label
              className={`sf-check ${isChecked ? 'sf-check--active' : ''}`}
            >
              <input
                type="checkbox"
                name={`${name}[]`}
                value={val}
                checked={isChecked}
                onChange={() => onChange(val)}
                className="sr-only"
              />
              <span className="sf-check__box">
                {isChecked && <FaCheck size={8} />}
              </span>
              <span className="sf-check__label">{label}</span>
              {item.count !== undefined && (
                <span className="sf-check__count">{item.count}</span>
              )}
              {item.arac_sayisi !== undefined && (
                <span className="sf-check__count">{item.arac_sayisi}</span>
              )}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

function MarkaList({ markalar }) {
  return (
    <ul className="sf-checklist sf-checklist--scroll">
      {markalar.map((m) => {
        const id = m.id ?? m.marka_ref_no;
        const label = m.label ?? m.marka;
        const count = m.count ?? m.arac_sayisi;
        return (
          <li key={id}>
            <a href={`/marka/${id}/${label}`} className="sf-marka-link">
              <span>{label}</span>
              <span className="sf-check__count">{count}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function RangeInputs({
  minName,
  maxName,
  minPlaceholder,
  maxPlaceholder,
  minValue,
  maxValue,
  onChange,
}) {
  return (
    <div className="sf-range">
      <input
        type="number"
        name={minName}
        placeholder={minPlaceholder}
        value={minValue}
        onChange={(e) => onChange('min', e.target.value)}
        className="sf-range__input"
        min="0"
      />
      <span className="sf-range__sep">—</span>
      <input
        type="number"
        name={maxName}
        placeholder={maxPlaceholder}
        value={maxValue}
        onChange={(e) => onChange('max', e.target.value)}
        className="sf-range__input"
        min="0"
      />
    </div>
  );
}

export default memo(function SidebarFilter({ onFilter }) {
  const filters = useVehicleStore((state) => state.filters);
  const setActiveFilters = useVehicleStore((state) => state.setActiveFilters);
  const clearFilters = useVehicleStore((state) => state.clearFilters);

  const [ihaleRefNo, setIhaleRefNo] = useState('');
  const [aracTuru, setAracTuru] = useState([]);
  const [modelYili, setModelYili] = useState([]);
  const [yakitTuru, setYakitTuru] = useState([]);
  const [vitesTuru, setVitesTuru] = useState([]);
  const [fiyat, setFiyat] = useState({ min: '', max: '' });
  const [km, setKm] = useState({ min: '', max: '' });

  function toggle(setter, value) {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const params = {
      ...(ihaleRefNo && { ihaleRefNo }),
      ...(aracTuru.length && { aracTuru }),
      ...(modelYili.length && { modelYili }),
      ...(yakitTuru.length && { yakitTuru }),
      ...(vitesTuru.length && { vitesTuru }),
      ...(km.min && { kmMin: km.min }),
      ...(km.max && { kmMax: km.max }),
    };
    setActiveFilters(params);
    onFilter?.(params);
  }

  function handleReset() {
    setIhaleRefNo('');
    setAracTuru([]);
    setModelYili([]);
    setYakitTuru([]);
    setVitesTuru([]);
    setFiyat({ min: '', max: '' });
    setKm({ min: '', max: '' });
    clearFilters();
  }

  return (
    <aside className="sf">
      {/* Arama */}
      <div className="sf-search">
        <div className="sf-search__icon">
          <FaMagnifyingGlass size={13} />
        </div>
        <input
          type="text"
          placeholder="Araç No ile Ara"
          value={ihaleRefNo}
          onChange={(e) => setIhaleRefNo(e.target.value)}
          className="sf-search__input"
        />
      </div>

      <div className="sf-divider" />

      {/* Markalar */}
      <AccordionSection title="Markalara Göre Kategori" defaultOpen>
        {filters.markalar.length > 0 ? (
          <MarkaList markalar={filters.markalar} />
        ) : (
          <p className="sf-empty">Yükleniyor...</p>
        )}
      </AccordionSection>

      <div className="sf-divider" />

      <form onSubmit={handleSubmit}>
        {/* Araç Tipi */}
        <AccordionSection title="Araç Tipi" defaultOpen>
          {filters.aracTuru.length > 0 ? (
            <CheckList
              items={filters.aracTuru.map((a) => ({
                value: String(a.arac_turu_ref_no),
                label: a.arac_turu,
              }))}
              name="aracTuru"
              checked={aracTuru}
              onChange={(v) => toggle(setAracTuru, v)}
            />
          ) : (
            <p className="sf-empty">Yükleniyor...</p>
          )}
        </AccordionSection>

        <div className="sf-divider" />

        {/* Yıl */}
        <AccordionSection title="Yıl">
          <CheckList
            items={YILLAR.map((y) => ({ value: y, label: y }))}
            name="modelYili"
            checked={modelYili}
            onChange={(v) => toggle(setModelYili, v)}
          />
        </AccordionSection>

        <div className="sf-divider" />

        {/* Fiyat */}
        <AccordionSection title="Fiyat Aralığı">
          <RangeInputs
            minName="fiyatKucuk"
            maxName="fiyatBuyuk"
            minPlaceholder="Min ₺"
            maxPlaceholder="Max ₺"
            minValue={fiyat.min}
            maxValue={fiyat.max}
            onChange={(side, val) => setFiyat((p) => ({ ...p, [side]: val }))}
          />
        </AccordionSection>

        <div className="sf-divider" />

        {/* KM */}
        <AccordionSection title="Km Aralığı">
          <RangeInputs
            minName="aracKMKucuk"
            maxName="aracKMBuyuk"
            minPlaceholder="Min km"
            maxPlaceholder="Max km"
            minValue={km.min}
            maxValue={km.max}
            onChange={(side, val) => setKm((p) => ({ ...p, [side]: val }))}
          />
        </AccordionSection>

        <div className="sf-divider" />

        {/* Yakıt */}
        <AccordionSection title="Yakıt">
          {filters.yakitTuru.length > 0 ? (
            <CheckList
              items={filters.yakitTuru.map((y) => ({
                value: String(y.yakit_turu_ref_no),
                label: y.yakit_turu,
              }))}
              name="yakitTuru"
              checked={yakitTuru}
              onChange={(v) => toggle(setYakitTuru, v)}
              scrollable={false}
            />
          ) : (
            <p className="sf-empty">Yükleniyor...</p>
          )}
        </AccordionSection>

        <div className="sf-divider" />

        {/* Vites */}
        <AccordionSection title="Vites">
          {filters.vitesTuru.length > 0 ? (
            <CheckList
              items={filters.vitesTuru.map((v) => ({
                value: String(v.vites_turu_ref_no),
                label: v.vites_turu,
              }))}
              name="vitesTuru"
              checked={vitesTuru}
              onChange={(v) => toggle(setVitesTuru, v)}
              scrollable={false}
            />
          ) : (
            <p className="sf-empty">Yükleniyor...</p>
          )}
        </AccordionSection>

        {/* Butonlar */}
        <div className="sf-actions">
          <button type="submit" className="sf-btn sf-btn--primary">
            <FaListUl size={12} />
            Araç Listele
          </button>
          <button
            type="button"
            className="sf-btn sf-btn--ghost"
            onClick={handleReset}
          >
            Temizle
          </button>
        </div>
      </form>
    </aside>
  );
});
