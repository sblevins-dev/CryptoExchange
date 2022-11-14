import React, { useEffect } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import "./graph.css";

export const LineGraph = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart data={data} height={200} width={500}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};
