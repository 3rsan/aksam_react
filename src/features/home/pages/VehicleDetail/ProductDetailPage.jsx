import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductBreadcrumb from './sections/ProductBreadcrumb';
import ProductGallery from './sections/ProductGallery';
import ProductInfo from './sections/ProductInfo';
import ProductSpecs from './sections/ProductSpecs';
import ProductMap from './sections/ProductMap';
import SimilarVehicles from './sections/SimilarVehicles';
import { getVehicleDetail } from '../../../../services/vehicleService';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getVehicleDetail(id);
        setProduct(data.data);
        setSimilar(data.similar || []);
      } catch {
        setError('Araç bulunamadı.');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-400 text-sm">Yükleniyor...</p>
      </div>
    );

  if (error || !product)
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-400 text-sm">{error || 'Araç bulunamadı.'}</p>
      </div>
    );

  const veri = product.veri;
  const resimler = product.resimler || [];

  return (
    <>
      <ProductBreadcrumb
        title={`${veri.model_yili} ${veri.marka} ${veri.arac_tip_metin}`}
        brand={veri.marka}
        model={veri.arac_tip_metin}
      />

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-8">
            <ProductGallery
              images={resimler.map((r) => ({
                src: `https://images.aksamoto.com/${r.klasor}`,
                large: `https://images.aksamoto.com/${r.buyuk_resim}`,
              }))}
            />
            <ProductInfo
              product={{
                id: veri.islem_ref_no,
                title: `${veri.model_yili} ${veri.marka} ${veri.arac_tip_metin}`,
                location: veri.bulundugu_yer,
                phone: veri.satistelefon || veri.garaj_telefon,
                price: veri.ecm_satis_fiyati
                  ? Number(veri.ecm_satis_fiyati).toLocaleString('tr-TR') + ' ₺'
                  : null,
              }}
            />
          </div>

          <ProductSpecs
            specs={{
              Marka: veri.marka,
              Model: veri.modeli,
              Yıl: veri.model_yili,
              KM: veri.arac_km
                ? Number(veri.arac_km).toLocaleString('tr-TR') + ' km'
                : '-',
              Yakıt: veri.yakit,
              Vites: veri.vitesi,
              Tescil: veri.tescil,
              'Hasar Durumu': veri.hasar_durumu,
              'Çalışma Durumu': veri.arac_calisma_durum,
              'Satış Sorumlusu': veri.satis_sorumlusu,
            }}
          />

          <ProductMap
            embedUrl={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3005.771911352294!2d29.0239!3d41.1176722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bd7dc49fed%3A0xc8a8f9c390df3dc4!2sAksam%20Otomotiv%20Genel%20Merkez!5e0!3m2!1str!2str!4v1704447912113!5m2!1str!2str`}
          />

          <SimilarVehicles vehicles={similar} currentId={veri.islem_ref_no} />
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
