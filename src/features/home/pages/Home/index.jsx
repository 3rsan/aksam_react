import SidebarFilter from '../../components/SideBarFilter';
import VehicleList from '../../components/VehicleList';

function Home() {
  return (
    <div className="flex gap-6">
      <div className="w-72 flex-shrink-0">
        <SidebarFilter onFilter={(filters) => console.log(filters)} />
      </div>
      <div className="flex-1">
        <VehicleList></VehicleList>
      </div>
    </div>
  );
}

export default Home;
