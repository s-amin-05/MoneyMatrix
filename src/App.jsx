import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Learn from "./Pages/Learn/Learn";
import StockGraph from "./Pages/Learn/StockGraph";
import StockMarketSimulation from "./Pages/Learn/StockMarketSimulation";

function App() {
  return (
    <>
      <Navbar />
      {/* <Learn /> */}
      <StockMarketSimulation />
      <Outlet />
    </>
  );
}

export default App;
