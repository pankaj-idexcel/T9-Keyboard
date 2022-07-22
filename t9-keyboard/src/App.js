import React from "react";
import Keyboard from "./Component/Keyboard";

function App() {
  return (
    <section style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
    <div
      className="App"
      style={{
        border: "2px solid black",
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Keyboard />
    </div>
    </section>
  );
}

export default App;
