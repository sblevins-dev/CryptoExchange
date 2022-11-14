import "./coin.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Graph } from "../components/graph/Graph";

export const Coin = () => {
  const { state } = useLocation();
  const [coin, setCoin] = useState(state.coin);

  return (
    <div className="coin-wrapper">
      <div className="coin-header">
        <img src={coin.image} alt={coin.name} />
        <h1>{coin.name}</h1>
      </div>
      <div className="coin-info">
        <div className="coin-price">
          <h1>${coin.current_price && coin.current_price.toLocaleString()}</h1>
          <span
            style={{
              color: coin.price_change_percentage_24h < 0 ? "red" : "#87FE07",
            }}
          >
            {coin.price_change_percentage_24h}
          </span>
        </div>
        <div className="coin-price-info">
          <div className="market-cap">
            <label>Market Cap</label>
            <span>${coin.market_cap && coin.market_cap.toLocaleString()}</span>
          </div>
          <div className="trading-volume">
            <label>Total Volume</label>
            <span>
              ${coin.total_volume && coin.total_volume.toLocaleString()}
            </span>
          </div>
          <div className="diluted-valuation">
            <label>Fully Diluted Valuation</label>
            <span>
              $
              {coin.fully_diluted_valuation &&
                coin.fully_diluted_valuation.toLocaleString()}
            </span>
          </div>
          <div className="circulating-supply">
            <label>Circulating Supply</label>
            <span>
              {coin.circulating_supply &&
                coin.circulating_supply.toLocaleString()}
            </span>
          </div>
          <div className="total-supply">
            <label>Total Supply</label>
            <span>
              {coin.total_supply && coin.total_supply.toLocaleString()}
            </span>
          </div>
          <div className="max-supply">
            <label>Max Supply</label>
            <span>{coin.max_supply && coin.max_supply.toLocaleString()}</span>
          </div>
        </div>
        <Graph id={coin.id}/>
      </div>
    </div>
  );
};
