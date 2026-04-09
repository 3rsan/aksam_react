import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '@features/home/layout';
import HomePage from '@features/home/pages/Home';
import LoginRegister from '../../features/auth/pages/LoginRegister';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'kayit-ol', element: <LoginRegister /> },
    ],
  },
]);
