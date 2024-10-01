import React, { useState } from "react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null); // New state for total interest

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

    // Total amount paid over the loan tenure
    const totalAmountPaid = emi * totalPayments;
    // Total interest paid
    const interest = totalAmountPaid - principal;

    setEmi(emi.toFixed(2));
    setTotalInterest(interest.toFixed(2)); // Store total interest
  };

  return (
    <div className="emi-calculator my-20 max-w-xl mx-auto bg-[#96cff1] p-5 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-left">EMI Calculator</h2>
      <form onSubmit={calculateEMI}>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Interest Rate (per annum):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Loan Tenure (in years):</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <button type="submit" className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-5 bg-[#1e3d58] text-white rounded-lg hover:bg-[#0f2c3e] focus:outline-none">
          Calculate EMI
        </button>
      </form>
      {emi && (
        <div className="emi-result mt-6 bg-white p-4 rounded shadow">
          <h2 className="block text-gray-700 mb-2 font-bold">Results:</h2>
          <h3 className="block text-[#1e3d58]-700 mb-2 font-semibold">Your Monthly EMI is: ₹{emi}</h3>
          <h3 className="block text-[#1e3d58]-700 mb-2 font-semibold">Total Interest Payable: ₹{totalInterest}</h3> {/* Total interest displayed here */}
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
