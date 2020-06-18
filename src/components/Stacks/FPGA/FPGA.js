import React from "react";
import "./FPGA.css";
import Card from "../../Card";
import { AwesomeButton } from "react-awesome-button";
const FPGA = (props) => {
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
          src="https://farm6.staticflickr.com/5691/30758650575_6524b6ce0b_b.jpg"
          alt="fpga"
        />
      </div>
      <div className="textContainer">
        <p>Click the project names to fold/unfold the details</p>
      </div>

      <Card title="Digital Communication Systems Design and Implementation">
        <li>
          Implementing two analog message signals, or two digital bit streams,
          by changing the amplitudes of two carrier waves, using the
          amplitude-shift keying digital modulation scheme to display 16-QAM
          waveform and its constellation on display base on FPGA board.
        </li>
      </Card>
    </React.Fragment>
  );
};

export default FPGA;
