import { create } from 'zustand';
import { getVehicles, getFilters } from '../../services/vehicleService';

function sortVehicles(vehicles, sortValue) {
  if (!sortValue) return vehicles;
  const sorted = [...vehicles];

  switch (sortValue) {
    case 'priceAsc':
      return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case 'priceDesc':
      return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    case 'oldest':
      return sorted.sort((a, b) => a.id - b.id);
    default:
      return vehicles;
  }
}

function parsePrice(priceStr = '') {
  return Number(String(priceStr).replace(/[^\d]/g, '')) || 0;
}

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
    const isLoadMore = params._loadMore;
    delete params._loadMore;

    set({ loading: true, error: null });
    try {
      const data = await getVehicles({ ...get().activeFilters, ...params });
      set((state) => ({
        vehicles: isLoadMore ? [...state.vehicles, ...data.data] : data.data,
        meta: data.meta,
        loading: false,
      }));
    } catch {
      set({ error: 'Araçlar yüklenemedi.', loading: false });
    }
  },

  loadMore: () => {
    const { meta, loading } = get();

    if (!meta || meta.current_page >= meta.last_page) return;
    if (loading) return;

    // Hemen loading'i true yap, çift tetiklenmeyi engelle
    set({ loading: true });
    get().fetchVehicles({
      page: meta.current_page + 1,
      _loadMore: true,
    });
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
    set({
      activeFilters: filters,
      vehicles: [],
      meta: {
        total: 0,
        per_page: 15,
        current_page: 1,
        last_page: 1,
      },
    });
    get().fetchVehicles({ page: 1, ...filters });
  },

  setSortValue: (value) => {
    set({ sortValue: value });
    // API isteği atmadan mevcut vehicles'ı sırala
    const sorted = sortVehicles(get().vehicles, value);
    set({ vehicles: sorted });
  },

  setPage: (page) => {
    get().fetchVehicles({ page });
  },

  clearFilters: () => {
    set({
      activeFilters: {},
      sortValue: '',
      vehicles: [],
      meta: {
        total: 0,
        per_page: 15,
        current_page: 1,
        last_page: 1,
      },
    });
    get().fetchVehicles({ page: 1 });
  },
}));

export default useVehicleStore;
