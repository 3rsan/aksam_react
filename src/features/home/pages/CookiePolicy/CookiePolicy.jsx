import styles from './CookiePolicy.module.scss';

const CookiePolicy = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl border border-slate-200 p-10 max-w-4xl mx-auto">
          <h5 className="text-2xl font-bold text-slate-900 pb-4 mb-6 border-b-2 border-emerald-500 inline-block">
            Çerez Politikası
          </h5>

          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Web sitemizden en verimli şekilde faydalanabilmeniz ve kullanıcı
            deneyiminizi geliştirebilmek için çerezleri kullanıyoruz. Çerezlerin
            kullanılmasını tercih etmezseniz tarayıcınızın ayarlarından
            çerezleri silebilir ya da engelleyebilirsiniz. Ancak bunun web
            sitemizi kullanımınızı etkileyebileceğini hatırlatmak isteriz.
            Tarayıcınızdan çerez ayarlarınızı değiştirmediğiniz sürece bu sitede
            çerez kullanımını kabul ettiğinizi varsayacağız.
          </p>

          {/* Bölüm 1 */}
          <h6 className="text-base font-semibold text-emerald-600 mt-8 mb-3">
            Çerez Nedir ve Neden Kullanılmaktadır?
          </h6>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar
            aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin
            dosyalarıdır.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Web sitemizde çerez kullanılmasının başlıca amaçları aşağıda
            sıralanmaktadır:
          </p>

          <ul className={styles.list}>
            <li>
              İnternet sitesinin işlevselliğini ve performansını arttırmak
              yoluyla sizlere sunulan hizmetleri geliştirmek,
            </li>
            <li>
              İnternet sitesini iyileştirmek ve internet sitesi üzerinden yeni
              özellikler sunmak ve sunulan özellikleri sizlerin tercihlerine
              göre kişiselleştirmek,
            </li>
            <li>
              İnternet sitesinin, sizin ve şirketimizin hukuki ve ticari
              güvenliğinin teminini sağlamak.
            </li>
          </ul>

          {/* Bölüm 2 */}
          <h6 className="text-base font-semibold text-emerald-600 mt-8 mb-3">
            İnternet Sitemizde Kullanılan Çerez Türleri
          </h6>

          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="w-48 p-4 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200 align-top">
                    Oturum Çerezleri
                    <em className="block not-italic font-normal text-xs text-slate-400 mt-1">
                      (Session Cookies)
                    </em>
                  </td>
                  <td className="p-4 text-slate-500 leading-relaxed align-top space-y-2">
                    <p>
                      Oturum çerezleri ziyaretçilerimizin internet sitesini
                      ziyaretleri süresince kullanılan, tarayıcı kapatıldıktan
                      sonra silinen geçici çerezlerdir.
                    </p>
                    <p>
                      Bu tür çerezlerin kullanılmasının temel amacı ziyaretiniz
                      süresince internet sitesinin düzgün bir biçimde
                      çalışmasının teminini sağlamaktır.
                    </p>
                    <p>
                      Örneğin; birden fazla sayfadan oluşan çevrimiçi formları
                      doldurmanız sağlanmaktadır.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-48 p-4 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200 align-top">
                    Kalıcı Çerezler
                    <em className="block not-italic font-normal text-xs text-slate-400 mt-1">
                      (Persistent Cookies)
                    </em>
                  </td>
                  <td className="p-4 text-slate-500 leading-relaxed align-top space-y-2">
                    <p>
                      Kalıcı çerezler internet sitesinin işlevselliğini
                      artırmak, ziyaretçilerimize daha hızlı ve iyi bir hizmet
                      sunmak amacıyla kullanılan çerez türleridir.
                    </p>
                    <p>
                      Bu tür çerezler tercihlerinizi hatırlamak için kullanılır.
                    </p>
                    <p>
                      Kalıcı çerezler sayesinde internet sitemizi aynı cihazla
                      tekrardan ziyaret etmeniz durumunda size daha iyi bir
                      hizmet sunulur.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bölüm 3 */}
          <h6 className="text-base font-semibold text-emerald-600 mt-8 mb-3">
            İnternet Sitemizde Kullanılan Çerezler
          </h6>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="w-48 p-4 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200 align-top">
                    Otantikasyon Çerezleri
                    <em className="block not-italic font-normal text-xs text-slate-400 mt-1">
                      (Authentication Cookies)
                    </em>
                  </td>
                  <td className="p-4 text-slate-500 leading-relaxed align-top">
                    <p>
                      Ziyaretçiler, şifrelerini kullanarak internet sitesine
                      giriş yapmaları durumunda, bu tür çerezler ile
                      ziyaretçinin her sayfada site kullanıcısı olduğu
                      belirlenerek şifresini yeniden girmesi önlenir.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-48 p-4 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200 align-top">
                    Analitik Çerezler
                    <em className="block not-italic font-normal text-xs text-slate-400 mt-1">
                      (Analytical Cookies)
                    </em>
                  </td>
                  <td className="p-4 text-slate-500 leading-relaxed align-top">
                    <p>
                      Analitik çerezler ile internet sitesini ziyaret edenlerin
                      sayıları, görüntülenen sayfaların tespiti, ziyaret
                      saatleri, sayfa kaydırma hareketleri gibi analitik
                      sonuçların üretimi sağlanır.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
