import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/our menu/OurMenu";
import OurShop from "../pages/our shop/OurShop";
import DashBoard from "../pages/dashboard/DashBoard";
import NotFound from "../pages/not-found/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/menu" element={<OurMenu />} />
        <Route path="/shop" element={<OurShop />} />
      </Route>
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
