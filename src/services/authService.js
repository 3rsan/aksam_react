import api from './api';

export const login = async (email, password, remember = false) => {
  const response = await api.post('/auth/login', { email, password, remember });
  return response.data;
};

export const register = async (data) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getMe = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await api.post('/auth/forgot-password', { email });
  return response.data;
};

export const resetPassword = async (token, data) => {
  const response = await api.post(`/auth/reset-password/${token}`, data);
  return response.data;
};
