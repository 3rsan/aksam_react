import styles from './AuthForm.module.scss';
import { FaArrowRight } from 'react-icons/fa';

const RegisterForm = () => {
  return (
    <div className="col-xl-6">
      <div className={styles.carListingForm}>
        <div className={styles.listingInfoBox}>
          <h5 className={styles.title}>Kayıt Ol</h5>
          <small className={styles.subtitle}>
            İster üye olup ihaleyle ister garajdan görerek hemen al
          </small>

          <form action="https://aksamoto.com.tr/kayit-ol" method="POST">
            <input type="hidden" name="_token" value="" />

            <div className={styles.formGrid}>
              <div className={styles.inputField}>
                <label>Adınız</label>
                <input type="text" required name="name" placeholder="Adınız" />
              </div>

              <div className={styles.inputField}>
                <label>Soyadınız</label>
                <input
                  type="text"
                  required
                  name="surname"
                  placeholder="Soyadınız"
                />
              </div>

              <div className={styles.inputField}>
                <label>E-Posta Adresiniz</label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="E-Posta Adresiniz"
                />
              </div>

              <div className={styles.inputField}>
                <label>Telefon Numaranız</label>
                <input
                  type="text"
                  required
                  name="gsm"
                  placeholder="Telefon Numaranız"
                />
              </div>

              <div className={styles.inputField}>
                <label>Şifreniz</label>
                <input
                  type="password"
                  required
                  name="new_password"
                  placeholder="Şifreniz"
                />
              </div>

              <div className={styles.inputField}>
                <label>Şifre Tekrarı</label>
                <input
                  type="password"
                  required
                  name="new_password_retry"
                  placeholder="Şifre Tekrarı"
                />
              </div>

              <div className={styles.fullWidth}>
                <button type="submit" className={styles.submitBtn}>
                  Kayıt Ol
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

export default RegisterForm;
