import "./main.css";
import { Routes, Route } from "react-router-dom";
import { Market } from "../market/Market";
import { Dashboard } from "../dashboard/Dashboard"
import { Transactions } from "../transactions/Transactions"
import { Portfolio } from "../portfolio/Portfolio"
import { News } from "../news/News"
import { Coin } from "../../pages/Coin";
import { useContext } from "react";
import CoinContext from "../../context/CoinContext";

export const Main = () => {
  const { menuOpen } = useContext(CoinContext)

  return (
    <div className="main-wrapper" style={{ maxWidth: "calc(100vw - 80px)"}}>
      <Routes>
        <Route path="/">
          <Route index element={<Market />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="news" element={<News />} />
          <Route path="coin" element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
};
