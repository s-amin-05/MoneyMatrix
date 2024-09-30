import React, { useState, useEffect } from "react";
import axios from "axios";

const StockTracker = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your actual Finnhub API key
  const API_KEY = "crt8d6pr01qpjadus120crt8d6pr01qpjadus12g";
  const symbol = "TSLA"; // You can change this to any stock symbol you want

  useEffect(() => {
    const fetchStockProfile = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`
        );
        setStockData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStockProfile();
  }, [symbol, API_KEY]);

  if (loading) return <p>Loading stock profile...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div className="stock-profile">
      <h1>Stock Profile for {stockData.name}</h1>
      <p>
        <strong>Symbol:</strong> {stockData.ticker}
      </p>
      <p>
        <strong>Country:</strong> {stockData.country}
      </p>
      <p>
        <strong>Exchange:</strong> {stockData.exchange}
      </p>
      <p>
        <strong>Industry:</strong> {stockData.finnhubIndustry}
      </p>
      <p>
        <strong>Market Capitalization:</strong> $
        {stockData.marketCapitalization}
      </p>
      <p>
        <strong>Share Outstanding:</strong> {stockData.shareOutstanding}
      </p>
      {/* <img src={stockData.logo} alt={${stockData.name} Logo} width="100" /> */}
    </div>
  );
};

export default StockTracker;
