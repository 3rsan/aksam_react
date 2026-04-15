import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../../features/home/layout';
import HomePage from '../../features/home/pages/Home';
import LoginRegister from '../../features/auth/pages/LoginRegister';
import CookiePolicy from '../../features/home/pages/CookiePolicy/CookiePolicy';
import PrivacyPolicy from '../../features/home/pages/PrivacyPolicy/PrivacyPolicy';
import AboutPage from '../../features/home/pages/About/AboutPage';
import ContactPage from '../../features/home/pages/Contact/ContactPage';
import ForgotPassword from '../../features/auth/pages/ForgotPassword/ForgotPassword';
import ProductDetailPage from '../../features/home/pages/VehicleDetail/ProductDetailPage';
import ResetPassword from '../../features/auth/pages/ResetPassword/ResetPassword';
import VehicleRequestSuccess from '../../features/home/pages/VehicleRequestSuccess/VehicleRequestSuccess';
import VehicleSellPage from '../../features/home/pages/VehicleSell/VehicleSellPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'araclar', element: <HomePage /> },
      { path: 'kayit-ol', element: <LoginRegister /> },
      { path: 'cerez-politikasi', element: <CookiePolicy /> },
      { path: 'aydinlatma-metni', element: <PrivacyPolicy /> },
      { path: 'kurumsal', element: <AboutPage /> },
      { path: 'iletisim', element: <ContactPage /> },
      { path: 'sifremi-unuttum', element: <ForgotPassword /> },
      { path: 'detay/:id/:slug', element: <ProductDetailPage /> },
      { path: 'sifremi-sifirla/:token', element: <ResetPassword /> },
      { path: 'arac-talep-basarili', element: <VehicleRequestSuccess /> },
      { path: 'arac-ekle', element: <VehicleSellPage /> },
    ],
  },
]);
