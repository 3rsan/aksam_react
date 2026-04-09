import styles from './AuthForm.module.scss';
import { FaArrowRight } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className="col-xl-6">
      <div className={styles.carListingForm}>
        <div className={styles.listingInfoBox} id="Aksam-Otomotiv-Hakkinda">
          <h5 className={styles.title}>Giriş Yap</h5>
          <small className={styles.subtitle}>
            Hemen giriş yaparak araç satın al
          </small>

          <form action="https://aksamoto.com.tr/giris-yap" method="POST">
            <input type="hidden" name="_token" value="" />

            <div className="row">
              <div className="col-sm-12">
                <div className={styles.inputField}>
                  <label>E-Posta Adresiniz</label>
                  <input
                    type="email"
                    name="giris_adi"
                    required
                    placeholder="E-Posta Adresiniz"
                  />
                </div>
              </div>

              <div className="col-sm-12">
                <div className={`${styles.inputField} ${styles.mt4}`}>
                  <label>Şifreniz</label>
                  <input
                    type="password"
                    name="giris_sifresi"
                    required
                    placeholder="Şifreniz"
                  />
                </div>
              </div>

              <div className={styles.cookiesArea}>
                <label>
                  <input type="checkbox" /> Beni Hatırla
                </label>
                <a
                  href="https://aksamoto.com.tr/sifremi-unuttum"
                  className={styles.forgotPass}
                >
                  Şifremi Unuttum
                </a>
              </div>

              <div className="col-12">
                <button type="submit" className={styles.submitBtn}>
                  Giriş Yap
                  <span className={styles.icon}>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
