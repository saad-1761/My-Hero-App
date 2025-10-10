import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300 ">
      <Container>
        <div className="navbar bg-base-100 shadow-sm py-3 lg:py-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text"
                        : "text-black text-xl"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/apps"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-semibold bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text"
                        : "text-black text-xl font-semibold"
                    }
                  >
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/installations"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-semibold bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text"
                        : "text-black text-xl font-semibold"
                    }
                  >
                    Installations
                  </NavLink>
                </li>
              </ul>
            </div>

            <Link to="/" className=" text-xl p-2 md:p-5">
              <div className="flex items-center gap-2">
                <img className="h-8 md:h-15" src={logo} alt="logo" />
                <span className="font-bold text-xl bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text">
                  HERO.IO
                </span>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-semibold bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text"
                      : "text-black text-xl font-semibold"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-semibold bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text"
                      : "text-black text-xl font-semibold"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installations"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-semibold bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text"
                      : "text-black text-xl font-semibold"
                  }
                >
                  Installations
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink
              to="https://github.com/saad-1761"
              className="text-sm md:text-2xl text-white font-bold p-2.5 rounded-md bg-gradient-to-r from-[#632ee2] to-[#9f62f2]"
            >
              <i className="fa-brands fa-github mr-1"></i>
              Contribute
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
