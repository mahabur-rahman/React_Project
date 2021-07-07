import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  return (
    <>
      <header id="header">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" width="60" height="auto" />
              <span>ReactJs</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="activeMenu"
                    className="nav-link px-4"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeMenu"
                    className="nav-link px-4"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeMenu"
                    className="nav-link px-4"
                    aria-current="page"
                    to="/service"
                  >
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeMenu"
                    className="nav-link px-4"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
