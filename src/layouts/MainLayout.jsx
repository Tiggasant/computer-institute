import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingContactBar from "../components/common/FloatingContactBar";
import ScrollToTop from "../components/common/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-16 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactBar />
    </div>
  );
}
