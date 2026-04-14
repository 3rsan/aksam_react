import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  getBrandModels,
  getFilters,
  vehicleRequest,
} from '../../../services/vehicleService';

export default function VehicleRequestModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);

  const [markalar, setMarkalar] = useState([]);
  const [modeller, setModeller] = useState([]);
  const [markaId, setMarkaId] = useState('');
  const [modelId, setModelId] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    getFilters().then((data) => setMarkalar(data.markalar || []));
  }, [isOpen]);

  useEffect(() => {
    if (!markaId) {
      setModeller([]);
      return;
    }
    getBrandModels(markaId).then(setModeller);
  }, [markaId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setError('Lütfen robot olmadığınızı doğrulayın.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await vehicleRequest({
        marka_id: markaId,
        model_id: modelId,
        captcha: captchaToken,
      });
      onClose();
      navigate('/arac-talep-basarili');
    } catch (err) {
      setError(err.response?.data?.message || 'Bir hata oluştu.');
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setError(null);
    setMarkaId('');
    setModelId('');
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md z-10">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h5 className="text-base font-bold text-slate-900">
            Araç Talep Edin
          </h5>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Marka Seçiniz
              </label>
              <select
                required
                value={markaId}
                onChange={(e) => {
                  setMarkaId(e.target.value);
                  setModelId('');
                }}
                className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
              >
                <option value="">Marka Seçiniz</option>
                {markalar.map((m) => (
                  <option key={m.marka_ref_no} value={m.marka_ref_no}>
                    {m.marka}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Model Seçiniz
              </label>
              <select
                required
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                disabled={!markaId || modeller.length === 0}
                className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 disabled:opacity-50"
              >
                <option value="">Model Seçiniz</option>
                {modeller.map((m) => (
                  <option key={m.model_ref_no} value={m.model_ref_no}>
                    {m.model}
                  </option>
                ))}
              </select>
            </div>

            {/* reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Vazgeç
              </button>
              <button
                type="submit"
                disabled={loading || !captchaToken}
                className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Gönderiliyor...' : 'Araç Talep Et'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
