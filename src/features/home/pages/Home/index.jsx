import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useVehicleStore from '../../../../app/store/useVehicleStore';
import SidebarFilter from '../../components/SideBarFilter';
import VehicleList from '../../components/VehicleList';
import VehicleBrandSlider from '../../components/BrandSlider';

function Home() {
  const [searchParams] = useSearchParams();
  const fetchVehicles = useVehicleStore((state) => state.fetchVehicles);
  const fetchFilters = useVehicleStore((state) => state.fetchFilters);
  const setActiveFilters = useVehicleStore((state) => state.setActiveFilters);

  useEffect(() => {
    fetchFilters();
    const markaRefNo = searchParams.get('marka');
    if (markaRefNo) {
      setActiveFilters({ markaRefNo });
    } else {
      fetchVehicles();
    }
  }, [searchParams, fetchFilters, setActiveFilters, fetchVehicles]);

  return (
    <>
      <VehicleBrandSlider />
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <div className="w-72 flex-shrink-0 hidden lg:block">
          <SidebarFilter />
        </div>
        <div className="flex-1 min-w-0">
          <VehicleList />
        </div>
      </div>
    </>
  );
}

export default Home;
