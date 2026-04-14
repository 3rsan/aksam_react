import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router';
import ScrollToTopButton from './shared/components/ScrollToTopButton/ScrollToTopButton';
import CookieBanner from './shared/components/CookieBanner/CookieBanner';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
      <CookieBanner />
    </>
  );
}

export default App;
