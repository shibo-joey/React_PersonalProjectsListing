import React, { useState } from "react";
import "./Card.css";
import Toggles from "./toggles/Toggle";

const Card = (props) => {
  const [cheeseIsReady, setToggled] = useState(false);

  const changeTheState = () => {
    setToggled(!cheeseIsReady);
  };

  return (
    <React.Fragment>
      <div className="Containner">
        <h1 onClick={changeTheState} style={{ cursor: "pointer" }}>
          {props.title}
        </h1>
        {/* <Toggles defaultChecked={false} onChange={changeTheState} /> */}
        {cheeseIsReady && <div className="Details">{props.children}</div>}
      </div>
    </React.Fragment>
  );
};

export default Card;
