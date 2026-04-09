const AboutUs = () => (
  <div
    id="Bize-Dair"
    className="bg-white rounded-xl border border-slate-200 p-8"
  >
    <h5 className="text-xl font-bold text-slate-900 pb-3 mb-5 border-b-2 border-emerald-500 inline-block">
      Bize Dair
    </h5>
    <div className="flex flex-col gap-4 text-sm text-slate-500 leading-relaxed">
      <p>
        Sigorta ve otomotiv sektörlerine yönelik iş alanlarında hizmet veren;
        Aksam Otomotiv, HYS Hasar Yönetim Sistemi, Ekosistem Geri Dönüşüm,
        Autogong Marketplace ve Ekoparça şirketlerini tek bir çatı altında
        toplayan ticari oluşumun temelleri, 1989 yılında atılmıştır.
      </p>
      <p>
        Araçların toplu alımını gerçekleştirip kendi satış noktalarında direkt
        tüketici ile buluşturularak pazarlamasını yapan{' '}
        <strong className="text-slate-700">Aksam Otomotiv</strong>, ihale ile
        satışa sunumunu sağlayan{' '}
        <strong className="text-slate-700">Autogong</strong>, ömrünü tamamlamış
        araçların geri dönüşümünü gerçekleştiren{' '}
        <strong className="text-slate-700">Ekosistem Geri Dönüşüm</strong> ve{' '}
        <strong className="text-slate-700">Ekoparça</strong>, tüm operasyonel
        süreçleri yöneten{' '}
        <strong className="text-slate-700">HYS Hasar Yönetim Sistemi</strong>{' '}
        ile otomotiv ve sigorta sektöründe 360° hizmet sunulmaktadır.
      </p>
      <p>
        Grup bünyesinde Otomotiv ve Sigorta sektörleri haricinde Geri Dönüşüm,
        Gayrimenkul ve Enerji sektörlerinde de faaliyet gösterilmektedir.
      </p>
      <img
        src="https://aksamoto.com.tr/assets/img/tarihce.png"
        alt="Tarihçe | Aksam Otomotiv"
        className="w-full rounded-lg mt-2"
      />
    </div>
  </div>
);

export default AboutUs;
