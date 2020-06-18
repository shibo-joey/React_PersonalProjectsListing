import React from "react";
import "./PythonProject.css";
import { AwesomeButton } from "react-awesome-button";
const PythonProject = (props) => {
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
          src="https://datarebellion.com/wp-content/uploads/2018/04/python-logo-300x300.png"
          alt="Python"
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

export default PythonProject;
