import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Learn from "./Pages/Learn/Learn";
import StockTracker from "./Pages/Tools/StockTracker";

function App() {
  return (
    <>
      <Navbar />
      <Learn />
      <Outlet />
    </>
  );
}

export default App;
