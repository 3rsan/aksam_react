import useVehicleStore from '../../../app/store/useVehicleStore';

export default function useVehicleBrands() {
  const markalar = useVehicleStore((state) => state.filters.markalar);
  const loading = markalar.length === 0;

  const brands = markalar.map((m) => ({
    marka_ref_no: m.marka_ref_no,
    marka: m.marka,
    arac_resim: `https://www.carlogos.org/car-logos/${m.marka.toLowerCase().replace(/\s/g, '-')}-logo.png`,
  }));

  return { brands, loading: loading, error: null };
}
