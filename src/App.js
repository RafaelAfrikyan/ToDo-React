import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [result, setResult] = useState([]);
  const [deleted, setDeleted] = useState([]);

  useEffect(() => {
    setResult([...value]);
  }, [value]);

  const CtrlZ = () => {
    setDeleted([...deleted, result.pop()]);
    setResult([...result]);
  };
  const CtrlShiftZ = () => {
    setResult([...result, deleted.pop()]);
  };

  console.log(deleted);
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <h2>Value - {result}</h2>

      <button onClick={CtrlZ}>Ctrl+Z</button>
      <button onClick={CtrlShiftZ}>Ctrl + Shift + Z</button>
    </div>
  );
}

export default App;
