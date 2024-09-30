import React, { useState } from "react";
import "./BudgetSim.css"; // Make sure to customize your CSS here

const sitStat = [
  "You've started a new job and want to start saving for future goals. You decide to set up a savings plan. Save Rs.2500/month",
  "You have received a bonus paycheck of Rs. 10,000. You are trying to decide what to do with the money to ensure financial stability and future growth.",
  "You bought 100 shares of Company Y at Rs. 50 per share, spending ₹5000. The stock price dropped to ₹48, then to ₹45, but eventually rose to ₹51. What would you do?",
  "You're considering trading stocks to increase your income. Settling Income: Rs. 90,000, Cashflow: Rs.3000/month. What will you do?",
  "You're a small business owner facing a financial crisis due to the COVID-19 pandemic. You are expected to pay Rs. 50,000. What'd you do?",
  "You're a homeowner facing financial difficulties and are considering options regarding your mortgage. Selling your car worth Rs.2,50,000 at the rate of Rs. 1,50,000. What would you do?",
  "Upon waking up, you discover the fridge has ceased functioning, leaving your food at risk of spoiling. The repair cost would be around Rs. 5000. What will you do?",
];

const sitOpt = [
  "Save", // For saving plan
  "Invest", // For bonus paycheck
  "Hold", // For stock price fluctuations
  "Trade", // For trading stocks
  "Pay", // For small business during COVID
  "Sell", // For selling the car or refinancing the mortgage
  "Repair", // For fridge repair
];

const BudgetSim = ({ onQuit }) => {
  const [i, setI] = useState(0);
  const [income, setIncome] = useState(30000);
  const [expenses] = useState(21000);
  const [payday, setPayday] = useState(income - expenses);
  const [assets, setAssets] = useState(15000);
  const [liabilities, setLiabilities] = useState(360000);
  const [modalVisible, setModalVisible] = useState(false);
  const [borrowedAmount, setBorrowedAmount] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const updateCost = (check) => {
    if (check === "Save") {
      setIncome((prev) => prev + 2500); // Increment savings
    } else if (check === "Invest") {
      setIncome((prev) => prev + 10000); // Add bonus paycheck
    } else if (check === "Hold") {
      setAssets((prev) => prev + 5000); // Stock value increased
    } else if (check === "Trade") {
      setIncome((prev) => prev + 3000); // Monthly trading income
    } else if (check === "Pay") {
      setLiabilities((prev) => prev - 50000); // Pay liabilities for small business
    } else if (check === "Sell") {
      setAssets((prev) => prev + 150000); // Sell car, increase assets
    } else if (check === "Repair") {
      setIncome((prev) => prev - 5000); // Deduct Rs. 5000 for repair
    } else if (check === "Borrow") {
      const newIncome = borrowMoneyFunc();
      setIncome(newIncome);
    }
    setPayday(income - expenses); // Recalculate payday after income changes
    callNext();
  };

  const borrowMoneyFunc = () => {
    if (!borrowedAmount) {
      alert("Please enter an amount to borrow");
      return income;
    }
    const temp = Number(income) + Number(borrowedAmount);
    setModalVisible(false);
    return temp;
  };

  const callNext = () => {
    setI((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= sitStat.length) {
        setGameOver(true);
      }
      return newIndex;
    });
  };

  return (
    <div className="budget-sim-container">
      <div className="content-wrapper">
        {/* Left Panel - Income, Assets, and Liabilities */}
        <div className="left-card">
          <div className="income">
            <h3>Income</h3>
            <p>Income: Rs. {income}</p>
            <p>Expenses: Rs. {expenses}</p>
            <p>PayDay: Rs. {payday}</p>
          </div>

          <div className="assets">
            <h3>Assets</h3>
            <p>Property: Rs. 0</p>
            <p>Vehicles: Rs. 0</p>
            <p>Other: Rs. {assets}</p>
          </div>

          <div className="liabilities">
            <h3>Liabilities</h3>
            <p>Mortgage: Rs. 0</p>
            <p>Loans: Rs. 300000</p>
            <p>Other: Rs. {liabilities}</p>
          </div>
        </div>

        {/* Center Panel - Situation Description */}
        <div className="center-situation">
          <div className="situation">
            <h2>Income Statement</h2>
            <p>{sitStat[i]}</p>
          </div>
        </div>

        {/* Right Panel - Buttons */}
        <div className="right-panel">
          <div className="options">
            <button onClick={() => updateCost(sitOpt[i])}>{sitOpt[i]}</button>
            <button onClick={() => callNext()}>Pass</button>
            <button onClick={() => setModalVisible(true)}>Borrow</button>
            {/* Quit Button */}
            <button onClick={onQuit}>Quit</button>
          </div>
        </div>
      </div>

      {/* Modal for Borrowing Money */}
      {modalVisible && (
        <div className="modal">
          <div className="modal_content">
            <h2>Borrow Money</h2>
            <input
              type="number"
              placeholder="Amount to borrow"
              value={borrowedAmount}
              onChange={(e) => setBorrowedAmount(e.target.value)}
            />
            <button onClick={borrowMoneyFunc}>Confirm</button>
            <button onClick={() => setModalVisible(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Game Over Message */}
      {gameOver && (
        <div className="game_over">
          <div className="game_over_content">
            <h2>Game Over!</h2>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetSim;
