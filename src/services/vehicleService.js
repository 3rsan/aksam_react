import api from './api';

export const getVehicles = async (params = {}) => {
  const response = await api.get('/vehicles', { params });
  return response.data;
};

export const getVehicleDetail = async (id) => {
  const response = await api.get(`/vehicles/${id}`);
  return response.data;
};

export const getFilters = async () => {
  const response = await api.get('/filters');
  return response.data;
};

export const getBrandModels = async (brandId) => {
  const response = await api.get(`/brands/${brandId}/models`);
  return response.data;
};

export const vehicleRequest = async (data) => {
  const response = await api.post('/vehicle-request', data);
  return response.data;
};
