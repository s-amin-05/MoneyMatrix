import React, { useState } from 'react';

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    const [currentSavings, setCurrentSavings] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [desiredIncome, setDesiredIncome] = useState('');
    const [results, setResults] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculation logic here
        const totalSavingsAtRetirement = currentSavings * (1 + (annualReturn / 100)) ** (retirementAge - currentAge);
        const monthlyIncome = (totalSavingsAtRetirement / (retirementAge - currentAge) / 12);
        const shortfall = desiredIncome - monthlyIncome;
        setResults({ totalSavingsAtRetirement, monthlyIncome, shortfall });
    };

    return (
        <div className="max-w-xl mx-auto bg-[#96cff1] p-5 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-left text-">Retirement Strategy Calculator</h1>
            <form onSubmit={handleSubmit} className="mt-5">
                <label className="block text-left">Current Age:</label>
                <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(e.target.value)}
                    className="w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58] "
                />
                <label className="block text-left">Retirement Age:</label>
                <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(e.target.value)}
                    className="w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-left">Current Savings (₹):</label>
                <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
                    className="w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-left">Monthly Contribution (₹):</label>
                <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-left">Expected Annual Return Rate (%):</label>
                <input
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(e.target.value)}
                    className="w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-left">Desired Monthly Retirement Income (₹):</label>
                <input
                    type="number"
                    value={desiredIncome}
                    onChange={(e) => setDesiredIncome(e.target.value)}
                    className="w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <button 
                    type="submit" 
                    className="w-full p-3 mt-5 bg-[#1e3d58] text-white rounded-lg hover:bg-[#0f2c3e] focus:outline-none">
                    Calculate
                </button>
            </form>

            {results && (
                <div className="mt-5 text-left">
                    <h2 className="text-lg font-bold">Results:</h2>
                    <p>Total Savings at Retirement: ₹{results.totalSavingsAtRetirement.toFixed(2)}</p>
                    <p>Monthly Income During Retirement: ₹{results.monthlyIncome.toFixed(2)}</p>
                    <p>Shortfall/Surplus: ₹{results.shortfall.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default RetirementCalculator;
