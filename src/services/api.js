import axios from "axios";
import { getDeviceInfo } from "../shared/utils/deviceDetect";

const isDev = import.meta.env.VITE_APP_ENV === "development";

const config = {
  development: {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 30000,
    csrfTTL: 1000 * 60,
  },
  production: {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 15000,
    csrfTTL: 1000 * 60 * 60 * 2,
  },
};

const activeConfig = isDev ? config.development : config.production;

const api = axios.create({
  baseURL: activeConfig.baseURL,
  timeout: activeConfig.timeout,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// let csrfInitializedAt = null;

// const initCSRF = async () => {
//   const now = Date.now();
//   if (csrfInitializedAt && now - csrfInitializedAt < activeConfig.csrfTTL)
//     return;

//   await axios.get(`${activeConfig.baseURL}/sanctum/csrf-cookie`, {
//     withCredentials: true,
//   });

//   csrfInitializedAt = now;
// };

// const getXSRFToken = () => {
//   const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
//   return match ? decodeURIComponent(match[1]) : null;
// };

// api.interceptors.request.use(async (config) => {
//   await initCSRF();

//   const xsrf = getXSRFToken();
//   if (xsrf) {
//     config.headers['X-XSRF-TOKEN'] = xsrf;
//   }

//   return config;
// });

// Token varsa her isteğe ekle
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Channel bilgisi
  const { channel } = getDeviceInfo();
  config.headers["X-Channel"] = channel;

  return config;
});

export default api;
