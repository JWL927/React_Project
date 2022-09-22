import Button from "./js/Button";
import styles from "./css/App.module.css";
import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm here");
    return () => console.log("I'm gone");
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
