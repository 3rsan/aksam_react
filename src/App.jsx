import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router';
import ScrollToTopButton from './shared/components/ScrollToTopButton/ScrollToTopButton';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
