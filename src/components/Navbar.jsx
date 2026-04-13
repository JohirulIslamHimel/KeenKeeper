import React from "react";

import { Link, NavLink } from "react-router-dom";
import { Home, History, BarChart3 } from "lucide-react";

import navLogo from "../assets/navLogo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#244D3F]! text-white!" : ""
          }
        >
          <Home size={18} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive ? "bg-[#244D3F]! text-white!" : ""
          }
        >
          <History size={18} /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive ? "bg-[#244D3F]! text-white!" : ""
          }
        >
          <BarChart3 size={18} /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img
            src={navLogo}
            alt="KeenKeeper Logo"
            className="w-40 object-contain"
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
