import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaXmark, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { useSidebar } from '@app/providers/useSidebar';
import AksamLogo from '@assets/logo.svg';
import './styles.scss';

export default function OffcanvasSidebar() {
  const { isOpen, close } = useSidebar();

  // ESC ile kapat
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  // Açıkken body scroll'u kilitle
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`offcanvas-backdrop ${isOpen ? 'offcanvas-backdrop--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`offcanvas ${isOpen ? 'offcanvas--open' : ''}`}
        aria-modal="true"
        role="dialog"
        aria-label="Menü"
      >
        {/* Kapat */}
        <button className="offcanvas__close" onClick={close} aria-label="Kapat">
          <FaXmark />
        </button>

        {/* Logo */}
        <Link to="/" onClick={close} className="offcanvas__logo">
          <img src={AksamLogo} alt="Aksamoto" />
        </Link>

        {/* Hakkında */}
        <div className="offcanvas__section">
          <h4 className="offcanvas__heading">BİZE DAİR</h4>
          <p className="offcanvas__text">
            Sigorta ve Otomotiv Sektöründe verimlilik sağlayacak inovatif ve
            kalıcı projelerle hizmete hazırız...
          </p>
          <p className="offcanvas__text">
            Telli Grup'un 1989 yılında başlayan, 34 yıllık ticari geçmişine
            dayalı bilgi ve deneyimi üzerine 2001 yılında kurulmuş Aksam
            Otomotiv A.Ş. "Sektörün dinamiklerini belirler ve kalıcı çözümlere
            dönüştürür." sloganı ile Sigorta Şirketlerine ait hasarlı araçların
            değerlendirilmesi alanında faaliyet göstermektedir.
          </p>
          <Link to="/kurumsal" className="offcanvas__btn" onClick={close}>
            Hakkımızda
          </Link>
        </div>

        {/* İletişim */}
        <div className="offcanvas__section">
          <h4 className="offcanvas__heading">İLETİŞİM</h4>
          <ul className="offcanvas__address">
            <li>
              Ayazağa Ticaret Merkezi B Blok Kat: 9
              <br />
              Maslak, Sümer Sokağı NO:3
              <br />
              Sarıyer / İstanbul
            </li>
            <li>
              <a href="tel:4441548">444 15 48</a>
            </li>
            <li>
              <a
                href="https://aksamoto.com.tr"
                target="_blank"
                rel="noreferrer"
              >
                aksamoto.com.tr
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal */}
        <div className="offcanvas__social">
          <a
            href="https://www.facebook.com/aksamotomotivv"
            target="_blank"
            rel="noreferrer"
            className="offcanvas__social-btn"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/aksam.otomotiv/"
            target="_blank"
            rel="noreferrer"
            className="offcanvas__social-btn"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@aksamotomotiv7757"
            target="_blank"
            rel="noreferrer"
            className="offcanvas__social-btn"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </aside>
    </>
  );
}
