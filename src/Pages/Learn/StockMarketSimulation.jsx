import React, { useState } from "react";
import StockInputForm from "./StockInputForm";
import StockGraph from "./StockGraph";
import "./StockMarketSimulation.css";

const StockMarketSimulation = () => {
  const [symbols, setSymbols] = useState(null);
  const [interval, setInterval] = useState("1day");

  const handleCompare = (symbol1, symbol2, interval) => {
    setSymbols({ symbol1, symbol2 });
    setInterval(interval);
  };

  const handleReset = () => {
    setSymbols(null); // Reset to go back to the form
  };

  return (
    <div className="simulation-container">
      {symbols ? (
        <div className="graph-wrapper">
          <StockGraph symbol={symbols.symbol1} interval={interval} />
          <StockGraph symbol={symbols.symbol2} interval={interval} />
          <button className="compare-button" onClick={handleReset}>
            Compare New Stocks
          </button>
        </div>
      ) : (
        <StockInputForm onCompare={handleCompare} />
      )}
    </div>
  );
};

export default StockMarketSimulation;
