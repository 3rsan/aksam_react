import { create } from 'zustand';
import { getVehicles, getFilters } from '../../services/vehicleService';

const useVehicleStore = create((set, get) => ({
  vehicles: [],
  filters: {
    markalar: [],
    aracTuru: [],
    yakitTuru: [],
    vitesTuru: [],
  },
  meta: {
    total: 0,
    per_page: 15,
    current_page: 1,
    last_page: 1,
  },
  activeFilters: {},
  sortValue: '',
  loading: false,
  error: null,

  fetchVehicles: async (params = {}) => {
    set({ loading: true, error: null });
    try {
      const data = await getVehicles({ ...get().activeFilters, ...params });
      set({
        vehicles: data.data,
        meta: data.meta,
        loading: false,
      });
    } catch {
      set({ error: 'Araçlar yüklenemedi.', loading: false });
    }
  },

  fetchFilters: async () => {
    try {
      const data = await getFilters();
      set({ filters: data });
    } catch {
      // Silently handle filter fetch errors
    }
  },

  setActiveFilters: (filters) => {
    set({ activeFilters: filters });
    get().fetchVehicles({ page: 1, ...filters });
  },

  setSortValue: (value) => {
    set({ sortValue: value });
    get().fetchVehicles({ sirala: value, page: 1 });
  },

  setPage: (page) => {
    get().fetchVehicles({ page });
  },

  clearFilters: () => {
    set({ activeFilters: {}, sortValue: '' });
    get().fetchVehicles({ page: 1 });
  },
}));

export default useVehicleStore;
