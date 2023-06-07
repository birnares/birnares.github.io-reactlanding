/* eslint-disable no-unused-vars */

import React from "react";
import { projects } from "./../../helpers/projectsList";
import MyProject from "../../components/Project/MyProject";

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <MyProject
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
