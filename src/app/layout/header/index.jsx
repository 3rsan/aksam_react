import { useState } from 'react';
import { Link } from 'react-router-dom';
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

// useAuth hook'unu kendi auth yapına göre değiştir
// import { useAuth } from "@/hooks/useAuth";

// Geçici mock — kendi auth sisteminle değiştir
const useAuth = () => ({
  isAuthenticated: false,
  user: null, // { personel_adi: "Ali", personel_soyadi: "Veli" }
});

const navLinks = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Kurumsal', to: '/kurumsal' },
  { label: 'Tüm Araçlar', to: '/araclar' },
  { label: 'Araç Ekleme', to: '/arac-ekle' },
  { label: 'İletişim', to: '/iletisim' },
];

export default function Header() {
  const { isAuthenticated, user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isOpen: sidebarOpen, toggle: toggleSidebar } = useSidebar();

  return (
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
                      {user.personel_adi} {user.personel_soyadi}
                    </span>
                  </button>
                  <span className="header__topbar-divider">|</span>
                  <Link to="/cikis-yap" className="header__topbar-item">
                    <FaSignOutAlt />
                    <span>Çıkış Yap</span>
                  </Link>
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
                <Link key={link.to} to={link.to} className="header__nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Sağ butonlar */}
            <div className="flex items-center gap-3">
              {/* Araç Talep Et CTA */}
              <Link
                to={isAuthenticated ? '#' : '/kayit-ol'}
                className="header__cta hidden sm:flex items-center"
                {...(isAuthenticated && {
                  'data-bs-toggle': 'modal',
                  'data-bs-target': '#RequestAVehicle',
                })}
              >
                <span className="header__cta-icon">
                  <FaPlus size={11} />
                </span>
                <span className="header__cta-label">Araç Talep Edin</span>
              </Link>

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
              key={link.to}
              to={link.to}
              className="header__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="header__mobile-auth">
            {isAuthenticated ? (
              <Link
                to="/cikis-yap"
                className="header__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                Çıkış Yap
              </Link>
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
  );
}
