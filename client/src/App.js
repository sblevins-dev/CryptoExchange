import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CoinContext from "./context/CoinContext";
import Coins from "./api/CoinGeckoApi.js";
import { Nav } from "./components/nav/Nav";
import { Main } from "./components/main/Main";
import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([])

  const get = async () => {
    const coinData = await Coins.getCoins()

    if (!coinData) {
      console.log('error')
    } else {
      setCoins(coinData)
    }
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <div className="app">
      <CoinContext.Provider value={{coins}}>
        <BrowserRouter>
          <Nav />
          <Main />
        </BrowserRouter>
      </CoinContext.Provider>
    </div>
  );
}

export default App;
