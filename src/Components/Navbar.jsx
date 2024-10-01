import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  
  return (
      <div className={`mt-0 bg-[#43b0f1] flex items-center justify-around text-white h-14 w-screen drop-shadow-md`} 
      >
        <div className='flex'>
            MoneyMatrix
        </div>
        

        <ul className='flex justify-center gap-12 '>
        
          <li className='flex items-center justify-center'>
            <NavLink to={'/'} 
              className={({isActive})=>(
              `${isActive? `text-blue-500`: `text-white`} flex items-center justify-center`
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
          <NavLink to={'/Blogs'}
          className={({isActive})=>(
            `${isActive? `text-contrastColor`: `text-white`}`
            )}
          >
              Blogs📰

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

