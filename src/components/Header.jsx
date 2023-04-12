import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center  py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-1">
        <div>
          <Link to="/">
            <span className="text-4xl  font-bold text-black">JobField</span>
          </Link>
        </div>
        <div className="flex">
          <ul className="items-center hidden space-x-8 lg:flex">
            <li className="text-xl">
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Home
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to="/statistics"
                aria-label="Statistics"
                title="Statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Statistics
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to="/applied"
                aria-label="Applied Jobs"
                title="Applied Jobs"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Applied Jobs
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to="/blogs"
                aria-label="Blogs"
                title="Blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/applied" className="btn-primary">
            Start Applying
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
