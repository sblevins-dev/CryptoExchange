import { useContext, useEffect } from "react";
import CoinContext from "../../context/CoinContext";
import "./news.css";

export const News = () => {
  const { loginOpen, setLoginOpen, registerOpen, setRegisterOpen } =
    useContext(CoinContext);

  useEffect(() => {
    setLoginOpen(false);
    setRegisterOpen(false);
  }, []);
  
  return (
    <div className="news-header">
      <h1>News</h1>
    </div>
  );
};
