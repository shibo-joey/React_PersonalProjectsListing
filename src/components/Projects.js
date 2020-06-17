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
import ArduinoProject from "./Stacks/Arduino/Arduino";
import RobotProject from "./Stacks/Robot/Robot";
import FPGA from "./Stacks/FPGA/FPGA";
import Paper from "./Stacks/Paper/Paper";

const Projects = (props) => {
  const hideDetails = () => {
    props.setStatus("");
  };
  return (
    <div className="Container">
      {props.status === "" ||
        (props.status === "React" && (
          <ReactProjects setStatus={props.setStatus} />
        ))}
      {props.status === "Angular" && (
        <AngularProjects hideDetails={hideDetails} />
      )}
      {props.status === "React_Native" && (
        <ReactNativeProject hideDetails={hideDetails} />
      )}
      {props.status === "Java" && <JavaProject hideDetails={hideDetails} />}
      {props.status === "Javascript" && (
        <JavascriptProject hideDetails={hideDetails} />
      )}
      {props.status === "Node.js" && (
        <NodejsProject hideDetails={hideDetails} />
      )}
      {props.status === "Python" && <PythonProject hideDetails={hideDetails} />}
      {props.status === "Android" && (
        <AndroidProject hideDetails={hideDetails} />
      )}
      {props.status === "ComputerVision" && (
        <ComputerVision hideDetails={hideDetails} />
      )}
      {props.status === "Arduino" && (
        <ArduinoProject hideDetails={hideDetails} />
      )}
      {props.status === "Robotic Control" && (
        <RobotProject hideDetails={hideDetails} />
      )}
      {props.status === "FPGA" && <FPGA hideDetails={hideDetails} />}
      {props.status === "Paper" && <Paper hideDetails={hideDetails} />}
    </div>
  );
};

export default Projects;
