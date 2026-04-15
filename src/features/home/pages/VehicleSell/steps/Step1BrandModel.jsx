import { useState, useEffect } from 'react';
import {
  getFilters,
  getBrandModels,
} from '../../../../../services/vehicleService';
import styles from '../VehicleSellPage.module.scss';
import bg1 from '../../../../../assets/images/aksam-web-site-tasarim-template-1.png';

export default function Step1BrandModel({ onNext }) {
  const [markalar, setMarkalar] = useState([]);
  const [modeller, setModeller] = useState([]);
  const [markaId, setMarkaId] = useState('');
  const [modelId, setModelId] = useState('');

  useEffect(() => {
    getFilters().then((data) => setMarkalar(data.markalar || []));
  }, []);

  useEffect(() => {
    if (!markaId) {
      return;
    }
    getBrandModels(markaId).then(setModeller);
  }, [markaId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ markaId, modelId });
  };

  return (
    <div
      className={styles.step1}
      style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'contain' }}
    >
      <div className={styles.step1__content}>
        <h1 className={styles.step1__title}>
          Hasarlı Aracınızı <br />
          <span>Değerinde, Güvenle Satın!</span>
        </h1>

        <form onSubmit={handleSubmit} className={styles.step1__form}>
          <div className={styles.step1__selectGroup}>
            <select
              required
              value={markaId}
              onChange={(e) => {
                setMarkaId(e.target.value);
                setModelId('');
                setModeller([]);
              }}
              className={styles.step1__select}
            >
              <option value="" disabled>
                Marka Seçiniz
              </option>
              {markalar.map((m) => (
                <option key={m.marka_ref_no} value={m.marka_ref_no}>
                  {m.marka}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.step1__divider} />

          <div className={styles.step1__selectGroup}>
            <select
              required
              value={modelId}
              onChange={(e) => setModelId(e.target.value)}
              disabled={!markaId || modeller.length === 0}
              className={styles.step1__select}
            >
              <option value="" disabled>
                Model Seçiniz
              </option>
              {modeller.map((m) => (
                <option key={m.model_ref_no} value={m.model_ref_no}>
                  {m.model}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.step1__btn}>
            Arabamı Sat
          </button>
        </form>
      </div>
    </div>
  );
}
