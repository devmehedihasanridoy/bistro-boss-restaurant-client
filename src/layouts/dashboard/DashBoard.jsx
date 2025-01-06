import React from "react";
import AdminDashBoard from "./admin/AdminDashBoard";
import UserDashBoard from "./UserDashBoard";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAdmin from "../../components/hooks/useAdmin";

const DashBoard = () => {
  // is admin
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <>
      {isAdmin?.admin ? (
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
          <UserDashBoard />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
