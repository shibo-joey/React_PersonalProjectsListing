import React from "react";
import "./Robot.css";
import Card from "../../Card";
import TextMarker from "./../../Text_Marker/TextMarker";
import { AwesomeButton } from "react-awesome-button";

const RobotProject = (props) => {
  return (
    <React.Fragment>
      <div className="ImageContainer">
        <div
          style={{
            textAlign: "left",
            marginLeft: "20px",
            float: "left",
          }}
        >
          <AwesomeButton
            size="small"
            type="secondary"
            onPress={props.hideDetails}
          >
            hide
          </AwesomeButton>
        </div>
        <img
          src="http://pngimg.com/uploads/robot/robot_PNG47.png"
          alt="Robotic"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>
      <Card title="Design of Joint Unit Motion Controller for Robotics-Graduation Design">
        <li>
          Designed the motion controller based on{" "}
          <TextMarker>STM32 microcontroller</TextMarker> to realize the
          multi-channel synchronous motor motion control, and joint unit Angle
          position detection.
        </li>
        <li>
          Built the motor test platform to complete the motor synchronous motor
          function test.
        </li>
        <li>
          {" "}
          Design of <TextMarker>Parallel Joint Control Circuit </TextMarker>for
          Flexible RobotsCollege Student Research and Career-creation Program of
          Beijing City
        </li>
      </Card>
    </React.Fragment>
  );
};

export default RobotProject;
