import DisplayInput from "./Component/DisplayInput";
import Keyboard from "./Component/Keyboard";


function App() {
  return (
    <div className="App" style={{border: "2px solid black", width: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", padding: "10px"}}>
      <Keyboard />
    </div>
  );
}

export default App;
