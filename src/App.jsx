
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import CurrencyConverter from './Pages/Tools/CurrencyConverter'
import Community from './Pages/Community/Community'
import Cards from './Pages/Blogs'


function App() {
  

  return (
    <>

        <Navbar />
        <CurrencyConverter />
        <Outlet />
        <Community/>
        <Cards />

    </>
  );
}

export default App;
