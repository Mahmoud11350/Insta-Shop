import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Layout;
