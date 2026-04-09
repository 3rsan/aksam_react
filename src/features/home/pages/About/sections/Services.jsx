import styles from '../AboutPage.module.scss';

const services = [
  'Piyasa Rayiç Çalışması',
  'Noter İşlemleri',
  'Mali Sorgular',
  'Sigortalılarla Pert Mutabakat Görüşmeleri ve Operasyon Hizmetleri',
  'Çalıntı Araçlar Park Ve Barındırma',
  'Temyiz ve Tescil İşlemleri',
  'Afet Kriz Yönetim Desteği',
  'İş Modeli Kapsamında Araçların Çekimi, Otopark ve Çekici Hizmeti',
  'Müşteri Hizmetleri',
  'Hasar Danışmanlığı',
  'Müşavirlik Hizmetleri',
  'Hukuksal Danışmanlık',
  'Dönemsel Araç Piyasa Analizi',
  'Satış Sonrası Destek',
  'Sigorta Hasar Dosya Yönetimi',
];

const Services = () => (
  <div
    id="Hizmetlerimiz"
    className="bg-white rounded-xl border border-slate-200 p-8"
  >
    <h5 className="text-xl font-bold text-slate-900 pb-3 mb-5 border-b-2 border-emerald-500 inline-block">
      Hizmetlerimiz
    </h5>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {services.map((s) => (
        <li key={s} className={styles.bulletItem}>
          {s}
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
