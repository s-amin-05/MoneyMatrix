
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import CurrencyConverter from './Pages/Tools/CurrencyConverter'


function App() {
  

  return (
    <>

        <Navbar />
        <Outlet />

    </>
  );
}

export default App;
