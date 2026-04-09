import styles from './ProductSpecs.module.scss';

const ProductSpecs = ({ specs = {} }) => {
  if (Object.keys(specs).length === 0) return null;

  return (
    <div className="mt-10">
      <h4 className="text-lg font-bold text-slate-900 pb-3 mb-6 border-b-2 border-emerald-500 inline-block">
        Genel Bilgiler
      </h4>

      <div className={styles.table}>
        {Object.entries(specs).map(([key, value], i) => (
          <div
            key={key}
            className={`${styles.row} ${i % 2 === 0 ? styles.even : ''}`}
          >
            <span className={styles.key}>{key}</span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecs;
