import { useEffect, useState } from "react";
import axios from "axios";
import { LineGraph } from "./LineGraph";
import { ResponsiveContainer } from "recharts";
import "./graph.css";

export const Graph = ({ id }) => {
  const [graphData, setGraphData] = useState(null);

  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=120`;
  let objArr = [];

  const getMarketData = async () => {
    const res = await axios.get(url);
    const priceArr = await res.data.prices;

    if (!res) {
      console.log("error");
    } else {
      priceArr.forEach((day, index) => {
        objArr.push({
          pv: Math.round(day[1]),
        });
      });

      setGraphData(objArr);
    }
  };

  useEffect(() => {
    getMarketData();
  }, []);

  return (
    <div className="graph-container">
      <LineGraph data={graphData} />
    </div>
  );
};
