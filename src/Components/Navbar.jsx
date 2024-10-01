import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  
  return (
      <div className={`mt-0 bg-[#43b0f1] flex items-center justify-around text-white h-14 overflow-hidden w-screen`} 
      >
        <div className='flex'>
            Logo 
        </div>
        

        <ul className='flex w-2/4 justify-center gap-20 flex-wrap'>
        
          <li>
            <NavLink to={'/'} 
              className={({isActive})=>(
              `${isActive? `text-contrastColor`: `text-white`}`
              )}>
              Home🏠
            </NavLink>
          </li>

          <li> 
          <NavLink to={'/Tools'}
          className={({isActive})=>(
            `${isActive? `text-contrastColor`: `text-white`}`
            )}>
              Tools🔧


          </NavLink>
          </li>

          <li>
          <NavLink to={'/Learn'}
          className={({isActive})=>(
            `${isActive? `text-contrastColor`: `text-white`}`
            )}>
              Learn📖
          </NavLink>
          </li>
          <li>
            <NavLink to={'/Modules'} 
              className={({isActive})=>(
              `${isActive? `text-contrastColor`: `text-white`}`
              )}>
              Modules🛣

            </NavLink>
          </li>

          <li>
          <NavLink to={'/Blog'}
          className={({isActive})=>(
            `${isActive? `text-contrastColor`: `text-white`}`
            )}>
              Blog📰

          </NavLink>
          </li>

        </ul>

        <Link className='text-white'>
            User Icon
        </Link>
      </div>
    
  )
}

function CTA({content}) {
    return (
        <button className='rounded-2xl bg-red-600 px-4 font-light h-[60%] duration-100 hover:scale-105'>
            {content}
        </button> 
    )
}

export default Navbar

