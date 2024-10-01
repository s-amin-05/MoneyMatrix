import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./StockGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockGraph = ({ symbol, interval }) => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "5cd1044c5f8543c88428a543f2583416"; // Replace with your Twelve Data API key

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${apiKey}`
        );
        const data = response.data;

        if (data && data.values) {
          const chartData = {
            labels: data.values.map((value) => value.datetime).reverse(),
            datasets: [
              {
                label: `${symbol} Stock Prices`,
                data: data.values
                  .map((value) => parseFloat(value.close))
                  .reverse(),
                borderColor: "#057dcd",
                borderWidth: 3,
                pointRadius: 4,
                fill: false,
              },
            ],
          };

          setStockData(chartData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol, interval]);

  if (loading) return <div>Loading...</div>;
  if (!stockData) return <div>No data available</div>;

  return (
    <div className="graph-container">
      <h2 className="graph-title">
        {symbol} Stock Chart ({interval})
      </h2>
      <Line
        data={stockData}
        options={{ responsive: true, maintainAspectRatio: true }}
      />
    </div>
  );
};

export default StockGraph;
