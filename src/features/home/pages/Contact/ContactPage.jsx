import styles from './ContactPage.module.scss';
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import VehicleSlider from './sections/VehicleSlider';

const locations = [
  {
    label: 'Merkez Adres',
    value:
      'Maslak Mahallesi Sümer Sokak No: 3 Ayazağa Ticaret Merkezi B Blok Kat: 9 Sarıyer/İstanbul',
  },
  {
    label: 'Maslak Garaj',
    value:
      'Maslak Mahallesi Atatürk Oto Sanayi Sit. 2.Kısım 9.Sokak No:5 Sarıyer/İstanbul',
  },
  {
    label: 'Sancaktepe Garaj',
    value: 'Eyüp Sultan Mahallesi Sekmen Cad. No: 10 Sancaktepe/İstanbul',
  },
];

const socials = [
  {
    icon: <FaFacebookF size={16} />,
    href: 'https://www.facebook.com/aksamoto.com.tr',
    label: 'Facebook',
  },
  {
    icon: <FaYoutube size={16} />,
    href: 'https://www.youtube.com/@AksamOtomotiv-y9v',
    label: 'YouTube',
  },
  {
    icon: <FaLinkedinIn size={16} />,
    href: 'https://www.linkedin.com/company/aksam-otomotiv/',
    label: 'LinkedIn',
  },
];

const ContactPage = () => {
  return (
    <>
      <section className="bg-slate-50 pt-16 pb-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* Sol — Form */}
            <div className="flex-1 bg-white rounded-xl border border-slate-200 p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Aksam Otomotiv İç ve Dış Tic. A.Ş.
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Aksam Otomotiv; farklı ödeme seçenekleri, merkezi lokasyonları,
                doğru değerlendirme sistemi, profesyonel iş akışı ve desteği ile
                hasarlı araç alıcı ve satıcıları için çözüm ortaklığı sunar.
              </p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className={styles.inputField}>
                    <label>Adınız</label>
                    <input type="text" placeholder="Adınız" />
                  </div>
                  <div className={styles.inputField}>
                    <label>Soyadınız</label>
                    <input type="text" placeholder="Soyadınız" />
                  </div>
                  <div className={styles.inputField}>
                    <label>E-Posta</label>
                    <input type="email" placeholder="E-Posta" />
                  </div>
                  <div className={styles.inputField}>
                    <label>Telefon</label>
                    <input type="tel" placeholder="Telefon" />
                  </div>
                </div>

                <div className={styles.inputField}>
                  <label>Mesaj</label>
                  <textarea placeholder="Mesaj" rows={5} />
                </div>

                <div>
                  <button type="submit" className={styles.submitBtn}>
                    Gönder
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Sağ — Sidebar */}
            <div className="xl:w-80 bg-white rounded-xl border border-slate-200 p-8 flex flex-col gap-6">
              {/* Adresler */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4">
                  İletişim Bilgileri
                </h4>
                <div className="flex flex-col gap-4">
                  {locations.map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Telefon & Mail */}
              <div className="flex flex-col gap-3">
                <a href="tel:4441548" className={styles.contactItem}>
                  <span className={styles.iconBox}>
                    <FaWhatsapp size={18} />
                  </span>
                  <div>
                    <span className="block text-xs text-slate-400 mb-0.5">
                      Telefon
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      444 15 48
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@aksamoto.com.tr"
                  className={styles.contactItem}
                >
                  <span className={styles.iconBox}>
                    <MdOutlineEmail size={18} />
                  </span>
                  <div>
                    <span className="block text-xs text-slate-400 mb-0.5">
                      Mail Adres
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      info@aksamoto.com.tr
                    </span>
                  </div>
                </a>
              </div>

              <hr className="border-slate-100" />

              {/* Sosyal Medya */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  Bizi Takip Edin
                </p>
                <div className="flex gap-2">
                  {socials.map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={styles.socialBtn}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VehicleSlider />
    </>
  );
};

export default ContactPage;
