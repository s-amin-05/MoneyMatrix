import React, { useState } from "react";
import "./EMICalculator.css";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / (12 * 100);
    const totalPayments = parseFloat(loanTenure) * 12;

    // EMI calculation formula
    const emi =
      (principal *
        calculatedInterest *
        Math.pow(1 + calculatedInterest, totalPayments)) /
      (Math.pow(1 + calculatedInterest, totalPayments) - 1);

    setEmi(emi.toFixed(2));
  };

  return (
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <form onSubmit={calculateEMI}>
        <div className="form-group">
          <label>Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Interest Rate (per annum):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Loan Tenure (in years):</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate EMI</button>
      </form>
      {emi && (
        <div className="emi-result">
          <h3>Your Monthly EMI is: ₹{emi}</h3>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
