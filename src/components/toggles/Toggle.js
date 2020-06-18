import React from "react";
import "./Toggle.css";
import Toggle from "react-toggle";

const Toggles = (props) => {
  return (
    <Toggle defaultChecked={props.defaultChecked} onChange={props.onChange} />
  );
};

export default Toggles;
