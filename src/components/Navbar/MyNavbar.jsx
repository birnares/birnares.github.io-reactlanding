// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import MyBtnDarkMode from "../BtnDarkLight/MyBtnDarkMode";
import "./Navbar.css";

const MyNavbar = () => {
  const aLink = "nav-list__link nav-list__link--active";
  const nLink = "nav-list__link";

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>
            <MyBtnDarkMode />
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? aLink : nLink;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) => {
                    return isActive ? aLink : nLink;
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => {
                    return isActive ? aLink : nLink;
                  }}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
