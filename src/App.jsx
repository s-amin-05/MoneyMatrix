


import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Learn from "./Pages/Learn/Learn";



function App() {
  return (
    <>

        <Navbar />
        <Outlet />
        <Cards />

    </>
  );
}

export default App;
