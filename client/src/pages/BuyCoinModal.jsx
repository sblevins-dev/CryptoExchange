import CoinContext from "../context/CoinContext";
import { useState, useEffect, useContext } from "react";
import { buyCoin } from "../api/CoinApi";
import "./coinModal.css";

export const BuyCoinModal = ({ coin, setModalOpen }) => {
  const { user, setUser } = useContext(CoinContext);

  const [formData, setFormData] = useState({
    userID: user.id,
    buyingPower: user.buyingPower,
    coinID: coin.id,
    currentPrice: coin.current_price,
    amount: 0,
    total: 0.0,
  });

  const setForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const purchase = async (e) => {
    e.preventDefault();

    const transaction = await buyCoin(formData);
    await setUser(transaction[1])

    setModalOpen(false)
  };

  useEffect(() => {
    if (formData.total !== 0 || formData.total !== 0.0) {
      let fraction = (formData.total / coin.current_price).toFixed(8)
      setFormData({
        ...formData,
        amount: fraction
      })
    }
  }, [formData.total, coin.current_price]);

  return (
    <div className="modal-wrapper">
      <div className="form-wrapper">
        <div className="close-btn" onClick={() => setModalOpen(false)}>
          X
        </div>
        <span className="form-header">Buy {coin.symbol.toUpperCase()}</span>
        <form className="form">
          <div className="form-group">
            <label>Amount</label>
            <span>
              $
              <input
                type="number"
                step="0.05"
                min="0.00"
                max={user.buyingPower}
                style={{ marginLeft: "10px" }}
                name="total"
                value={formData.total}
                onChange={(e) => setForm(e)}
              ></input>
            </span>
          </div>
          <div className="form-group underline">
            <label style={{ color: "#87FE07" }}>Est.Price</label>
            <span>{coin.current_price.toLocaleString()}</span>
          </div>
          <div className="form-group">
            <label>Est. {coin.symbol.toUpperCase()}</label>
            <input
              value={formData.amount}
              readOnly={true}
              type="number"
            />
          </div>
          <button type="submit" onClick={(e) => purchase(e)}>
            Purchase
          </button>
          <div className="underline"></div>
          <span>
            ${user.buyingPower ? user.buyingPower.toLocaleString() : 0.0}{" "}
            available
          </span>
        </form>
      </div>
    </div>
  );
};
