import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <Link to="/">
            <span className="text-xl font-bold text-black">JobField</span>
          </Link>
        </div>
        <div className="flex">
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                aria-label="Shop"
                title="Shop"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feature"
                aria-label="Shop"
                title="Shop"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="About Us"
                title="About Us"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn-primary">Start Applying</button>
        </div>
      </div>
    </>
  );
};

export default Header;
