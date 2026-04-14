import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../components/auth/AuthForm.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import { resetPassword } from '../../../../services/authService';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: '',
    password_confirmation: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.password_confirmation) {
      setError('Şifreler eşleşmiyor.');
      return;
    }

    setLoading(true);
    try {
      await resetPassword(token, form);
      setSuccess(true);
      setTimeout(() => navigate('/kayit-ol'), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl border border-slate-200 p-8 w-full max-w-md">
        <h5 className="text-xl font-bold text-slate-900 mb-1">Şifre Sıfırla</h5>
        <small className="block text-sm text-slate-500 mb-6">
          Yeni şifrenizi belirleyin.
        </small>

        {success ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg px-4 py-3">
            Şifreniz başarıyla güncellendi. Giriş sayfasına
            yönlendiriliyorsunuz...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
                {error}
              </div>
            )}

            <div className={styles.inputField}>
              <label>Yeni Şifreniz</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Yeni Şifreniz"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className={`${styles.inputField} ${styles.mt4}`}>
              <label>Şifre Tekrarı</label>
              <input
                type="password"
                name="password_confirmation"
                required
                placeholder="Şifre Tekrarı"
                value={form.password_confirmation}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? 'Güncelleniyor...' : 'Şifremi Güncelle'}
                {!loading && (
                  <span className={styles.icon}>
                    <FaArrowRight />
                  </span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
