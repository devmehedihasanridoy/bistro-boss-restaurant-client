import React from "react";
import AdminDashBoard from "./admin/AdminDashBoard";
import UserDashBoard from "./UserDashBoard";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
  const admin = true;
  return (
    <>
      {admin ? (
        <div className="flex justify-between items-start gap-x-20">
          <Helmet>
            <title>Admin Dashboard || bistro boss</title>
          </Helmet>
          <AdminDashBoard />
          <div className="flex-1">
            {" "}
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start gap-x-20">
          <Helmet>
            <title>User Dashboard || bistro boss</title>
          </Helmet>
          <div className="flex-1">
            <UserDashBoard />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
