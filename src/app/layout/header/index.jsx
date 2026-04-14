import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaUser,
  FaPlus,
} from 'react-icons/fa';
import './styles.scss';
import AksamLogo from '@assets/logo.svg';
import { useSidebar } from '@app/providers/useSidebar';
import useAuthStore from '../../store/useAuthStore';
import VehicleRequestModal from '../../../shared/components/VehicleRequestModal/VehicleRequestModal';

const navLinks = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Kurumsal', to: '/kurumsal' },
  { label: 'Tüm Araçlar', to: '/' },
  { label: 'Araç Ekleme', to: '/arac-ekle' },
  { label: 'İletişim', to: '/iletisim' },
];

export default function Header() {
  const isAuthenticated = useAuthStore((state) => !!state.token);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isOpen: sidebarOpen, toggle: toggleSidebar } = useSidebar();
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        {/* ── Topbar ── */}
        <div className="header__topbar">
          <div className="container mx-auto px-4">
            <div
              className="flex items-center justify-between h-10"
              style={{ display: 'flex' }}
            >
              {/* Sol — slogan */}
              <p className="header__topbar-slogan hidden sm:block">
                İster Üye Olup İhaleyle İster Garajdan Görerek Hemen Al
              </p>

              {/* Sağ — iletişim + auth */}
              <div className="header__topbar-actions hidden xl:flex items-center gap-5">
                {/* Telefon */}
                <a href="tel:4441548" className="header__topbar-item">
                  <FaPhoneAlt />
                  <span>444 15 48</span>
                </a>

                {/* E-posta */}
                <a
                  href="mailto:info@aksamoto.com.tr"
                  className="header__topbar-item"
                >
                  <FaEnvelope />
                  <span>info@aksamoto.com.tr</span>
                </a>

                <span className="header__topbar-divider">|</span>

                {/* Auth */}
                {isAuthenticated && user ? (
                  <>
                    <button className="header__topbar-item">
                      <FaUser />
                      <span>
                        <span>{user?.name}</span>
                      </span>
                    </button>
                    <span className="header__topbar-divider">|</span>
                    <button
                      onClick={() => {
                        logout();
                        navigate('/');
                      }}
                      className="header__topbar-item"
                    >
                      <FaSignOutAlt />
                      <span>Çıkış Yap</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/kayit-ol" className="header__topbar-item">
                      <FaSignInAlt />
                      <span>Giriş Yap</span>
                    </Link>
                    <span className="header__topbar-divider">|</span>
                    <Link to="/kayit-ol" className="header__topbar-item">
                      <FaUserPlus />
                      <span>Üye Ol</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Ana Nav ── */}
        <div className="header__navbar">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link to="/" className="header__logo">
                <img src={AksamLogo} alt="Aksamoto" />
              </Link>

              {/* Desktop Nav */}
              <nav className="header__nav hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="header__nav-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Sağ butonlar */}
              <div className="flex items-center gap-3">
                {/* Araç Talep Et CTA */}
                <button
                  onClick={() =>
                    isAuthenticated
                      ? setRequestModalOpen(true)
                      : navigate('/kayit-ol')
                  }
                  className="header__cta hidden sm:flex items-center"
                >
                  <span className="header__cta-icon">
                    <FaPlus size={11} />
                  </span>
                  <span className="header__cta-label">Araç Talep Edin</span>
                </button>

                {/* Sidebar toggle (desktop) */}
                <button
                  className="header__hamburger hidden lg:flex flex-col gap-1.5 p-2"
                  onClick={toggleSidebar}
                  aria-label="Menüyü aç"
                >
                  <span
                    className={sidebarOpen ? 'rotate-45 translate-y-2' : ''}
                  />
                  <span className={sidebarOpen ? 'opacity-0' : ''} />
                  <span
                    className={sidebarOpen ? '-rotate-45 -translate-y-2' : ''}
                  />
                </button>

                {/* Mobile toggle */}
                <button
                  className="header__hamburger flex lg:hidden flex-col gap-1.5 p-2"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Mobil menüyü aç"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobil Menü ── */}
        <div
          className={`header__mobile-menu ${mobileOpen ? 'header__mobile-menu--open' : ''}`}
        >
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="header__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="header__mobile-auth">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                    navigate('/');
                  }}
                  className="header__mobile-link"
                >
                  Çıkış Yap
                </button>
              ) : (
                <>
                  <Link
                    to="/kayit-ol"
                    className="header__mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    Giriş Yap
                  </Link>
                  <Link
                    to="/kayit-ol"
                    className="header__mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    Üye Ol
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
      <VehicleRequestModal
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
      />
    </>
  );
}
