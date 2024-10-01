import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

import Learn from "./Pages/Learn/Learn";

import { useState } from "react";




function App() {

  return (
    <>
      
        <Navbar />
        <Outlet />
        
       

    </>
  );
}

export default App;
