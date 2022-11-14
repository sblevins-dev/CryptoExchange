import "./market.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import CoinContext from "../../context/CoinContext";

export const Market = () => {
  const { coins, setLoginOpen, setRegisterOpen, menuOpen } = useContext(CoinContext);
  const [filteredList, setFilteredList] = useState(coins);
  const navigate = useNavigate();

  const search = (e) => {
    setFilteredList(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setLoginOpen(false)
    setRegisterOpen(false)
    setFilteredList(coins)
  }, [coins]);

  return (
    <div className="market-wrapper">
      <div className="market-header" style={{width: menuOpen ? "calc(100vw - 220px)" : "calc(100vw - 80px)"}}>
        <h1>Market</h1>
        <div className="market-search">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          <input placeholder="Search Coins..." onChange={(e) => search(e)} />
        </div>
      </div>
      <div className="market-body">
        <ul className="market-body-header">
          <li>Coin</li>
          <li>Price</li>
          <li>% Change</li>
        </ul>
        <ul className="coin-list">
          {filteredList.length > 0 && filteredList.map((coin) => (
            <li key={coin.id} className="coin">
              <div
                className="coin-name"
                onClick={() => navigate("./coin", { state: { coin } })}
              >
                <img src={coin.image} alt={coin.name} />
                <div>{coin.name}</div>
              </div>
              <div>
                ${coin.current_price && coin.current_price.toLocaleString()}
              </div>
              <div
                style={{
                  color:
                    coin.price_change_percentage_24h < 0 ? "red" : "#87FE07",
                }}
              >
                {coin.price_change_percentage_24h &&
                  coin.price_change_percentage_24h.toLocaleString()}
                %
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
