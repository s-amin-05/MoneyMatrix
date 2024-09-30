import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import FinancialEducationRoadmap from "./Pages/Tools/Financial";
import "./App.css";
import BudgetSim from "./Pages/Learn/BudgetSim";
import EMICalculator from "./Pages/Tools/EMICalculator";
import RetirementCalculator from "./Pages/Tools/RetirementCalculator";
import Cards from "./Pages/Home";
import StockMarketDropdownWithAPI from "./Pages/Tools/Financial";


function App() {
  return (
    <>
      <Navbar />
      
      <Outlet />
    </>
  );
}

export default App;
