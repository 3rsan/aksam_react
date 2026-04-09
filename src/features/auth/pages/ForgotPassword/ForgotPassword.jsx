import styles from '../../components/auth/AuthForm.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API entegrasyonu
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

        <form onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <label>E-Posta Adresiniz</label>
            <input type="email" name="email" placeholder="E-Posta Adresiniz" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link
              to="/kayit-ol"
              className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Giriş Yap
            </Link>
            <button type="submit" className={styles.submitBtn}>
              Şifremi Sıfırla
              <span className={styles.icon}>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
