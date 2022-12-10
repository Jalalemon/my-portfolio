import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpeg'
const Nav = () => {
    const menuItems = (
      <>
        <li>
          <Link to="/">
            {" "}
            <button className="btn btn-outline  btn-sm"> Home</button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/allprojects">
            {" "}
            <button className="btn btn-outline  btn-sm"> Projects</button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/skills">
            {" "}
            <button className="btn btn-outline  btn-sm"> Skills</button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/about">
            {" "}
            <button className="btn btn-outline  btn-sm"> About</button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {" "}
            <button className="btn btn-sm btn-outline"> Contact</button>{" "}
          </Link>
        </li>
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
                {menuItems}
              </ul>
            </div>
            <div className="">
              <img className="rounded-full w-14 h-14" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-5 menu-horizontal p-0">{menuItems}</ul>
          </div>
          {/* <div className="navbar-end">
            <a className="btn">Get started</a>
          </div> */}
        </div>
      </div>
    );
};

export default Nav;