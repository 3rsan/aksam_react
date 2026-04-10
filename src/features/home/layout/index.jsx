import { useEffect } from 'react';
import SidebarFilter from '../../components/SideBarFilter';
import VehicleList from '../../components/VehicleList';
import VehicleBrandSlider from '../../components/BrandSlider';
import useVehicleStore from '../../../../store/useVehicleStore';

function Home() {
  const { fetchVehicles, fetchFilters } = useVehicleStore();

  useEffect(() => {
    fetchFilters();
    fetchVehicles();
  }, []);

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
