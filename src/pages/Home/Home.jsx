// eslint-disable-next-line no-unused-vars
import React from "react";
import MyHeader from "../../components/Header/MyHeader";

const MyHome = () => {
  return (
    <>
      <MyHeader />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, HTML, CSS, NPM, MaterialUI, Yarn,
                StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default MyHome;
