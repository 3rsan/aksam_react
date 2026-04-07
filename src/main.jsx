import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './shared/styles/globals.scss';
import { SidebarProvider } from './app/providers/SidebarProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>,
);
