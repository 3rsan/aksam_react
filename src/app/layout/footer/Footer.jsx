import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © Tüm hakları saklıdır.{' '}
          <Link to="/" className={styles.brand}>
            Aksam Otomotiv
          </Link>{' '}
          tarafından yapılmıştır.
        </p>

        <div className={styles.links}>
          <Link to="/cerez-politikasi">Çerez Politikası</Link>
          <span className={styles.divider} />
          <Link to="/aydinlatma-metni">Aydınlatma Metni</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
