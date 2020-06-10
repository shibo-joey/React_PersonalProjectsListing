import React from "react";
import "./ReactProjects.css";
import Card from "../../Card";

const ReactProjects = () => {
  return (
    <React.Fragment>
      <div className="ImageContainer">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          alt="React"
        />
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
          <mark>
            Stacks: Javascript, React.js, Express.js, Node.js, Mongoose,
            postman, Mongo Atlas
          </mark>
        </li>
      </Card>
      <Card title="Movie Ranking Application - MERN">
        <li>
          Developing new user-facing features, building reusable components
          about pagination, filtering, routing and sorting for future use.
          <mark>(Javascript, React.js, Bootstrap 4, CSS)</mark>
        </li>
        <li>
          Developing micro backend services for authentication and authorization
          with the databases.{" "}
          <mark>(Node.js, Express, MongoDB, JSON, Sentry)</mark>{" "}
        </li>
        <li>
          Deploying the full-stack application.{" "}
          <mark>(Mlab, MongleDB, Heroku)</mark>
        </li>
      </Card>
    </React.Fragment>
  );
};

export default ReactProjects;
