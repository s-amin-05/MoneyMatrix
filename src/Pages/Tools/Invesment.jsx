import React, { useState } from "react";

const InvestmentCalculator = () => {
  const [salary, setSalary] = useState("");
  const [savingsRate, setSavingsRate] = useState("");
  const [investmentRate, setInvestmentRate] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [investmentYears, setInvestmentYears] = useState("");
  const [results, setResults] = useState(null);

  const calculateInvestment = (e) => {
    e.preventDefault();

    const monthlySalary = parseFloat(salary);
    const savingsPercentage = parseFloat(savingsRate) / 100;
    const investmentPercentage = parseFloat(investmentRate) / 100;
    const annualReturnRate = parseFloat(annualReturn) / 100;
    const years = parseFloat(investmentYears);

    // Calculate suggested savings and investment
    const suggestedSavings = monthlySalary * savingsPercentage;
    const suggestedInvestment = monthlySalary * investmentPercentage;

    // Calculate future value of the investment using compound interest formula
    const futureValue =
      suggestedInvestment *
      ((Math.pow(1 + annualReturnRate, years) - 1) / annualReturnRate);

    setResults({
      suggestedSavings: suggestedSavings.toFixed(2),
      suggestedInvestment: suggestedInvestment.toFixed(2),
      futureValue: futureValue.toFixed(2),
    });
  };

  return (
    <div className="investment-calculator mt-20 max-w-xl mx-auto bg-[#96cff1] p-5 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-left">Investment Calculator</h2>
      <form onSubmit={calculateInvestment}>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Monthly Salary (₹):</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Savings Rate (%):</label>
          <input
            type="number"
            value={savingsRate}
            onChange={(e) => setSavingsRate(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Investment Rate (%):</label>
          <input
            type="number"
            value={investmentRate}
            onChange={(e) => setInvestmentRate(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Expected Annual Return Rate (%):</label>
          <input
            type="number"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 mb-2 font-bold">Investment Duration (Years):</label>
          <input
            type="number"
            value={investmentYears}
            onChange={(e) => setInvestmentYears(e.target.value)}
            required
            className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
          />
        </div>
        <button
          type="submit"
          className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-5 bg-[#1e3d58] text-white rounded-lg hover:bg-[#0f2c3e] focus:outline-none"
        >
          Calculate
        </button>
      </form>

      {results && (
        <div className="results mt-6 bg-white p-4 rounded shadow">
          <h2 className="block text-gray-700 mb-2 font-bold">Results:</h2>
          <h3 className="block text-[#1e3d58]-700 mb-2 font-semibold">
            Suggested Savings Amount: ₹{results.suggestedSavings}
          </h3>
          <h3 className="block text-[#1e3d58]-700 mb-2 font-semibold">
            Suggested Investment Amount: ₹{results.suggestedInvestment}
          </h3>
          <h3 className="block text-[#1e3d58]-700 mb-2 font-semibold">
            Future Value of Investment After {investmentYears} Years: ₹{results.futureValue}
          </h3>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
