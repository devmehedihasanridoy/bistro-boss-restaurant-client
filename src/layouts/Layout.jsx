import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const Layout = () => {
  return (
    <div>
      {/* shared navbar */}
      <Navbar />
      {/* Main content */}
      <main className="min-h-screen mx-auto container">
        <Outlet />
      </main>
      {/* shared footer */}
      <Footer />
    </div>
  );
};

export default Layout;
