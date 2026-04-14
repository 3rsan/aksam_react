import styles from '../../components/auth/AuthForm.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import useAuthStore from '../../../../app/store/useAuthStore';

const ForgotPassword = () => {
  const forgotPassword = useAuthStore((state) => state.forgotPassword);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    const result = await forgotPassword(email);
    if (result.success) {
      setSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl border border-slate-200 p-8 w-full max-w-md">
        <h5 className="text-xl font-bold text-slate-900 mb-1">
          Şifremi Unuttum
        </h5>
        <small className="block text-sm text-slate-500 mb-6">
          E-posta adresinize şifre sıfırlama bağlantısı göndereceğiz.
        </small>

        {success ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg px-4 py-3">
            Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
                {error}
              </div>
            )}

            <div className={styles.inputField}>
              <label>E-Posta Adresiniz</label>
              <input
                type="email"
                name="email"
                required
                placeholder="E-Posta Adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="/kayit-ol"
                className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Giriş Yap
              </a>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? 'Gönderiliyor...' : 'Şifremi Sıfırla'}
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

export default ForgotPassword;
