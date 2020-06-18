import React from "react";
import "./ComputerVision.css";
import Card from "../../Card";
import TextMarker from "./../../Text_Marker/TextMarker";
import { AwesomeButton } from "react-awesome-button";
const ComputerVision = (props) => {
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
          src="https://p1.pxfuel.com/preview/1003/622/364/eyeglasses-smartphone-business-mobile-gadget-communication.jpg"
          alt="ComputerVision"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>

      <Card title="Graph signal processing technique in image processing">
        <li>
          Designed an appropriate underlying graph connecting pixels with
          weights that reflect the image structure, then interpret the image (or
          image patch) as a signal on a graph, and apply GSP tools for
          processing and analysis of the signal in graph spectral domain.
        </li>
        <li>
          <TextMarker>
            MATLAB Algorithm Implemented: Max-flow/Min-cut/ K-means.
          </TextMarker>
        </li>
      </Card>
    </React.Fragment>
  );
};

export default ComputerVision;
