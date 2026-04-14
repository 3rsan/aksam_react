import { useState } from 'react';
import styles from '../auth/AuthForm.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import useAuthStore from '../../../../app/store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const register = useAuthStore((state) => state.register);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    gsm: '',
    new_password: '',
    new_password_retry: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    const result = await register(form);
    if (result.success) {
      navigate('/kayit-ol');
    }
  };

  return (
    <div className="col-xl-6">
      <div className={styles.carListingForm}>
        <div className={styles.listingInfoBox}>
          <h5 className={styles.title}>Kayıt Ol</h5>
          <small className={styles.subtitle}>
            İster üye olup ihaleyle ister garajdan görerek hemen al
          </small>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.inputField}>
                <label>Adınız</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Adınız"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputField}>
                <label>Soyadınız</label>
                <input
                  type="text"
                  name="surname"
                  required
                  placeholder="Soyadınız"
                  value={form.surname}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputField}>
                <label>E-Posta Adresiniz</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-Posta Adresiniz"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputField}>
                <label>Telefon Numaranız</label>
                <input
                  type="text"
                  name="gsm"
                  required
                  placeholder="Telefon Numaranız"
                  value={form.gsm}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputField}>
                <label>Şifreniz</label>
                <input
                  type="password"
                  name="new_password"
                  required
                  placeholder="Şifreniz"
                  value={form.new_password}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputField}>
                <label>Şifre Tekrarı</label>
                <input
                  type="password"
                  name="new_password_retry"
                  required
                  placeholder="Şifre Tekrarı"
                  value={form.new_password_retry}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.fullWidth}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
                  {!loading && (
                    <span className={styles.icon}>
                      <FaArrowRight />
                    </span>
                  )}
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
