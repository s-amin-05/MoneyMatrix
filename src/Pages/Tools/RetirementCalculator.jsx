import React, { useState } from 'react';

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    const [currentSavings, setCurrentSavings] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [desiredIncome, setDesiredIncome] = useState('');
    const [monthlyExpenditure, setMonthlyExpenditure] = useState(''); // New state for monthly expenditure
    const [results, setResults] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculation logic here
        const totalSavingsAtRetirement = currentSavings + (monthlyContribution - monthlyExpenditure) * 12 * annualReturn;
        const monthlyIncome = (totalSavingsAtRetirement / ((retirementAge - currentAge) * 12));
        const shortfall = desiredIncome - (monthlyIncome - monthlyExpenditure); // Adjusted calculation for shortfall
        setResults({ totalSavingsAtRetirement, monthlyIncome, shortfall });
    };

    return (
        <div className="mt-20 max-w-xl mx-auto bg-[#96cff1] p-5 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-left">Retirement Strategy Calculator</h1>
            <form onSubmit={handleSubmit} className="mt-5">
                <label className="block text-gray-700 mb-2 font-bold">Current Age:</label>
                <input
                    type="number" 
                    value={currentAge}
                    onChange={(e) => setCurrentAge(e.target.value)}
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-gray-700 mb-2 font-bold">Retirement Age:</label>
                <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(e.target.value)}
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-gray-700 mb-2 font-bold">Current Savings (₹):</label>
                <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-gray-700 mb-2 font-bold">Monthly Income (₹):</label>
                <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-gray-700 mb-2 font-bold">Monthly Expenditure (₹):</label>
                <input
                    type="number"
                    value={monthlyExpenditure}
                    onChange={(e) => setMonthlyExpenditure(e.target.value)}
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-gray-700 mb-2 font-bold">Expected Annual Return Rate (%):</label>
                <input
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(e.target.value)}
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                <label className="block text-gray-700 mb-2 font-bold">Desired Monthly Retirement Income (₹):</label>
                <input
                    type="number"
                    value={desiredIncome}
                    onChange={(e) => setDesiredIncome(e.target.value)}
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-1 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1e3d58]"
                />
                
                <button 
                    type="submit" 
                    className="mb-4 p-2 rounded border border-gray-300 font-bold w-full p-3 mt-5 bg-[#1e3d58] text-white rounded-lg hover:bg-[#0f2c3e] focus:outline-none">
                    Calculate
                </button>
            </form>

            {results && (
                <div className="results mt-6 bg-white p-4 rounded shadow">
                    <h2 className="block text-gray-700 mb-2 font-bold">Results:</h2>
                    <p className='block text-[#1e3d58]-700 mb-2 font-semibold'>Total Savings at Retirement: ₹{results.totalSavingsAtRetirement }</p>
                    <p className='block text-[#1e3d58]-700 mb-2 font-semibold'>Monthly Income During Retirement: ₹{results.monthlyIncome.toFixed(2)}</p>
                    <p className='block text-[#1e3d58]-700 mb-2 font-semibold'>Shortfall/Surplus: ₹{results.shortfall.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default RetirementCalculator;
