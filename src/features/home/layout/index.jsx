import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '@app/layout/components/Header';
import OffcanvasSidebar from '../components/Sidebar';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <OffcanvasSidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}
