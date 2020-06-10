import React from "react";
import "./Projects.css";
import ReactProjects from "./Stacks/React/ReactProjects";
import AngularProjects from "./Stacks/Angular/AngularProjects";

const Projects = (props) => {
  return (
    <div className="Container">
      {props.status === "" || (props.status === "React" && <ReactProjects />)}
      {props.status === "Angular" && <AngularProjects />}
    </div>
  );
};

export default Projects;
