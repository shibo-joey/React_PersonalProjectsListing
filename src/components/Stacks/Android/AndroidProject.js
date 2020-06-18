import React from "react";
import "./AndroidProject.css";
import Card from "../../Card";
import TextMarker from "./../../Text_Marker/TextMarker";
import { AwesomeButton } from "react-awesome-button";
const AndroidProject = (props) => {
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
          src="https://www.freepngimg.com/thumb/android/30965-6-android-file.png"
          alt="Angular"
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

      <Card title="Android development based on Android Studio">
        <li>
          Personal designed an application about sensor data display and the
          data algorithm. Sensors include{" "}
          <TextMarker>
            acceleration, light, gyroscope, magnetic, gravity, pressure and
            proximity
          </TextMarker>
          .
        </li>
        <li>
          Including the data display of 7 sensors and interaction between data
          and interface. Data also be used for the pedometer algorithm and life
          condition detector algorithm.{" "}
          <a href="https://github.com/shibo-joey/">
            https://github.com/shibo-joey
          </a>
        </li>
      </Card>
    </React.Fragment>
  );
};

export default AndroidProject;
