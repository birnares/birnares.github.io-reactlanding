/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Project.css";
import { NavLink } from "react-router-dom";

const MyProject = ({ title, image, index }) => {
  return (
    <>
      <NavLink to={`/project/${index}`}>
        <li className="project">
          <img src={image} alt={title} className="project__img" />
          <h3 className="project__title">{title}</h3>
        </li>
      </NavLink>
    </>
  );
};

export default MyProject;
