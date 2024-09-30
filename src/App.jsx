import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

import "./App.css";
import BudgetSim from "./Pages/Learn/BudgetSim";
import EMICalculator from "./Pages/Tools/EMICalculator";
import RetirementCalculator from "./Pages/Tools/RetirementCalculator";
import Cards from "./Pages/Home";


function App() {
  return (
    <>
      <Navbar />
      
      <Outlet />
    </>
  );
}

export default App;
