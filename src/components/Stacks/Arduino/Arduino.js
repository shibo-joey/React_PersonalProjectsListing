import React from "react";
import "./Arduino.css";
import Card from "../../Card";
import { AwesomeButton } from "react-awesome-button";
const ArduinoProject = (props) => {
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Antu_arduino-icon-small.svg/512px-Antu_arduino-icon-small.svg.png"
          alt="Arduino"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>

      <Card title="Consumer Optoelectronics">
        <li>
          In this project, oximeter, real-time clock, GPS, LCD screen and
          Bluetooth functions are implemented based on Arduino.
        </li>
        <li>
          Using sensors to gather the data from the human body then communicate
          data to personal mobile phones or laptops through Bluetooth so that
          the data can live monitored by the user.
        </li>
      </Card>
    </React.Fragment>
  );
};

export default ArduinoProject;
