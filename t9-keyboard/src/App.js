import React from "react";
import Keyboard from "./Component/Keyboard";

function App() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="App"
        style={{
          border: "2px solid black",
          width: "20rem",
          height: "25rem",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
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
