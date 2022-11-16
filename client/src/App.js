import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CoinContext from "./context/CoinContext";
import Coins from "./api/CoinGeckoApi.js";
import { Nav } from "./components/nav/Nav";
import { Main } from "./components/main/Main";
import { useEffect, useState } from "react";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [coins, setCoins] = useState([])
  const [user, setUser] = useState(null)
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

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

    const currUser = JSON.parse(localStorage.getItem("user")) ?? null

    setUser(currUser)
  }, [])

  return (
    <div className="app">
      <CoinContext.Provider value={{ menuOpen, setMenuOpen, coins, user, setUser, loginOpen, setLoginOpen, registerOpen, setRegisterOpen}}>
        <BrowserRouter>
          <Login />
          <Register />
          <Nav />
          <Main />
        </BrowserRouter>
      </CoinContext.Provider>
    </div>
  );
}

export default App;
