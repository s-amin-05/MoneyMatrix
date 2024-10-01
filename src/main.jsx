import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home'
import Learn from './Pages/Learn/Learn'
import Tools from './Pages/Tools/Tools'
import MemoryGame from './Pages/Learn/MemoryGame.jsx'
import BudgetSim from './Pages/Learn/BudgetSim.jsx'
import CurrencyConverter from './Pages/Tools/CurrencyConverter.jsx'
import EMICalculator from './Pages/Tools/EMICalculator.jsx'
import RetirementCalculator from './Pages/Tools/RetirementCalculator.jsx'
import Blog from './Pages/Blog.jsx'
import IncomeBracketPage from './Pages/Learn/IncomeBracketPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />}/>
            <Route path='Learn' element={<Learn />}/>
            <Route path='Learn/MemoryGame' element={<MemoryGame />}/>
            <Route path='Learn/BudgetSim' element={<BudgetSim />}/>
            <Route path='Tools' element={<Tools />}/>
            <Route path='Tools/CurrencyConverter' element={<CurrencyConverter />}/>
            <Route path='Tools/EMICalc' element={<EMICalculator />}/>
            <Route path='Tools/RetirementPlanning' element={<RetirementCalculator />}/>
            <Route path='Blog' element={<Blog />}/>
            
            
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </StrictMode>,
)
