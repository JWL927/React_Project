import Button from "./js/Button";
import styles from "./css/App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome!</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
