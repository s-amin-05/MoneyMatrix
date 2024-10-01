import React, { useRef } from "react";
import RetirementCalculator from "./RetirementCalculator";
import EMICalculator from "./EMICalculator";
import CurrencyConverter from "./CurrencyConverter";
import Investment from "./Invesment";

function Tools() {
  // Create references for each section and the top
  const topRef = useRef(null);
  const investmentRef = useRef(null);
  const retirementRef = useRef(null);
  const emiRef = useRef(null);
  const currencyRef = useRef(null);

  // Scroll function to scroll to the referenced section
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Reference for top */}
      <div ref={topRef}></div>

      {/* Navigation buttons */}
      <div className="buttons-container flex justify-center space-x-4 mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleScroll(investmentRef)}
        >
          Investment Calculator
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleScroll(retirementRef)}
        >
          Retirement Calculator
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleScroll(emiRef)}
        >
          EMI Calculator
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleScroll(currencyRef)}
        >
          Currency Converter
        </button>
      </div>

      {/* Investment Section */}
      <div ref={investmentRef} className="section mt-10">
        <Investment />
      </div>

      {/* Retirement Section */}
      <div ref={retirementRef} className="section mt-10">
        <RetirementCalculator />
      </div>

      {/* EMI Section */}
      <div ref={emiRef} className="section mt-10">
        <EMICalculator />
      </div>

      {/* Currency Converter Section */}
      <div ref={currencyRef} className="section mt-10">
        <CurrencyConverter />
      </div>

      {/* "Back to Top" button */}
      <div className="flex justify-center mt-10">
        <button
          className="bg-[#43b0f1] hover:bg-[#057dcd] text-white font-bold py-2 px-4 rounded"
          onClick={() => handleScroll(topRef)}
        >
          Back to Top
        </button>
      </div>
    </>
  );
}

export default Tools;
