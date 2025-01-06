import React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaShoppingCart,
  FaStar,
  FaClipboardList,
  FaListAlt,
  FaEnvelope,
} from "react-icons/fa";

const  UserDashBoard = () => {
  return (
  
     
        <div className="w-64 h-screen bg-gradient-to-b from-orange-500 to-orange-600 text-white">
          <div className="text-center py-8">
            <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
            <p className="text-sm uppercase tracking-widest">Restaurant</p>
          </div>
          <nav className="space-y-4">
            <div className="border-b border-white pb-4">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaHome className="mr-4" />
                User Home
              </NavLink>
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaCalendarAlt className="mr-4" />
                Reservation
              </NavLink>
              <NavLink
                to="/payment-history"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaHistory className="mr-4" />
                Payment History
              </NavLink>
              <NavLink
                to="/dashboard/cart"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaShoppingCart className="mr-4" />
                My Cart
              </NavLink>
              <NavLink
                to="/add-review"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaStar className="mr-4" />
                Add Review
              </NavLink>
              <NavLink
                to="/my-booking"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaClipboardList className="mr-4" />
                My Booking
              </NavLink>
            </div>
            <div className="pt-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaHome className="mr-4" />
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaListAlt className="mr-4" />
                Menu
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaShoppingCart className="mr-4" />
                Shop
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 text-lg ${
                    isActive
                      ? "bg-orange-700 rounded-md"
                      : "hover:bg-orange-400"
                  }`
                }
              >
                <FaEnvelope className="mr-4" />
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
  
  );
};

export default UserDashBoard;
