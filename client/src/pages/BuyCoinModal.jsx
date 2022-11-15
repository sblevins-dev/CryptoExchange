import { useEffect } from "react";
import { useState } from "react";
import "./coinModal.css";

export const BuyCoinModal = ({ coin, setModalOpen }) => {
  const [formData, setFormData] = useState({
    coinID: coin.id,
    amount: 0,
    total: 0.0,
  });
  const [coinAmount, setCoinAmount] = useState(0.0);

  const setForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (formData.total !== 0 || formData.total !== 0.0) {
      setCoinAmount((formData.total / coin.current_price).toFixed(8));
    }
  }, [formData.total, coin.current_price]);

  return (
    <div className="modal-wrapper">
      <div className="form-wrapper">
        <div className="close-btn" onClick={() => setModalOpen(false)}>X</div>
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
                style={{ marginLeft: "10px" }}
                name="total"
                value={formData.total}
                onChange={(e) => setForm(e)}
              ></input>
            </span>
          </div>
          <div className="form-group underline">
            <label style={{color: "#87FE07"}}>Est.Price</label>
            <span>{coin.current_price.toLocaleString()}</span>
          </div>
          <div className="form-group">
            <label>Est. {coin.symbol.toUpperCase()}</label>
            <span>{coinAmount}</span>
          </div>
          <button type="submit">Purchase</button>
          <div className="underline"></div>
          <span>$0.00 available</span>
        </form>
      </div>
    </div>
  );
};
