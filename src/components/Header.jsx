import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isopen, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-around items-center px-4 py-8 mx-auto w-full md:px-24 lg:px-1 bg-blue-100">
        <div>
          <Link to="/">
            <span className="text-4xl font-bold text-black">JobField</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!isopen)}>
            {isopen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3BottomLeftIcon className="h-8 w-8" />
            )}
          </button>
        </div>
        <div
          className={`list-none md:flex duration-1000 w-full md:w-auto bg-blue-100 md:bg-transparent absolute top-20 md:static left-0 md:left-auto right-0 md:right-auto gap-5 md:gap-0 py-4 px-3 md:py-0 md:px-0 items-center ${
            isopen ? "flex flex-col" : "hidden"
          }`}>
          <ul className="text-2xl font-semibold text-black md:text-xl list-none md:flex md:space-x-7">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
                onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                aria-label="Statistics"
                title="Statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}
                onClick={() => setOpen(false)}>
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applied"
                aria-label="Applied Jobs"
                title="Applied Jobs"
                className={({ isActive }) => (isActive ? "active" : "default")}
                onClick={() => setOpen(false)}>
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="Blogs"
                title="Blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
                onClick={() => setOpen(false)}>
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <Link
              to="/applied"
              className="btn-primary"
              onClick={() => setOpen(false)}>
              Start Applying
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
