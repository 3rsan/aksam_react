const ProductMap = ({ embedUrl }) => {
  if (!embedUrl) return null;

  return (
    <div className="mt-10">
      <h4 className="text-lg font-bold text-slate-900 pb-3 mb-6 border-b-2 border-emerald-500 inline-block">
        Konum
      </h4>
      <div className="rounded-xl overflow-hidden border border-slate-200">
        <iframe
          src={embedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Araç Konumu"
        />
      </div>
    </div>
  );
};

export default ProductMap;
