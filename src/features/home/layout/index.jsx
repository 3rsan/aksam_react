import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../../../app/layout/header';
import OffcanvasSidebar from '../components/Sidebar';
import Footer from '../../../app/layout/footer';

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
      <Footer />
    </>
  );
}
