import React from "react";
import "./AngularProjects.css";
import Card from "../../Card";
import TextMarker from "./../../Text_Marker/TextMarker";
import { AwesomeButton } from "react-awesome-button";
const AngularProjects = (props) => {
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
          src="https://angular.io/assets/images/logos/angular/angular.png"
          alt="Angular"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>
      <Card title="Fast Food Shopping Platform">
        <li>
          Worked on Angular9 concepts such as routes, components, directives,
          services, lifecycle hooks, decorators and forms module.
        </li>
        <li>
          Implemented routing and authenticated the routes using router module
          and route guards respectively. Used @Input and @Output decorators,
          Observables and Subject for data transfers between nested and sibling
          components respectively
        </li>
        <li>
          Built backend with Node.JS and Express.JS to transfer data between
          front and backend using JSON and authenticated the user information
          using JWT. Performed various queries using Mongoose to update /
          retrieve data from MongoDB.
        </li>
        <li>
          <TextMarker>
            Stacks: Javascript, Angular9, Express.js, Node.js, Mongoose,
            postmans.
          </TextMarker>
        </li>
      </Card>
    </React.Fragment>
  );
};

export default AngularProjects;
