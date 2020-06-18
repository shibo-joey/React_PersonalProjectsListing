import React, { useState } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import Projects from "./components/Projects";
import project2 from "./Img/projectListimg.PNG";
import project1 from "./Img/porfolioimg.PNG";
import project3 from "./Img/lockimg.PNG";
import project4 from "./Img/por2img.PNG";
import project5 from "./Img/mernimg.PNG";
import project6 from "./Img/burgerimg.PNG";
import project7 from "./Img/vidlyimg.PNG";
import project8 from "./Img/todoimg.PNG";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import Flicking from "@egjs/react-flicking";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [stackStatus, setStackStatus] = useState("");
  const onItemClicked = (status) => {
    setStackStatus(status);
    console.log(stackStatus);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Projects Listing</h1>
        <SideBar />

        <ListComponent onItemClicked={onItemClicked} />
        <Projects status={stackStatus} setStatus={setStackStatus} />

        {stackStatus === "" && (
          <>
            <Flicking
              tag="div"
              viewportTag="div"
              cameraTag="div"
              classPrefix="eg-flick"
              deceleration={0.0075}
              horizontal={true}
              circular={true}
              infinite={false}
              infiniteThreshold={0}
              lastIndex={Infinity}
              threshold={40}
              duration={100}
              panelEffect={(x) => 1 - Math.pow(1 - x, 3)}
              defaultIndex={0}
              inputType={["touch", "mouse"]}
              thresholdAngle={45}
              bounce={10}
              autoResize={true}
              adaptive={true}
              zIndex={2000}
              bound={true}
              overflow={false}
              hanger={"50%"}
              anchor={"50%"}
              gap={0}
              moveType={{ type: "snap", count: 1 }}
              collectStatistics={true}
              className="flicking"
              gap={10}
            >
              <div className="showImage">
                <img src={project1} alt="project1"></img>
              </div>
              <div className="showImage">
                <img src={project2} alt="project1"></img>
              </div>
              <div className="showImage">
                <img src={project3} alt="project1"></img>
              </div>
              <div className="showImage">
                <img src={project4} alt="project1"></img>
              </div>
              <div className="showImage">
                <img src={project5} alt="project1"></img>
              </div>
              <div className="showImage">
                <img src={project6} alt="project1"></img>
              </div>
              <div className="showImage">
                <img src={project7} alt="project1"></img>
              </div>
              <div className="showImage">
                <img src={project8} alt="project8"></img>
              </div>
            </Flicking>
            <p style={{ color: "white", fontSize: "15px" }}>
              &larr; try to slide &rarr;
            </p>
            <AwesomeButton
              size="medium"
              type="primary"
              href="https://shibo-joey.github.io/"
            >
              My Story
            </AwesomeButton>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
