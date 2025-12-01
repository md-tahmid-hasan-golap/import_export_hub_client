import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import logo from "../../src/assets/photo-1726828537956-61ae115d7d7a.avif";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  const links = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="font-bold">
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
          }
        >
          All Products
        </NavLink>
      </li>

      {user && (
        <>
          <li className="font-bold">
            <NavLink
              to="/myExports"
              className={({ isActive }) =>
                isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
              }
            >
              My Products
            </NavLink>
          </li>

          <li className="font-bold">
            <NavLink
              to="/myImports"
              className={({ isActive }) =>
                isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
              }
            >
              My Imports
            </NavLink>
          </li>

          <li className="font-bold">
            <NavLink
              to="/addExport"
              className={({ isActive }) =>
                isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
              }
            >
              Add Products
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50 max-w-6xl mx-auto w-full rounded-lg">
      <div className="navbar">
        {/* Navbar Start */}
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-lg"
            />
            <h2 className="text-lg sm:text-xl md:text-xl hidden md:flex lg:text-[16px] font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Import Export Hub
            </h2>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          {/* Dark Mode Toggle */}
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle"
          />

          {user ? (
            <>
              <img
                className="border-2 border-green-600 w-12 h-12 rounded-full"
                src={user.photoURL}
                title={user.displayName}
                alt=""
              />

              <button
                onClick={handelLogout}
                className="btn bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                   text-white font-bold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 
                   transition-all duration-300"
              >
                Login
              </Link>

              <Link to="/register" className="btn btn-outline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
