/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import MyBtnGit from "../../components/BtnGithub/MyBtnGit";
import { projects } from "../../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

            <img
              src={project.imageBig}
              alt={project.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p>Skills: {project.skill}</p>
            </div>
            <MyBtnGit link="https://github.com" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
