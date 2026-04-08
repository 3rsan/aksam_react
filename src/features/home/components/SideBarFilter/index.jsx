import { useState } from 'react';
import {
  FaChevronDown,
  FaMagnifyingGlass,
  FaCheck,
  FaListUl,
} from 'react-icons/fa6';
import './styles.scss';

// ── Statik veriler ───────────────────────────────────────
const MARKALAR = [
  { id: 9, label: 'AUDI', count: 2 },
  { id: 19, label: 'SEAT', count: 2 },
  { id: 21, label: 'BMW', count: 4 },
  { id: 34, label: 'CITROEN', count: 1 },
  { id: 52, label: 'FIAT', count: 2 },
  { id: 53, label: 'FORD', count: 6 },
  { id: 90, label: 'MERCEDES', count: 2 },
  { id: 107, label: 'NISSAN', count: 1 },
  { id: 114, label: 'PEUGEOT', count: 3 },
  { id: 123, label: 'RENAULT', count: 3 },
  { id: 133, label: 'SKODA', count: 1 },
  { id: 138, label: 'SCANIA', count: 2 },
  { id: 144, label: 'TOYOTA', count: 2 },
  { id: 153, label: 'VOLKSWAGEN', count: 3 },
  { id: 177, label: 'HYUNDAI', count: 3 },
  { id: 430, label: 'JEEP', count: 1 },
  { id: 600, label: 'MOTORSİKLET', count: 1 },
  { id: 800, label: 'KIA', count: 2 },
  { id: 10008, label: 'IVECO', count: 1 },
  { id: 10010, label: 'RENAULT TRUCKS', count: 1 },
  { id: 10182, label: 'MG', count: 1 },
  { id: 10184, label: 'TOGG', count: 1 },
];

const ARAC_TIPLERI = [
  { value: '14', label: 'AĞIR TİCARİ' },
  { value: '11', label: 'BETON MİKSERİ' },
  { value: '1', label: 'BİNEK' },
  { value: '7', label: 'ÇEKİCİ' },
  { value: '4', label: 'DORSE' },
  { value: '13', label: 'HAFİF TİCARİ' },
  { value: '21', label: 'HAFİF TİCARİ (Soğutucu Dahil)' },
  { value: '9', label: 'İŞ MAKİNESİ' },
  { value: '15', label: 'KABİN' },
  { value: '2', label: 'KAMYON' },
  { value: '8', label: 'KAMYONET' },
  { value: '19', label: 'KAMYONET (Kasa Dahil)' },
  { value: '22', label: 'KAMYONET (Kasa ve Soğutucu Dahil)' },
  { value: '20', label: 'KAMYON (Kasa Dahil)' },
  { value: '23', label: 'KAMYON (Kasa ve Soğutucu Dahil)' },
  { value: '16', label: 'MİNİBÜS' },
  { value: '5', label: 'MOTOSİKLET' },
  { value: '6', label: 'OTOBÜS' },
  { value: '17', label: 'ÖZEL AMAÇLI' },
  { value: '12', label: 'SİLOBAS' },
  { value: '10', label: 'TİCARİ' },
  { value: '3', label: 'TRAKTÖR' },
];

const YAKITLAR = [
  { value: '1', label: 'BENZİN' },
  { value: '6', label: 'BENZİN / ELEKTRİK' },
  { value: '2', label: 'BENZİN / LPG' },
  { value: '5', label: 'CNG' },
  { value: '3', label: 'DİZEL' },
  { value: '7', label: 'DİZEL / ELEKTRİK' },
  { value: '4', label: 'ELEKTRİKLİ' },
];

const VITESLER = [
  { value: '2', label: 'MANUEL' },
  { value: '1', label: 'OTOMATİK' },
];

const currentYear = new Date().getFullYear();
const YILLAR = Array.from({ length: currentYear - 1999 }, (_, i) =>
  String(currentYear - i),
);

// ── Alt bileşenler ───────────────────────────────────────

/** Akordiyon bölümü */
function AccordionSection({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="sf-accordion">
      <button
        className="sf-accordion__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`sf-accordion__arrow ${open ? 'sf-accordion__arrow--open' : ''}`}
        />
      </button>

      <div
        className={`sf-accordion__body ${open ? 'sf-accordion__body--open' : ''}`}
      >
        <div className="sf-accordion__inner">{children}</div>
      </div>
    </div>
  );
}

/** Scrollable checkbox listesi */
function CheckList({ items, name, checked, onChange, scrollable = true }) {
  return (
    <ul className={`sf-checklist ${scrollable ? 'sf-checklist--scroll' : ''}`}>
      {items.map((item) => {
        const val = item.value ?? String(item.id);
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
              <span className="sf-check__label">{item.label}</span>
              {item.count !== undefined && (
                <span className="sf-check__count">{item.count}</span>
              )}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

/** Marka linkleri (link olarak kalıyor, state değil) */
function MarkaList({ markalar }) {
  return (
    <ul className="sf-checklist sf-checklist--scroll">
      {markalar.map((m) => (
        <li key={m.id}>
          <a href={`/marka/${m.id}/${m.label}`} className="sf-marka-link">
            <span>{m.label}</span>
            <span className="sf-check__count">{m.count}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Range input çifti */
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

// ── Ana bileşen ──────────────────────────────────────────
export default function SidebarFilter({ onFilter }) {
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
    onFilter?.({
      ihaleRefNo,
      aracTuru,
      modelYili,
      yakitTuru,
      vitesTuru,
      fiyat,
      km,
    });
  }

  function handleReset() {
    setIhaleRefNo('');
    setAracTuru([]);
    setModelYili([]);
    setYakitTuru([]);
    setVitesTuru([]);
    setFiyat({ min: '', max: '' });
    setKm({ min: '', max: '' });
  }

  return (
    <aside className="sf">
      {/* ── Arama ── */}
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

      {/* ── Markalar ── */}
      <AccordionSection title="Markalara Göre Kategori" defaultOpen>
        <MarkaList markalar={MARKALAR} />
      </AccordionSection>

      <div className="sf-divider" />

      <form onSubmit={handleSubmit}>
        {/* ── Araç Tipi ── */}
        <AccordionSection title="Araç Tipi" defaultOpen>
          <CheckList
            items={ARAC_TIPLERI}
            name="aracTuru"
            checked={aracTuru}
            onChange={(v) => toggle(setAracTuru, v)}
          />
        </AccordionSection>

        <div className="sf-divider" />

        {/* ── Yıl ── */}
        <AccordionSection title="Yıl">
          <CheckList
            items={YILLAR.map((y) => ({ value: y, label: y }))}
            name="modelYili"
            checked={modelYili}
            onChange={(v) => toggle(setModelYili, v)}
          />
        </AccordionSection>

        <div className="sf-divider" />

        {/* ── Fiyat Aralığı ── */}
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

        {/* ── KM Aralığı ── */}
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

        {/* ── Yakıt ── */}
        <AccordionSection title="Yakıt">
          <CheckList
            items={YAKITLAR}
            name="yakitTuru"
            checked={yakitTuru}
            onChange={(v) => toggle(setYakitTuru, v)}
            scrollable={false}
          />
        </AccordionSection>

        <div className="sf-divider" />

        {/* ── Vites ── */}
        <AccordionSection title="Vites">
          <CheckList
            items={VITESLER}
            name="vitesTuru"
            checked={vitesTuru}
            onChange={(v) => toggle(setVitesTuru, v)}
            scrollable={false}
          />
        </AccordionSection>

        {/* ── Butonlar ── */}
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
}
