import "./market.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import CoinContext from "../../context/CoinContext";

export const Market = () => {
  const { coins } = useContext(CoinContext);
  const [filteredList, setFilteredList] = useState(coins);

  const search = (e) => {
    setFilteredList(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {}, [filteredList]);

  return (
    <div className="market-wrapper">
      <div className="market-header">
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
          <li>Dynamics</li>
        </ul>
        <ul className="coin-list">
          {filteredList.map((coin) => (
            <li key={coin.id} className="coin">
              <div className="coin-name">
                <img src={coin.image} alt={coin.name} />
                <div>{coin.name}</div>
              </div>
              <div>${coin.current_price.toFixed(2)}</div>
              <div
                style={{
                  color: coin.price_change_percentage_24h < 0 ? "red" : "#87FE07",
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div>div</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
