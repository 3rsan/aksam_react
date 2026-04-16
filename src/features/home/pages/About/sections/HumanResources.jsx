import styles from "../AboutPage.module.scss";

const HumanResources = () => (
  <div
    id="Insan-Kaynaklari"
    className="bg-white rounded-xl border border-slate-200 p-8"
  >
    <h5 className="text-xl font-bold text-slate-900 pb-3 mb-6 border-b-2 border-red-500 inline-block">
      İnsan Kaynakları
    </h5>
    <div className="flex flex-col gap-6 text-sm text-slate-500 leading-relaxed">
      <p>
        Şirket ana stratejilerinden biri olan çalışanlarımızın bağlılığını ve
        motivasyonunu artırmak amacıyla düzenlediğimiz çeşitli etkinliklerle
        çalışanların birlikteliğini hedeflemekteyiz.
      </p>

      {[
        {
          heading: "Eğitim",
          text: 'Yeni nesil eğitim olan e-learning platformumuz "Telligrup Akademi" ile tüm çalışanlarımız için mesleki eğitimlerin yanı sıra kişisel gelişim imkanları da sunuyoruz.',
        },
        {
          heading: "Performans Yönetimi",
          text: "Hedeflerle yönetilen yetkinlik bazlı performans değerlendirme sistemini uygulayan Aksam Otomotiv, çalışanın görev ve sorumluluklarının yerine getirilmesine özen gösterir.",
        },
        {
          heading: "Kariyer Planlama – Yedekleme",
          text: "Performans Değerlendirme sistemi ve assessment testleri sonucu elde edilen veriler kariyer planlamasının temelini oluşturmakta ve somut değerlendirmeler yapılmaktadır.",
        },
        {
          heading: "İzin Politikası",
          text: "İş Kanunu doğrultusunda izin politikası uygulamaktayız.",
        },
        {
          heading: "Ücretlendirme Sistemi ve Yan Haklar",
          text: "Ücret bantları adil ve tutarlı sistemlerle belirlenir. Üstün performans gösteren çalışanlar katkıları ile doğru orantılı olarak ödüllendirilir.",
        },
        {
          heading: "Motivasyon ve Ödüllendirme",
          text: "Doğum günü kutlaması, hoş geldin programı ve yeteneklerin ödüllendirildiği etkinliklerimiz ile daha güçlü ekip birlikteliği hedeflemekteyiz.",
        },
      ].map(({ heading, text }) => (
        <div key={heading}>
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">
            {heading}
          </p>
          <p>{text}</p>
        </div>
      ))}

      {/* Çalışma Saatleri */}
      <div>
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-3">
          Çalışma Saatlerimiz
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              loc: "Genel Müdürlük",
              weekday: "08:30 – 18:30",
              sat: "Tatil",
              sun: "Tatil",
            },
            {
              loc: "Diğer Lokasyonlar",
              weekday: "08:30 – 18:30",
              sat: "08:30 – 17:00",
              sun: "Tatil",
            },
          ].map(({ loc, weekday, sat, sun }) => (
            <div
              key={loc}
              className="bg-slate-50 rounded-xl border border-slate-200 p-4"
            >
              <p className="font-semibold text-slate-700 mb-2">{loc}</p>
              <p className="text-xs text-slate-400 mb-0.5">Hafta İçi</p>
              <p className="text-sm text-slate-600 mb-2">{weekday}</p>
              <p className="text-xs text-slate-400 mb-0.5">Cumartesi</p>
              <p className="text-sm text-slate-600 mb-2">{sat}</p>
              <p className="text-xs text-slate-400 mb-0.5">Pazar</p>
              <p className="text-sm text-slate-600">{sun}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Yan Haklar */}
      <div>
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
          Yan Haklar
        </p>
        <ul className="flex flex-col gap-1">
          {[
            "Prim sistemi",
            "Özel sağlık sigortası",
            "Evlilik, doğum ve ölüm yardımı",
            "Metropol Card ile yemek ödemesi",
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

export default HumanResources;
