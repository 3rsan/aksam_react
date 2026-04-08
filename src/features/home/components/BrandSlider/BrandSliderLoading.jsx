import './styles.scss';

export default function BrandSliderLoading({ itemCount = 6 }) {
  return (
    <section className="vbs-loading">
      {Array.from({ length: itemCount }).map((_, i) => (
        <div key={i} className="vbs-loading__item">
          <div className="vbs-loading__circle" />
          <div className="vbs-loading__label" />
        </div>
      ))}
    </section>
  );
}
