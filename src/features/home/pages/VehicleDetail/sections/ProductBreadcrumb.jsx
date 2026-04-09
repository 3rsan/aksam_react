import styles from './ProductBreadcrumb.module.scss';

const ProductBreadcrumb = ({ title, brand, model }) => {
  return (
    <section className={styles.breadcrumb}>
      <img
        src="https://aksamoto.com.tr/assets/img/shapes/tire-print-left.png"
        alt=""
        className={styles.tirePrintLeft}
      />
      <img
        src="https://aksamoto.com.tr/assets/img/shapes/tire-print-right.png"
        alt=""
        className={styles.tirePrintRight}
      />

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">
          {title}
        </h1>
        <ul className={styles.breadcrumbList}>
          <li>
            <a href="/" className={styles.link}>
              Anasayfa
            </a>
          </li>
          <li className={styles.separator}>/</li>
          <li className="text-white/80 text-sm">
            {brand} | {model}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductBreadcrumb;
