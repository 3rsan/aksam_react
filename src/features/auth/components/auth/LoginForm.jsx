import { useState } from 'react';
import styles from '../auth/AuthForm.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import useAuthStore from '../../../../app/store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    const result = await login(email, password, remember);
    if (result.success) {
      navigate('/');
    }
  };

  return (
    <div className="col-xl-6">
      <div className={styles.carListingForm}>
        <div className={styles.listingInfoBox}>
          <h5 className={styles.title}>Giriş Yap</h5>
          <small className={styles.subtitle}>
            Hemen giriş yaparak araç satın al
          </small>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.inputField}>
              <label>E-Posta Adresiniz</label>
              <input
                type="email"
                name="giris_adi"
                required
                placeholder="E-Posta Adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={`${styles.inputField} ${styles.mt4}`}>
              <label>Şifreniz</label>
              <input
                type="password"
                name="giris_sifresi"
                required
                placeholder="Şifreniz"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles.cookiesArea}>
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Beni Hatırla
              </label>
              <a href="/sifremi-unuttum" className={styles.forgotPass}>
                Şifremi Unuttum
              </a>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
              {!loading && (
                <span className={styles.icon}>
                  <FaArrowRight />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
