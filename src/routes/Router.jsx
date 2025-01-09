import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/our menu/OurMenu";
import OurShop from "../pages/our shop/OurShop";
import NotFound from "../pages/not-found/NotFound";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Secret from "../components/shared/secret/Secret";
import Cart from "../pages/dashboard/Cart";
import UserHome from "../pages/dashboard/UserHome";
import DashBoard from "../layouts/dashboard/DashBoard";
import AllUsers from "../pages/dashboard/admin/AllUsers";
import AdminPrivate from "../privateRoute/AdminPrivate";
import AddItems from "../pages/dashboard/admin/AddItems";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHisory from "../pages/dashboard/PaymentHisory";

const Router = () => {
  return (
    <Routes>
      {/* Public Routes with Main Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<OurMenu />} />
        {/* Shop Routes */}
        <Route path="shop">
          <Route index element={<OurShop />} />
          <Route path=":category" element={<OurShop />} />
        </Route>
      </Route>
      {/* user dashboard layout */}
      <Route path="dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>
      {/* for users */}
        <Route index  element={<UserHome/>} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment-history" element={<PaymentHisory />} />
        {/* admin route */}
        <Route path="all-users" element={<AdminPrivate><AllUsers/></AdminPrivate>} />
        <Route path="add-items" element={<AdminPrivate><AddItems/></AdminPrivate>} />
        <Route path="manage-items" element={<AdminPrivate><ManageItems/></AdminPrivate>}/>
        <Route path="manage-items/update/:id" element={<AdminPrivate><UpdateMenu/></AdminPrivate>}/>
      </Route>
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
      {/* auth */}
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Route>
      {/* secret */}
      <Route
        path="secret"
        element={
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
