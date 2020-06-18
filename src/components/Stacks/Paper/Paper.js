import React from "react";
import "./Paper.css";
import Card from "../../Card";
import { AwesomeButton } from "react-awesome-button";
const Paper = (props) => {
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVunz9O8bA3oaVqgHFSXCo64lq5h7Fn8MCvY2utQCQ1ycEGqK_&usqp=CAU"
          alt="Paper"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>

      <Card title="Remaining Useful Life Prediction of Aluminum Electrolytic Capacitors Used in Wind Turbines">
        <li>Published on 2017 IEEE Pages 14.</li>
        <li>published on 2017 ICSREE Pages 121-124.</li>
      </Card>
    </React.Fragment>
  );
};

export default Paper;
