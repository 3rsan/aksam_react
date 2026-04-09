import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl border border-slate-200 p-10 max-w-4xl mx-auto">
          <h5 className="text-2xl font-bold text-slate-900 pb-4 mb-6 border-b-2 border-emerald-500 inline-block">
            Aydınlatma Metni
          </h5>

          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            <strong className="text-slate-700">
              Aksam Otomotiv İç Ve Dış Ticaret Anonim Şirketi ("Aksam Otomotiv")
            </strong>{' '}
            olarak Veri Sorumlusu sıfatıyla sizi, 6698 sayılı Kişisel Verilerin
            Korunması Kanunu{' '}
            <strong className="text-slate-700">("KVKK")</strong>, ilgili tüm
            mevzuatlar ve kurul kararları uyarınca; aydınlatma yükümlülüğümüz
            çerçevesinde bilgilendirmek istiyoruz.
          </p>

          {/* 1. Tanımlar */}
          <h5 className="text-base font-bold text-slate-800 mt-8 mb-3">
            1. TANIMLAR
          </h5>

          <div className="flex flex-col gap-3 mb-4">
            {[
              {
                term: 'Kişisel Veri',
                def: 'Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi,',
              },
              {
                term: 'KVKK',
                def: "7 Nisan 2016 tarihinde Resmi Gazete'de yayınlanarak yürürlüğe giren 6698 sayılı Kişisel Verilerin Korunması Kanunu'nu,",
              },
              {
                term: 'Mevzuat',
                def: 'Kişisel Verilerin Korunmasına ilişkin hükümler içeren tüm kanunları, Kanun Hükmünde Kararnameleri, yönetmelikleri, tüzükleri,',
              },
              { term: 'Kurul', def: 'Kişisel Verileri Koruma Kurulunu,' },
              {
                term: 'Veri Sorumlusu',
                def: 'Kişisel Verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi,',
              },
              {
                term: 'Veri İşleyen',
                def: 'Veri sorumlusunun verdiği yetkiye dayanarak onun adına Kişisel Verileri işleyen gerçek veya tüzel kişiyi,',
              },
              {
                term: 'İlgili Kişi',
                def: 'Kişisel verisi işlenen gerçek kişiyi,',
              },
            ].map(({ term, def }) => (
              <div
                key={term}
                className="flex gap-2 text-sm text-slate-500 leading-relaxed"
              >
                <span className="font-semibold text-slate-700 min-w-fit">
                  {term}:
                </span>
                <span>{def}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 leading-relaxed mb-2">
            <strong className="text-slate-700">
              Aksam Otomotiv İç Ve Dış Ticaret Anonim Şirketi:
            </strong>{' '}
            İstanbul Ticaret Sicili nezdinde 463830-0 sicil numarası ile
            kayıtlı, şirket merkezi Maslak Mah. Sümer Sk. Ayazağa Ticaret
            Merkezi B Blok No: 1 B İç Kapı No: 9 Sarıyer/İstanbul adresinde
            bulunan veri sorumlusunu ifade eder.
          </p>

          {/* 2. İşlenen Kişisel Veriler */}
          <h5 className="text-base font-bold text-slate-800 mt-8 mb-3">
            2. İŞLENEN KİŞİSEL VERİLER
          </h5>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: 'Kimlik', value: 'Ad, Soyad' },
              {
                label: 'İletişim',
                value: 'Telefon numarası, e-posta adresi, adres',
              },
              { label: 'Müşteri İşlem', value: 'Mesaj içeriği' },
              { label: 'İşleme Güvenliği', value: 'IP Adresi' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-slate-50 rounded-lg border border-slate-200 p-3"
              >
                <p className="text-xs font-semibold text-emerald-600 mb-1">
                  {label}
                </p>
                <p className="text-sm text-slate-600">{value}</p>
              </div>
            ))}
          </div>

          {/* 3. İşlenme Amaçları */}
          <h5 className="text-base font-bold text-slate-800 mt-8 mb-3">
            3. KİŞİSEL VERİLERİNİZİN İŞLENME AMAÇLARI
          </h5>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            <strong className="text-slate-700">Aksam Otomotiv</strong>{' '}
            tarafından kişisel verileriniz, KVKK'nun 5. Maddesinde yer alan
            hukuki sebeplere dayalı olarak aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul className={styles.list}>
            <li>
              İnternet mevzuatından kaynaklanan yükümlülüklerin tespiti ve ifası
            </li>
            <li>
              İnternet sitesi yönetim ve işletim faaliyetlerinin
              gerçekleştirilmesi
            </li>
            <li>İletişim faaliyetlerinin yürütülmesi</li>
            <li>Sosyal medya hesaplarından haberdar etmek</li>
            <li>
              Şirkete ulaşım için harita uygulamaları kullanarak ulaşımı
              kolaylaştırmak
            </li>
            <li>Web sitesi deneyimini gözlemlemek ve iyileştirmek</li>
            <li>
              İş bağlantıları ve diğer üçüncü kişiler ile olan ilişkilerin
              yürütülmesi
            </li>
            <li>Üyelik işlemlerinin yürütülmesi</li>
          </ul>

          {/* 4. Toplama Yöntemleri */}
          <h5 className="text-base font-bold text-slate-800 mt-8 mb-3">
            4. KİŞİSEL VERİLERİNİZİN TOPLANMA YÖNTEMLERİ VE HUKUKİ SEBEBİ
          </h5>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Kişisel verileriniz; internet web sitesi, dijital ve basılı formlar
            ve çerezler aracılığıyla elektronik veya yazılı olarak, otomatik ve
            kısmen otomatik yöntemlerle toplanmaktadır.
          </p>
          <ul className={styles.list}>
            <li>Kanunlarda açıkça öngörülme</li>
            <li>
              Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için
              zorunlu olma
            </li>
          </ul>

          {/* 5. İşlenme Süresi */}
          <h5 className="text-base font-bold text-slate-800 mt-8 mb-3">
            5. KİŞİSEL VERİLERİNİZİN İŞLENME SÜRESİ
          </h5>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Kişisel Verileriniz, KVKK başta olmak üzere ilgili mevzuata uygun
            şekilde ve yukarıdaki amaçlar ortadan kalkmadığı müddetçe
            işlenecektir.{' '}
            <em>
              Örneğin; internet trafik kayıtları 5651 sayılı Kanun gereği azami
              2 yıl saklanmak zorundadır.
            </em>
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Haklarınıza ilişkin talebinizi aşağıdaki yöntemlerle
            iletebilirsiniz:
          </p>
          <ul className={styles.list}>
            <li>
              KVK Kurulu tarafından ayrı bir yöntem belirlenmesi halinde bu
              yöntem ile
            </li>
            <li>
              Aşağıdaki e-posta adresimize{' '}
              <strong className="text-slate-700">
                "İlgili Kişi Başvuru Formu"
              </strong>
              nu doldurarak
            </li>
            <li>
              Posta adresimize kimliğinizi tespit edici belgeler ile{' '}
              <strong className="text-slate-700">
                "İlgili Kişi Başvuru Formu"
              </strong>
              nu doldurarak, ıslak imzalı dilekçe ile elden veya noter
              aracılığıyla
            </li>
          </ul>

          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            <strong className="text-slate-700">Aksam Otomotiv</strong> talebi en
            kısa sürede ve en geç{' '}
            <strong className="text-slate-700">30 (otuz) gün</strong> içerisinde
            ücretsiz olarak sonuçlandıracaktır.
          </p>

          {/* İletişim Kartı */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col gap-2">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
              İletişim Bilgileri
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-700 min-w-32">
                Posta Adresi
              </span>
              <span>
                Maslak Mah. Sümer Sk. Ayazağa Ticaret Merkezi B Blok No: 1 B İç
                Kapı No: 9 Sarıyer/İstanbul
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-700 min-w-32">
                E-posta
              </span>
              <a
                href="mailto:info@aksamoto.com.tr"
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                info@aksamoto.com.tr
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-700 min-w-32">
                Telefon
              </span>
              <a
                href="tel:4441548"
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                444 15 48
              </a>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed mt-6 italic">
            İşbu Aydınlatma Metni web sitesinde yayımlandığı tarihte yürürlüğe
            girer. Aksam Otomotiv işbu Aydınlatma Metnini, yasal mevzuat
            değişikliği yahut gerekli değişikliklerin yapılmasının zorunlu
            olduğu hallerde tamamen veya kısmen değiştirebilir ve
            güncelleyebilir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
