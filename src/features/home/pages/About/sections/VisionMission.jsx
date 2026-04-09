import styles from '../AboutPage.module.scss';

const VisionMission = () => (
  <div
    id="Vizyon-ve-Misyon"
    className="bg-white rounded-xl border border-slate-200 p-8"
  >
    <h5 className="text-xl font-bold text-slate-900 pb-3 mb-6 border-b-2 border-emerald-500 inline-block">
      Vizyon & Misyon
    </h5>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-3">
          Vizyonumuz
        </p>
        <ul className="flex flex-col gap-2">
          {[
            'Yürüttüğü faaliyet konularında ülkenin önde gelen saygın ve güvenilir kuruluşlarından biri olmak.',
            'Müşterilerimizin ihtiyaçlarına en kapsamlı çözümleri sunarken bölgesel ve global anlamda daha büyük yatırımların altına imzamızı atmak.',
          ].map((item) => (
            <li key={item} className={styles.bulletItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-3">
          Misyonumuz
        </p>
        <ul className="flex flex-col gap-2">
          {[
            'Yüksek kalite ve standartlarda ürün ve hizmetler sunarken müşterilerini memnun etmek.',
            'Çalışanlarıyla birlikte sürekli gelişmek ve insan odaklı kurum kültürünü sahiplenmek.',
            'Güçlü ortaklıklar kurarak tüm paydaşları için değer yaratan bir şirket olmak.',
          ].map((item) => (
            <li key={item} className={styles.bulletItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default VisionMission;
