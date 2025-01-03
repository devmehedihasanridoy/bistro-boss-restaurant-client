import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUtensils, FaUsers, FaListAlt, FaShoppingCart, FaEnvelope } from "react-icons/fa";

const SidebarMenu = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-orange-500 to-orange-600 text-white">
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
        <p className="text-sm uppercase tracking-widest">Restaurant</p>
      </div>
      <nav className="space-y-4">
        <div className="border-b border-white pb-4">
          <NavLink
            to="/admin-home"
            className={({ isActive }) =>
              `flex items-center px-6 py-2 text-lg ${
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
              }`
            }
          >
            <FaHome className="mr-4" />
            Admin Home
          </NavLink>
          <NavLink
            to="/add-items"
            className={({ isActive }) =>
              `flex items-center px-6 py-2 text-lg ${
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
              }`
            }
          >
            <FaUtensils className="mr-4" />
            Add Items
          </NavLink>
          <NavLink
            to="/manage-items"
            className={({ isActive }) =>
              `flex items-center px-6 py-2 text-lg ${
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
              }`
            }
          >
            <FaListAlt className="mr-4" />
            Manage Items
          </NavLink>
          <NavLink
            to="/manage-bookings"
            className={({ isActive }) =>
              `flex items-center px-6 py-2 text-lg ${
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
              }`
            }
          >
            <FaEnvelope className="mr-4" />
            Manage Bookings
          </NavLink>
          <NavLink
            to="/all-users"
            className={({ isActive }) =>
              `flex items-center px-6 py-2 text-lg ${
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
              }`
            }
          >
            <FaUsers className="mr-4" />
            All Users
          </NavLink>
        </div>
        <div className="pt-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center px-6 py-2 text-lg ${
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
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
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
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
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
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
                isActive ? "bg-orange-700 rounded-md" : "hover:bg-orange-400"
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

export default SidebarMenu;
