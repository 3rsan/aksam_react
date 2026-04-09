import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © Tüm hakları saklıdır.{' '}
          <a href="https://aksamoto.com.tr" className={styles.brand}>
            Aksam Otomotiv
          </a>{' '}
          tarafından yapılmıştır.
        </p>

        <div className={styles.links}>
          <a href="https://aksamoto.com.tr/cerez-politikasi">
            Çerez Politikası
          </a>
          <span className={styles.divider} />
          <a href="https://aksamoto.com.tr/aydinlatma-metni">
            Aydınlatma Metni
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
