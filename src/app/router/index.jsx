import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '@features/home/layout';
import HomePage from '@features/home/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
