import React from "react";
import "./Projects.css";
import ReactProjects from "./Stacks/React/ReactProjects";
import AngularProjects from "./Stacks/Angular/AngularProjects";
import ReactNativeProject from "./Stacks/React_Native/ReactNative";
import JavaProject from "./Stacks/Java/JavaProject";
import JavascriptProject from "./Stacks/Javascript/JavascriptProject";
import NodejsProject from "./Stacks/Nodejs/NodejsProject";
import PythonProject from "./Stacks/Python/PythonProject";
import AndroidProject from "./Stacks/Android/AndroidProject";
import ComputerVision from "./Stacks/ComputerVision/ComputerVision";

const Projects = (props) => {
  return (
    <div className="Container">
      {props.status === "" || (props.status === "React" && <ReactProjects />)}
      {props.status === "Angular" && <AngularProjects />}
      {props.status === "React_Native" && <ReactNativeProject />}
      {props.status === "Java" && <JavaProject />}
      {props.status === "Javascript" && <JavascriptProject />}
      {props.status === "Node.js" && <NodejsProject />}
      {props.status === "Python" && <PythonProject />}
      {props.status === "Android" && <AndroidProject />}
      {props.status === "ComputerVision" && <ComputerVision />}
    </div>
  );
};

export default Projects;
