import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="ItemContainer" onClick={props.clicked}>
      <div className="Justify-Content">
        <img src={props.imagePath} alt="Icon" />
        <span>
          <b> &nbsp; {props.children}</b>
        </span>
      </div>
    </div>
  );
};

export default ListItem;
