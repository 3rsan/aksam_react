import { useState, useRef, useEffect } from 'react';

const ILLER = [
  'Adana',
  'Adıyaman',
  'Afyonkarahisar',
  'Ağrı',
  'Amasya',
  'Ankara',
  'Antalya',
  'Artvin',
  'Aydın',
  'Balıkesir',
  'Bilecik',
  'Bingöl',
  'Bitlis',
  'Bolu',
  'Burdur',
  'Bursa',
  'Çanakkale',
  'Çankırı',
  'Çorum',
  'Denizli',
  'Diyarbakır',
  'Edirne',
  'Elazığ',
  'Erzincan',
  'Erzurum',
  'Eskişehir',
  'Gaziantep',
  'Giresun',
  'Gümüşhane',
  'Hakkari',
  'Hatay',
  'Isparta',
  'Mersin',
  'İstanbul',
  'İzmir',
  'Kars',
  'Kastamonu',
  'Kayseri',
  'Kırklareli',
  'Kırşehir',
  'Kocaeli',
  'Konya',
  'Kütahya',
  'Malatya',
  'Manisa',
  'Kahramanmaraş',
  'Mardin',
  'Muğla',
  'Muş',
  'Nevşehir',
  'Niğde',
  'Ordu',
  'Rize',
  'Sakarya',
  'Samsun',
  'Siirt',
  'Sinop',
  'Sivas',
  'Tekirdağ',
  'Tokat',
  'Trabzon',
  'Tunceli',
  'Şanlıurfa',
  'Uşak',
  'Van',
  'Yozgat',
  'Zonguldak',
  'Aksaray',
  'Bayburt',
  'Karaman',
  'Kırıkkale',
  'Batman',
  'Şırnak',
  'Bartın',
  'Ardahan',
  'Iğdır',
  'Yalova',
  'Karabük',
  'Kilis',
  'Osmaniye',
  'Düzce',
];

const SOZLESME_METNI = `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, Aksam Otomotiv İç ve Dış Ticaret A.Ş. ("Şirket") tarafından veri sorumlusu sıfatıyla işlenecek kişisel verilerinize ilişkin aydınlatma yükümlülüğümüz çerçevesinde bilgi vermek istiyoruz.

Toplanan kişisel verileriniz; ad, soyad, telefon numarası, e-posta adresi, araç bilgileri ve konum bilgileri olup bu veriler aracınızın değerlemesi, satış süreçlerinin yürütülmesi, sizinle iletişime geçilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.

Kişisel verileriniz; iş ortakları, hizmet sağlayıcılar ve yasal zorunluluklar kapsamında yetkili kurum ve kuruluşlarla paylaşılabilecektir.

KVKK'nın 11. maddesi kapsamında; kişisel verilerinize erişim, düzeltme, silme, işlemenin kısıtlanması ve itiraz etme haklarına sahipsiniz. Bu haklarınızı kullanmak için info@aksamoto.com.tr adresine yazılı başvuruda bulunabilirsiniz.

Formu doldurarak yukarıdaki aydınlatma metnini okuduğunuzu ve kişisel verilerinizin belirtilen amaçlarla işlenmesine açık rıza gösterdiğinizi kabul etmiş sayılırsınız.`;

export default function Step4Contract({ onNext, onBack }) {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    il: '',
    ilce: '',
  });
  const [scrolled, setScrolled] = useState(false);
  const termsRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleScroll = () => {
    const el = termsRef.current;
    if (!el) return;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;
    if (atBottom) setScrolled(true);
  };

  useEffect(() => {
    const el = termsRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!scrolled) return;
    onNext(form);
  };

  const inputClass = `w-full px-5 py-4 border-2 border-red-600 rounded-lg text-base text-gray-700 bg-white outline-none transition placeholder-gray-500 focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)] hover:border-red-700`;
  const selectClass = `${inputClass} appearance-none cursor-pointer pr-10`;

  return (
    <div
      className="min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/assets/images/aksam-web-site-tasarim-template-4.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-5xl px-4 relative left-[12%] lg:left-[9%] xl:left-[12%]">
        {/* Banner */}
        <div className="bg-red-600 text-white text-center px-8 py-5 rounded-2xl mb-8 shadow text-base leading-relaxed">
          İletişim bilgileriniz ile aracın bulunduğu il ve ilçe bilgilerini
          giriniz.
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Satır 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="İsim"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="text"
              name="surname"
              required
              placeholder="Soyisim"
              value={form.surname}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Cep Telefonu"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Satır 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <div className="relative">
              <select
                name="il"
                required
                value={form.il}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>
                  Aracın Bulunduğu İl
                </option>
                {ILLER.sort().map((il) => (
                  <option key={il} value={il}>
                    {il}
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                ▾
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                name="ilce"
                required
                placeholder="Aracın Bulunduğu İlçe"
                value={form.ilce}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Sözleşme */}
          <div className="bg-white border-2 border-red-600 rounded-xl p-8">
            <h3 className="text-red-600 text-xl font-semibold text-center mb-5">
              Kişisel Verilerin Korunması Kanunu
            </h3>
            <div
              ref={termsRef}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-h-60 overflow-y-auto mb-3 text-sm text-gray-700 leading-relaxed [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-track]:bg-black/5 [&::-webkit-scrollbar-track]:rounded"
            >
              {SOZLESME_METNI.split('\n\n').map((p, i) => (
                <p key={i} className="mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            {!scrolled && (
              <p className="text-gray-500 text-xs text-center italic">
                Devam edebilmek için sözleşmeyi sonuna kadar okuyunuz ↓
              </p>
            )}
            {scrolled && (
              <p className="text-emerald-600 text-xs text-center font-medium">
                ✓ Sözleşme okundu
              </p>
            )}
          </div>

          {/* Butonlar */}
          <div className="flex justify-between items-center pb-8">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-xl text-lg font-semibold hover:bg-red-600 hover:text-white transition"
            >
              Geri
            </button>
            <button
              type="submit"
              disabled={!scrolled}
              className={`px-20 py-4 rounded-xl text-lg font-semibold shadow transition ${
                scrolled
                  ? 'bg-red-600 text-white hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                  : 'bg-gray-400 text-white cursor-not-allowed opacity-60'
              }`}
            >
              Devam Et
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
