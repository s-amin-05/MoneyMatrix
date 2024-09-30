import React from "react";
import "./App.css";
import BudgetSim from "./Pages/Learn/BudgetSim";
import EMICalculator from "./Pages/Tools/EMICalculator"
import RetirementCalculator from "./Pages/Tools/RetirementCalculator";
function App() {
  return (
    <>
      {/* <BudgetSim/> */}
      <EMICalculator />
      <RetirementCalculator/>
      
    </>
  );
}

export default App;
