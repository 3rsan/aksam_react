import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  login,
  logout,
  getMe,
  register,
  forgotPassword,
} from '../../services/authService';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      login: async (email, password, remember) => {
        set({ loading: true, error: null });
        try {
          const data = await login(email, password, remember);
          localStorage.setItem('token', data.token);
          set({ user: data.user, token: data.token, loading: false });
          return { success: true };
        } catch (err) {
          const message = err.response?.data?.message || 'Giriş başarısız.';
          set({ error: message, loading: false });
          return { success: false, message };
        }
      },

      register: async (formData) => {
        set({ loading: true, error: null });
        try {
          await register(formData);
          set({ loading: false });
          return { success: true };
        } catch (err) {
          const message = err.response?.data?.message || 'Kayıt başarısız.';
          set({ error: message, loading: false });
          return { success: false, message };
        }
      },

      logout: async () => {
        try {
          await logout();
        } catch (_) {}
        localStorage.removeItem('token');
        set({ user: null, token: null });
      },

      fetchMe: async () => {
        try {
          const data = await getMe();
          set({ user: data });
        } catch (_) {
          set({ user: null, token: null });
          localStorage.removeItem('token');
        }
      },

      forgotPassword: async (email) => {
        set({ loading: true, error: null });
        try {
          await forgotPassword(email);
          set({ loading: false });
          return { success: true };
        } catch (err) {
          const message = err.response?.data?.message || 'Bir hata oluştu.';
          set({ error: message, loading: false });
          return { success: false, message };
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
);

export default useAuthStore;
