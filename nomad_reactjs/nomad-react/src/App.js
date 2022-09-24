import Button from "./js/Button";
import styles from "./css/App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? "Loading..." : null}
      <ul>
        {coins.map((coin) => {
          return <li>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</li>
        })}
      </ul>
    </div>
  );
}

export default App;
