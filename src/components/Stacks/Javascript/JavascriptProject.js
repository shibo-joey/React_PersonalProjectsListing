import React from "react";
import "./JavascriptProject.css";
import Card from "../../Card";
import TextMarker from "./../../Text_Marker/TextMarker";
import { AwesomeButton } from "react-awesome-button";
const JavascriptProject = (props) => {
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
          src="https://cdn.auth0.com/blog/jsleaks/logo.png"
          alt="Javascript"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>

      <Card title="Lock monitoring technology">
        <li>
          In charge of the software part of the smart lock. Including the
          development of web app and android app. Sent the data from the Lora
          module to the cloud (Senet and Thingspeak).
        </li>
        <li>
          Both client-side and service-side implementation of the web app.
          received the data from the cloud in real-time and update the front-end
          on the web page in real-time. The Web is hosting on GitHub:{" "}
          <a href="https://mcd9ub.github.io/">https://mcd9ub.github.io/</a>{" "}
        </li>
        <li>
          Best project award for the 1st Buffalo Day for 5G and wireless
          Internet of Things conference.
        </li>
        <li>
          <TextMarker>
            Stacks: Javascript, Html, CSS, Java, XML, Restful API, Senet,
            Postman, Thingspeak,NodeJs, Firebase, Restful API, DialogFlow, JSON,
            Node.js.
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
          with the databases.{" "}
          <TextMarker>(Node.js, Express, MongoDB, JSON, Sentry)</TextMarker>{" "}
        </li>
        <li>
          Deploying the full-stack application.{" "}
          <TextMarker>(Mlab, MongleDB, Heroku)</TextMarker>
        </li>
      </Card>

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

export default JavascriptProject;
