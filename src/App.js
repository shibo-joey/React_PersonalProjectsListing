import React, { useState } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import Projects from "./components/Projects";

function App() {
  const [stackStatus, setStackStatus] = useState("");
  const onItemClicked = (status) => {
    setStackStatus(status);
    console.log(stackStatus);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Listing</h1>
        <ListComponent onItemClicked={onItemClicked} />
        <Projects status={stackStatus} />
      </header>
    </div>
  );
}

export default App;
