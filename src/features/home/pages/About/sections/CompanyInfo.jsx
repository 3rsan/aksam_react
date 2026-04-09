const fields = [
  { label: 'Şirket Türü', value: 'Anonim Şirketi' },
  { label: 'Mersis', value: '0034017496800013' },
  { label: 'Ticaret Sicil Memurluğu', value: 'İstanbul Ticaret Odası' },
  { label: 'Ticaret Sicil Numarası', value: '463830' },
  { label: 'Ticaret Ünvanı', value: 'Aksam Otomotiv İç ve Dış Tic. A.Ş.' },
  { label: 'Şirket Tescil Tarihi', value: '05/10/2001' },
  { label: 'Vergi Dairesi', value: 'Maslak' },
  { label: 'Vergi Numarası', value: '034 017 4968' },
  { label: 'Sektör', value: 'Otomotiv / Hizmet' },
];

const CompanyInfo = () => (
  <div
    id="Bilgi-Toplumu"
    className="bg-white rounded-xl border border-slate-200 p-8"
  >
    <h5 className="text-xl font-bold text-slate-900 pb-3 mb-6 border-b-2 border-emerald-500 inline-block">
      Bilgi Toplumu
    </h5>
    <div className="flex flex-col divide-y divide-slate-100">
      {fields.map(({ label, value }) => (
        <div
          key={label}
          className="flex justify-between items-center py-3 text-sm"
        >
          <span className="font-semibold text-slate-700">{label}</span>
          <span className="text-slate-500">{value}</span>
        </div>
      ))}
      <div className="flex justify-between items-center py-3 text-sm">
        <span className="font-semibold text-slate-700">Adres</span>
        <a
          href="https://www.google.com/maps/dir//Maslak"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-600 hover:text-emerald-700 transition-colors text-right max-w-xs"
        >
          Maslak Mah. Sümer Sk. No:3 B Blok Kat:9 Sarıyer/İstanbul
        </a>
      </div>
      <div className="flex justify-between items-center py-3 text-sm">
        <span className="font-semibold text-slate-700">Telefon</span>
        <a
          href="tel:02124441548"
          className="text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          0212 444 15 48
        </a>
      </div>
      <div className="flex justify-between items-center py-3 text-sm">
        <span className="font-semibold text-slate-700">Web Adresi</span>
        <a
          href="https://www.aksamoto.com"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          www.aksamoto.com
        </a>
      </div>
    </div>
  </div>
);

export default CompanyInfo;
