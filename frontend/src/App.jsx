import { useState, useEffect } from "react";
import { connect, sendMsg } from "./api";
import "./App.css";

function App() {
  const [msg, setMsg] = useState(0);
  useEffect(() => {
    connect(setMsg);
  }, []);

  const send = () => {
    console.log("hello");
    sendMsg("hello");
  };

  return (
    <>
      <div>
        <button onClick={send}>Hit</button>
        <p> Last message : {msg}</p>
      </div>
    </>
  );
}

export default App;
