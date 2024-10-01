import React, { useState } from "react";
import "./StockInputForm.css"; // Import the updated CSS file
import { Link } from "react-router-dom";

const StockInputForm = ({ onCompare }) => {
  const [symbol1, setSymbol1] = useState("");
  const [symbol2, setSymbol2] = useState("");
  const [interval, setInterval] = useState("1day");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCompare(symbol1, symbol2, interval);
  };

  return (
    <div className="input-container ">
      <h2>Stock Market Comparison</h2>
      <p>Enter the stock symbols to compare</p>
      <form onSubmit={handleSubmit} className="h-full">
        <input
          type="text"
          className="input-field"
          placeholder="Stock Symbol 1 (e.g. AAPL)"
          value={symbol1}
          onChange={(e) => setSymbol1(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input-field"
          placeholder="Stock Symbol 2 (e.g. MSFT)"
          value={symbol2}
          onChange={(e) => setSymbol2(e.target.value)}
        />
        <br />
        <select
          className="input-field"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
        >
          <option value="1day">1 Day</option>
          <option value="1week">1 Week</option>
          <option value="1month">1 Month</option>
        </select>
        <br />
        <button type="submit" className="compare-btn">
          Compare
        </button>

        <Link to={'../Learn'}>
        <button type="submit" className="compare-btn">
          Back
        </button>
        </Link>
      </form>
    </div>
  );
};

export default StockInputForm;
