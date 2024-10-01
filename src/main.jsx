import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home'
import Learn from './Pages/Learn/Learn'
import Tools from './Pages/Tools/Tools'

import Page1 from './Pages/Blogs/page1.jsx'
import Page2 from './Pages/Blogs/Page2.jsx'
import Page3 from './Pages/Blogs/Page3.jsx'

import MemoryGame from './Pages/Learn/MemoryGame.jsx'
import BudgetSim from './Pages/Learn/BudgetSim.jsx'
import CurrencyConverter from './Pages/Tools/CurrencyConverter.jsx'
import EMICalculator from './Pages/Tools/EMICalculator.jsx'
import RetirementCalculator from './Pages/Tools/RetirementCalculator.jsx'
import Blog from './Pages/Blog.jsx'

import Modules from './Pages/Modules.jsx'



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
            <Route path='Blog/Page1' element={<Page1 />}/>
            <Route path='Blog/Page2' element={<Page2 />}/>
            <Route path='Blog/Page3' element={<Page3 />}/>
            <Route path='Modules' element={<Modules/>}/>
            

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
