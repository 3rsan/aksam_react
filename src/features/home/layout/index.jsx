import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../../app/layout/header";
import OffcanvasSidebar from "../components/Sidebar";
import Footer from "../../../app/layout/footer/Footer";
import GoogleAnalyticsProvider from "../../../app/providers/GoogleAnalyticsProvider";

export default function HomeLayout() {
  return (
    <GoogleAnalyticsProvider>
      <Header />
      <OffcanvasSidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <main className="">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </GoogleAnalyticsProvider>
  );
}
