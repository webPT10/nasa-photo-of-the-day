import React from "react";
// App will pull in PhotoList via IMPORT
import PhotoList from "./Components/PhotoList";

import "./App.css";


function App() {
  return (
    <div className="App">
      <span>🚀</span>
      <h1>APOD!</h1>
      <PhotoList />
    </div>
  );
}

export default App;
