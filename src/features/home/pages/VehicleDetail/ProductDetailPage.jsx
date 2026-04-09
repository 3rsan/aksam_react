import ProductBreadcrumb from './sections/ProductBreadcrumb';
import ProductGallery from './sections/ProductGallery';
import ProductInfo from './sections/ProductInfo';
import ProductSpecs from './sections/ProductSpecs';
import ProductMap from './sections/ProductMap';
import SimilarVehicles from './sections/SimilarVehicles';
import { useParams } from 'react-router-dom';

// Örnek data — ileride API'den gelecek
const product = {
  id: 332450,
  title: '2024 IVECO KAMYON EUROCARGO MLC 100 E 19 3690 E6E',
  brand: 'IVECO',
  model: 'KAMYON EUROCARGO MLC 100 E 19 3690 E6E',
  year: 2024,
  price: null,
  location: 'AKSAM SAMANDIRA',
  phone: '0 (212) 305 86 81',
  images: [],
  specs: {
    Marka: 'IVECO',
    Model: 'EUROCARGO',
    Yıl: '2024',
    Yakıt: 'Dizel',
    Vites: 'Manuel',
    'Kasa Tipi': 'Kamyon',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3005.771911352294!2d29.0239!3d41.1176722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bd7dc49fed%3A0xc8a8f9c390df3dc4!2sAksam%20Otomotiv%20Genel%20Merkez!5e0!3m2!1str!2str!4v1704447912113!5m2!1str!2str',
  similarVehicles: [],
};

const ProductDetailPage = () => {
  const { id, slug } = useParams();
  console.log('Ürün ID:', id, '| Slug:', slug);
  return (
    <>
      <ProductBreadcrumb
        title={product.title}
        brand={product.brand}
        model={product.model}
      />

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          {/* Gallery + Info */}
          <div className="flex flex-col xl:flex-row gap-8">
            <ProductGallery images={product.images} />
            <ProductInfo product={product} />
          </div>

          {/* Specs */}
          <ProductSpecs specs={product.specs} />

          {/* Map */}
          <ProductMap embedUrl={product.mapEmbedUrl} />

          {/* Similar */}
          <SimilarVehicles
            vehicles={product.similarVehicles}
            currentId={product.id}
          />
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
