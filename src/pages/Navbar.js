import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <>
      <Link>
        <li>
          <Link className="font-semibold" to="/">
            Home
          </Link>
          <Link className="font-semibold" to="/about">
            About
          </Link>
          <Link className="font-semibold" to="/projects">
            Projects
          </Link>
          <Link className="font-semibold" to="/blog">
            Blogs
          </Link>
          <Link className="font-semibold" to="/contact">
            Contact
          </Link>
        </li>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link className="text-2xl font-bold">Portfolio</Link>
        </div>
        <div className="navbar-center hidden lg:flex ml-auto">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
