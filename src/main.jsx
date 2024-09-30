import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home'
import Learn from './Pages/Learn/Learn'
import Tools from './Pages/Tools/Tools'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />}/>
            <Route path='/Learn' element={<Learn />}/>
            <Route path='/Tools' element={<Tools />}/>
            <Route path='' element={<Home />}/>
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
