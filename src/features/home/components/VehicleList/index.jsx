import { useEffect, useState } from 'react';
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

export default function VehicleList() {
  const {
    vehicles,
    meta,
    loading,
    error,
    sortValue,
    fetchVehicles,
    setSortValue,
    setPage,
  } = useVehicleStore();

  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  if (error) {
    return (
      <div className="vl-empty">
        <p className="vl-empty__title">{error}</p>
      </div>
    );
  }

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
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} viewMode={viewMode} />
          ))
        ) : vehicles.length === 0 ? (
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

      {/* Sayfalama */}
      {meta?.last_page > 1 && (
        <div className="vl-pagination">
          {Array.from({ length: meta.last_page }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setPage(page)}
                className={`vl-pagination__btn ${meta.current_page === page ? 'vl-pagination__btn--active' : ''}`}
              >
                {page}
              </button>
            ),
          )}
        </div>
      )}
    </section>
  );
}
