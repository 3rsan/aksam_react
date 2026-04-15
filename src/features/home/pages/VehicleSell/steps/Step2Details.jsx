import { useState } from 'react';
import styles from '../VehicleSellPage.module.scss';

const currentYear = new Date().getFullYear();
const YILLAR = Array.from(
  { length: currentYear - 1999 },
  (_, i) => currentYear - i,
);

export default function Step2Details({ formData, onNext, onBack }) {
  const [form, setForm] = useState({
    modelYear: '',
    motorType: '',
    gearType: '',
    fuelType: '',
    registrationStatus: '',
    km: '',
    motorNo: '',
    chasisNo: '',
    price: '',
    damageDescription: '',
    ...formData,
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(form);
  };

  const selectClass = `w-full h-14 px-6 pr-10 border-2 border-[#ca2129] rounded-xl bg-white text-base text-gray-500 outline-none transition focus:border-[#d62839] focus:shadow-[0_0_0_3px_rgba(202,33,41,0.1)] focus:text-gray-800 cursor-pointer appearance-none`;
  const inputClass = `w-full h-14 px-6 border-2 border-[#ca2129] rounded-xl bg-white text-base text-gray-500 outline-none transition placeholder-gray-400 focus:border-[#d62839] focus:shadow-[0_0_0_3px_rgba(202,33,41,0.1)] focus:text-gray-800`;

  return (
    <div
      className="min-h-screen flex items-center justify-start"
      style={{
        backgroundImage:
          "url('/assets/images/aksam-web-site-tasarim-template-2.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-5xl ml-[13%] mt-[4%] px-4">
        {/* Banner */}
        <div className="bg-[#ca2129] text-white text-center px-10 py-5 rounded-2xl text-lg font-semibold mb-10 shadow-lg">
          Aracın teknik özellikleri ve tanımlayıcı bilgilerine ait alanları
          doldurunuz.
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          {/* Satır 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={styles.selectWrap}>
              <select
                name="modelYear"
                required
                value={form.modelYear}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>
                  Model Yılı Seçiniz
                </option>
                {YILLAR.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectWrap}>
              <select
                name="motorType"
                required
                value={form.motorType}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>
                  Motor Tipi Seçiniz
                </option>
                <option value="benzin">Benzin</option>
                <option value="dizel">Dizel</option>
                <option value="elektrik">Elektrik</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div className={styles.selectWrap}>
              <select
                name="gearType"
                required
                value={form.gearType}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>
                  Vites Tipi Seçiniz
                </option>
                <option value="manuel">Manuel</option>
                <option value="otomatik">Otomatik</option>
                <option value="yarimotomatik">Yarı Otomatik</option>
              </select>
            </div>
          </div>

          {/* Satır 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={styles.selectWrap}>
              <select
                name="fuelType"
                required
                value={form.fuelType}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>
                  Yakıt Tipi Seçiniz
                </option>
                <option value="benzin">Benzin</option>
                <option value="dizel">Dizel</option>
                <option value="lpg">LPG</option>
                <option value="elektrik">Elektrik</option>
              </select>
            </div>
            <div className={styles.selectWrap}>
              <select
                name="registrationStatus"
                required
                value={form.registrationStatus}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>
                  Tescil Durumu Seçiniz
                </option>
                <option value="tescilli">Tescilli</option>
                <option value="tescilsiz">Tescilsiz</option>
              </select>
            </div>
            <input
              type="text"
              name="km"
              required
              placeholder="Kilometre Giriniz"
              value={form.km}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Satır 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="motorNo"
              required
              placeholder="Motor No"
              value={form.motorNo}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="text"
              name="chasisNo"
              required
              placeholder="Şase No"
              value={form.chasisNo}
              onChange={handleChange}
              className={inputClass}
            />
            <div className="relative">
              <input
                type="text"
                name="price"
                required
                placeholder="Talep Edilen Tutar"
                value={form.price}
                onChange={handleChange}
                className={`${inputClass} pr-16`}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 font-medium pointer-events-none">
                TL
              </span>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            name="damageDescription"
            placeholder="Hasarın boyutunu ve nasıl oluştuğunu kısaca anlatınız..."
            rows={4}
            value={form.damageDescription}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-[#ca2129] rounded-xl bg-white text-base text-gray-500 outline-none resize-y placeholder-gray-400 font-inherit focus:border-[#d62839] focus:shadow-[0_0_0_3px_rgba(202,33,41,0.1)] focus:text-gray-800 transition"
          />

          {/* Butonlar */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-4 border-2 border-[#ca2129] text-[#ca2129] rounded-xl text-lg font-semibold hover:bg-[#ca2129] hover:text-white transition"
            >
              Geri
            </button>
            <button
              type="submit"
              className="px-20 py-4 bg-[#ca2129] text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-[#d62839] hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 transition"
            >
              Devam Et
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
