import React, { useState, useEffect } from "react";
import "./game3connectinglink.css"; // Import your income bracket page styles

const IncomeBracketPage = ({ onBack, onStartGame }) => {
  const [incomeBracket, setIncomeBracket] = useState(null);

  // Define the income brackets
  const incomeBrackets = {
    low: {
      label: "LOW Income Bracket",
      income: 30000,
      expenses: 8000,
      payday: 22000,
      assets: {
        property: 60000,
        vehicles: 60000,
        other: 60000,
      },
      liabilities: {
        mortgage: 60000,
        loans: 600000,
        other: 15000,
      },
    },
    mid: {
      label: "MID Income Bracket",
      income: 60000,
      expenses: 20000,
      payday: 40000,
      assets: {
        property: 120000,
        vehicles: 100000,
        other: 90000,
      },
      liabilities: {
        mortgage: 100000,
        loans: 300000,
        other: 20000,
      },
    },
    high: {
      label: "HIGH Income Bracket",
      income: 150000,
      expenses: 50000,
      payday: 100000,
      assets: {
        property: 250000,
        vehicles: 150000,
        other: 200000,
      },
      liabilities: {
        mortgage: 200000,
        loans: 100000,
        other: 50000,
      },
    },
  };

  // Randomly select an income bracket when the page loads
  useEffect(() => {
    const bracketKeys = Object.keys(incomeBrackets); // ['low', 'mid', 'high']
    const randomBracket =
      bracketKeys[Math.floor(Math.random() * bracketKeys.length)];
    setIncomeBracket(incomeBrackets[randomBracket]);
  }, []);

  if (!incomeBracket) {
    return <div>Loading...</div>; // Show a loading state if the income bracket is not yet set
  }

  return (
    <div className="wrapperconn">
      <div className="containerconn">
        <h3>
          <b>{incomeBracket.label}</b>
        </h3>
        <p className="para" style={{ marginBottom: "5px" }}>
          You have the following financial components with you:
          <br />
          <div className="financial-card">
            <b>Income:</b> Rs. {incomeBracket.income}
            <br />
            <b>Expenses:</b> Rs. {incomeBracket.expenses}
            <br />
            <b>PayDay:</b> Rs. {incomeBracket.payday}
          </div>
          <br />
          <div className="display_ass_liabs">
            <div className="disp_ass">
              <b>Assets</b>
              <br />
              Property: Rs. {incomeBracket.assets.property}
              <br />
              Vehicles: Rs. {incomeBracket.assets.vehicles}
              <br />
              Other: Rs. {incomeBracket.assets.other}
            </div>
            <div className="disp_liabs">
              <b>Liabilities</b>
              <br />
              Mortgage: Rs. {incomeBracket.liabilities.mortgage}
              <br />
              Loans: Rs. {incomeBracket.liabilities.loans}
              <br />
              Other: Rs. {incomeBracket.liabilities.other}
            </div>
          </div>
        </p>
        <div className="buttons">
          <input
            type="button"
            id="back_btn"
            value="Back"
            onClick={onBack} // Go back to the StartPage when clicked
          />
          <input
            type="button"
            id="start_btn"
            value="Start"
            onClick={onStartGame} // Move to the BudgetSim game when clicked
          />
        </div>
      </div>
    </div>
  );
};

export default IncomeBracketPage;
