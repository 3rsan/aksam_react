const values = [
  {
    title: "Kalite",
    quote: "Kalite düzeyini hizmet verdiğimiz her alana yansıtırız.",
    desc: "Aksam Otomotiv kaliteyi bir yaşam biçimi olarak benimser. Yaptığı her işte en üst kalite düzeyini hedef alır.",
  },
  {
    title: "Güvenilirlik",
    quote: "İş ahlakının ilkeleri, iş yaşamımızın temelini oluşturur.",
    desc: "Güvenilirlik ve dürüstlük öncelikli değerlerdir. Aksam Otomotiv verdiği sözü yerine getirir.",
  },
  {
    title: "Liderlik",
    quote: "Girişimci ruhumuzla yeniliğe öncülük ederiz.",
    desc: "35 yıllık deneyimiyle pazarın en iyisi olmayı hedefler ve inovasyon becerisiyle pazarı yönlendirir.",
  },
  {
    title: "Gönülden Çalışmak",
    quote: "Fark yaratacağına inandığımız projeler için gönülden çalışırız.",
    desc: "Her ihtiyaca ve her bütçeye uygun ürün/hizmet sunmak tüm çalışanların temel değerlerindendir.",
  },
  {
    title: "Samimiyet",
    quote: "İşimize sadece zihnen değil kalben de bağlıyız.",
    desc: "Tüm paydaşlarıyla olan ilişkilerin merkezine sevgi, saygı ve güveni koyar.",
  },
  {
    title: "Sorumluluk",
    quote:
      "Dünyamızı gelecek nesillere en iyi şekilde aktarmak öncelikli hedefimizdir.",
    desc: "İnsana, doğaya, çevresine ve küresel dengelere karşı duyarlıdır.",
  },
];

const Values = () => (
  <div
    id="Degerlerimiz"
    className="bg-white rounded-xl border border-slate-200 p-8"
  >
    <h5 className="text-xl font-bold text-slate-900 pb-3 mb-6 border-b-2 border-red-500 inline-block">
      Değerlerimiz
    </h5>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {values.map(({ title, quote, desc }) => (
        <div
          key={title}
          className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex flex-col gap-2"
        >
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">
            {title}
          </p>
          <blockquote className="text-sm italic text-slate-600 border-l-2 border-red-400 pl-3">
            {quote}
          </blockquote>
          <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Values;
