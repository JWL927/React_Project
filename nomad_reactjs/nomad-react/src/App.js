import Button from "./js/Button";
import styles from "./css/App.module.css";
import {useState, useEffect} from "react";
import Movie from "./js/Movie";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movie/:id" element={<Detail />}/>
    </Routes>
  </Router>;
}

export default App;
