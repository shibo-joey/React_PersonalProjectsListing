import React from "react";
import "./TextMarker.css";

const TextMarker = (props) => {
  return <b style={{ color: " #fd7e14" }}>{props.children}</b>;
};

export default TextMarker;
