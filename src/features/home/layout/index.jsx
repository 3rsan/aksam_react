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
        <main className="">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}
