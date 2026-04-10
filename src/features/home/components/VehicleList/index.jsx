import { useState, useEffect, useRef, memo } from 'react';
import VehicleCard from '../VehicleCard';
import VehicleListToolbar from '../VehicleListToolbar';
import useVehicleStore from '../../../../app/store/useVehicleStore';
import './styles.scss';

function SkeletonCard({ viewMode }) {
  return (
    <div
      className={`vl-skeleton ${viewMode === 'grid' ? 'vl-skeleton--grid' : ''}`}
    >
      <div className="vl-skeleton__thumb" />
      <div className="vl-skeleton__body">
        <div className="vl-skeleton__line vl-skeleton__line--title" />
        <div className="vl-skeleton__line vl-skeleton__line--meta" />
        <div className="vl-skeleton__badges">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="vl-skeleton__badge" />
          ))}
        </div>
      </div>
      {viewMode === 'list' && <div className="vl-skeleton__price-col" />}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="vl-empty">
      <span className="vl-empty__icon">🔍</span>
      <p className="vl-empty__title">Araç bulunamadı</p>
      <p className="vl-empty__sub">Filtrelerinizi değiştirmeyi deneyin.</p>
    </div>
  );
}

export default memo(function VehicleList() {
  const vehicles = useVehicleStore((state) => state.vehicles);
  const meta = useVehicleStore((state) => state.meta);
  const loading = useVehicleStore((state) => state.loading);
  const error = useVehicleStore((state) => state.error);
  const sortValue = useVehicleStore((state) => state.sortValue);
  const setSortValue = useVehicleStore((state) => state.setSortValue);
  const loadMore = useVehicleStore((state) => state.loadMore);

  const [viewMode, setViewMode] = useState('list');
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [loading, loadMore]);

  if (error) {
    return (
      <div className="vl-empty">
        <p className="vl-empty__title">{error}</p>
      </div>
    );
  }

  const hasMore = meta ? meta.current_page < meta.last_page : false;

  return (
    <section className="vl">
      <VehicleListToolbar
        totalCount={meta?.total ?? 0}
        pageStart={meta ? (meta.current_page - 1) * meta.per_page + 1 : 0}
        pageEnd={
          meta ? Math.min(meta.current_page * meta.per_page, meta.total) : 0
        }
        sortValue={sortValue}
        viewMode={viewMode}
        onSort={setSortValue}
        onViewMode={setViewMode}
      />

      <div
        className={`vl__list ${viewMode === 'grid' ? 'vl__list--grid' : ''}`}
      >
        {vehicles.length === 0 && !loading ? (
          <EmptyState />
        ) : (
          vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              viewMode={viewMode}
              auctionNo={vehicle.auctionNo}
              title={vehicle.title}
              location={vehicle.location}
              price={vehicle.price}
              detailUrl={vehicle.detailUrl}
              image={vehicle.image}
              brand={vehicle.brand}
              year={vehicle.year}
              mileage={vehicle.mileage}
              transmission={vehicle.transmission}
              fuel={vehicle.fuel}
              document={vehicle.document}
              damageStatus={vehicle.damageStatus}
            />
          ))
        )}
      </div>

      {/* Skeleton — yükleniyor */}
      {loading && (
        <div
          className={`vl__list ${viewMode === 'grid' ? 'vl__list--grid' : ''} mt-4`}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} viewMode={viewMode} />
          ))}
        </div>
      )}

      {/* Sentinel — scroll sonu algılayıcı */}
      {hasMore && !loading && <div ref={sentinelRef} className="vl-sentinel" />}

      {/* Tüm araçlar yüklendi */}
      {!hasMore && !loading && vehicles.length > 0 && (
        <p className="vl-end">Tüm araçlar yüklendi</p>
      )}
    </section>
  );
});
