import React from "react";
import "./ReactProjects.css";
import Card from "../../Card";
import TextMarker from "./../../Text_Marker/TextMarker";
import { AwesomeButton } from "react-awesome-button";

const ReactProjects = (props) => {
  const hideDetails = () => {
    props.setStatus("");
  };
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
          <AwesomeButton size="small" type="secondary" onPress={hideDetails}>
            hide
          </AwesomeButton>
        </div>
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          alt="React"
        />
      </div>

      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>

      <Card title="Gourmet and Place Sharing Social App - MERN">
        <li>
          Built frontend with reusable components like input, form, button, map,
          card, backdrop, validators, navigation, side drawer, and so on.
        </li>
        <li>
          Built the REST API, which Includes routing, handling errors, adding
          controllers, validating API input and request, converting geocoding
          API, file uploading, and so on./
        </li>
        <li>
          Built database about CRUD with mongoose. Also working on the security
          include hashing the password, JWT, middleware protection.
        </li>
        <li>
          <TextMarker>
            Stacks: Javascript, React.js, Express.js, Node.js, Mongoose,
            postman, Mongo Atlas
          </TextMarker>
        </li>
      </Card>
      <Card title="Movie Ranking Application - MERN">
        <li>
          Developing new user-facing features, building reusable components
          about pagination, filtering, routing and sorting for future use.
          <TextMarker>(Javascript, React.js, Bootstrap 4, CSS)</TextMarker>
        </li>
        <li>
          Developing micro backend services for authentication and authorization
          with the databases. Configured router along with Redux Store and
          Provider. Added Dynamic Functionality by creating and dispatching
          React Action Creators that deployed Actions. Created and used Reducers
          that received said Actions to modify the Redux Store State Tree.
          <TextMarker>
            (Node.js, Express, MongoDB, JSON, Sentry)
          </TextMarker>{" "}
        </li>
        <li>
          Deploying the full-stack application.{" "}
          <TextMarker>(Mlab, MongleDB, Heroku)</TextMarker>
        </li>
      </Card>

      <Card title="Customized Drink and Order System - MERN">
        <li>
          designed and developed the Single Page Application using ReactJS v16.6
          and CSS3 and bootstrap used for better UI.
        </li>
        <li>
          Built the REST API, which Includes routing, handling errors, adding
          controllers, validating API input and request. Dealt with in-app API
          development and third party REST API integration using the routing
          module. Invoked promises for handling data fetched from APIs in a
          synchronous manner.
        </li>
        <li>
          Created automation Postman testing for API’s and integrated it with
          command line, organizing and maintaining the collections and
          environments. Built database about CRUD with mongoose. Also working on
          the order page which include send order request using AJAX to the
          server and save the order history in the database.
        </li>
        <li>
          <TextMarker>
            Stacks: Javascript, React.js, Express.js, Node.js, Mongoose,
            postman, Mongo Atlas
          </TextMarker>
        </li>
      </Card>
    </React.Fragment>
  );
};

export default ReactProjects;
