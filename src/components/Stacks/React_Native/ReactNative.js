import React from "react";
import "./ReactNative.css";
import { AwesomeButton } from "react-awesome-button";
const ReactNativeProject = (props) => {
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
          src="https://secure.meetupstatic.com/photos/event/2/c/5/c/highres_449651356.jpeg"
          alt="React_Native"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>

      <div className="Projects_Content">
        <h1>No uploaded found</h1>
        <p></p>
      </div>
    </React.Fragment>
  );
};

export default ReactNativeProject;
