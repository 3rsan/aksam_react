import { Link } from 'react-router-dom';

const VehicleRequestSuccess = () => {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center py-16">
      <div className="text-center">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Araç Talebiniz Oluşturuldu
        </h2>
        <p className="text-slate-500 mb-8">İlginiz için teşekkür ederiz.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </section>
  );
};

export default VehicleRequestSuccess;
