import styles from "../AboutPage.module.scss";

const milestones = [
  {
    year: "1989",
    title: "Telli Grup",
    desc: "1989 yılında tekstil, reklamcılık ve üretim faaliyetleriyle ticaret hayatına ilk adımlar atılmıştır.",
  },
  {
    year: "2001",
    title: "Aksam Otomotiv",
    desc: "Telli Grup bünyesinde kurulan Aksam Otomotiv, yılda 16.000+ aracın toplu alımını gerçekleştiren öncü şirket konumuna gelmiştir.",
  },
  {
    year: "2007",
    title: "HYS Hasar Yönetim Sistemi",
    desc: "Eksper, servis ve sigorta şirketleri arasındaki tüm operasyonel süreçleri yıllık 72.000 hasar dosyasıyla yöneten ilk ve tek şirket.",
  },
  {
    year: "2010",
    title: "Ekosistem Geri Dönüşüm",
    desc: "Hasarlı ve çıkma parçalara yönelik çözümler üretmek ve ekonomiye kazandırmak amacıyla faaliyete geçirilmiştir.",
  },
  {
    year: "2011",
    title: "İstanbul Yap",
    desc: "Konut, işmerkezi ve ticari gayrimenkul alanlarında marka yaratma odaklı iş modeliyle faaliyete başlamıştır.",
  },
  {
    year: "2013",
    title: "Autogong",
    desc: "50'den fazla sigorta şirketi ve filo şirketleri ile iş icra eden ihale portalı faaliyete geçirilmiştir.",
  },
  {
    year: "2015",
    title: "Ekoparça",
    desc: "Modern lojistik anlayışı ve internet tabanlı altyapısıyla ekonomik ve ihtiyaca uygun çözümler sunan platform kurulmuştur.",
  },
  {
    year: "2022",
    title: "Emak Invest",
    desc: "Konut üretimi ve satışı gerçekleştirmek üzere inşaat faaliyetlerine başlamıştır.",
  },
  {
    year: "2023",
    title: "Ecomobil",
    desc: "Elektrikli araç şarj çözümleri sunan, yeşil gelecek odaklı yenilikçi şirket olarak kurulmuştur.",
  },
];

const Timeline = () => (
  <div
    id="Kilometre-Taslari"
    className="bg-white rounded-xl border border-slate-200 p-8"
  >
    <h5 className="text-xl font-bold text-slate-900 pb-3 mb-8 border-b-2 border-red-500 inline-block">
      Kilometre Taşları
    </h5>
    <div className={styles.timeline}>
      {milestones.map(({ year, title, desc }) => (
        <div key={year} className={styles.timelineItem}>
          <div className={styles.timelineYear}>{year}</div>
          <div className={styles.timelineDot} />
          <div className={styles.timelineContent}>
            <h3 className="text-sm font-bold text-slate-800 mb-1">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
