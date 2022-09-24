import Button from "./js/Button";
import styles from "./css/App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    } else {
      
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="What is your goal?" type="text" />
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
