import React from "react";
import "./ReactProjects.css";

const ReactProjects = () => {
  return (
    <React.Fragment>
      <div className="ImageContainer">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          alt="React"
        />
      </div>

      <div className="Projects_Content">
        <h3> Gourmet and Place Sharing Social App - MERN</h3>
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
          Stacks: Javascript, React.js, Express.js, Node.js, Mongoose, postman,
          Mongo Atlas,
        </li>
        <p></p>
      </div>
    </React.Fragment>
  );
};

export default ReactProjects;
