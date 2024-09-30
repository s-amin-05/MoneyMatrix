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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />}/>
            <Route path='/Learn' element={<Learn />}/>
            <Route path='/Tools' element={<Tools />}/>
            <Route path='/Page1' element={<Page1 />}/>
            <Route path='/Page2' element={<Page2 />}/>
            <Route path='/Page3' element={<Page3 />}/>
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
