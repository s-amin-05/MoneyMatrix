
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import CurrencyConverter from './Pages/Tools/CurrencyConverter'
import Cards from './Pages/Cards'


function App() {
  

  return (
    <>

        <Navbar />
        <CurrencyConverter />
        <Outlet />
        <Cards />

    </>
  );
}

export default App;
