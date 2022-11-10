import React, { useState } from "react";
import logo from "../Image/logo.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
// this component usage for show Navbar

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  // set all nav items in one place
  const headerItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {/* use conditional rendering for login and logout user  */}
      {user?.uid ? (
        <>
          <li>
            <Link to={`/myreview/${user?.email}`}>My Reviews</Link>
          </li>{" "}
          <li>
            <Link to={"/addservices"}> Add Service</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
    </>
  );
  // my navbar
  return (
    <div
      style={{ marginTop: "0.03rem" }}
      className="navbar w-full bg-primary p-5 h-10 text-primary-content rounded-lg shadow-2xl"
    >
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {headerItems}
          </ul>
        </div>
        <span className=" normal-case flex items-center justify-evenly ">
          <img src={logo} className="h-14" alt="" />
          <p
            style={{ whiteSpace: "nowrap" }}
            className="underline decoration-dashed text-slate-700 sm:text-3xl"
          >
            PHOTO PRINCE
          </p>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{headerItems}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Header;
