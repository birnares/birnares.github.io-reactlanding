/* eslint-disable no-unused-vars */
import React from "react";
import "./MyBtnGit.css";
import gitHubIcon from "./gitHub-black.svg";

const MyBtnGit = (link) => {
  return (
    <>
      <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
        <img src={gitHubIcon} alt="" />
        GitHub repo
      </a>
    </>
  );
};

export default MyBtnGit;
