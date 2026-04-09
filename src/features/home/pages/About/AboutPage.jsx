import { useState, useEffect } from 'react';
import styles from './AboutPage.module.scss';
import AboutUs from './sections/AboutUs';
import AboutCompany from './sections/AboutCompany';
import Services from './sections/Services';
import Timeline from './sections/Timeline';
import VisionMission from './sections/VisionMission';
import Values from './sections/Values';
import HumanResources from './sections/HumanResources';
import CompanyInfo from './sections/CompanyInfo';

const navItems = [
  { id: 'Bize-Dair', label: 'Bize Dair' },
  { id: 'Aksam-Otomotiv-Hakkinda', label: 'Aksam Otomotiv Hakkında' },
  { id: 'Hizmetlerimiz', label: 'Hizmetlerimiz' },
  { id: 'Kilometre-Taslari', label: 'Kilometre Taşları' },
  { id: 'Vizyon-ve-Misyon', label: 'Vizyon & Misyon' },
  { id: 'Degerlerimiz', label: 'Değerlerimiz' },
  { id: 'Insan-Kaynaklari', label: 'İnsan Kaynakları' },
  { id: 'Bilgi-Toplumu', label: 'Bilgi Toplumu' },
];

const HEADER_HEIGHT = 146;
const OFFSET = 0;

const AboutPage = () => {
  const [activeId, setActiveId] = useState('Bize-Dair');

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        {
          rootMargin: `-162px 0px -35% 0px`,
          threshold: 0,
        },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT - OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 items-start">
          {/* Sticky Sidebar */}
          <aside className={styles.sidebar}>
            <nav>
              <ul className="flex flex-col gap-1">
                {navItems.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`${styles.navItem} ${activeId === id ? styles.active : ''}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
            <AboutUs />
            <AboutCompany />
            <Services />
            <Timeline />
            <VisionMission />
            <Values />
            <HumanResources />
            <CompanyInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
