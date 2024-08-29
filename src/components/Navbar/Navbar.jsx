import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  // Initialize state with an empty string or any other valid initial value

  return<>
   <div className="navbar fixed top-0 right-0 left-0 mx-auto bg-slate-500 py-6">
       <ul className='flex flex-wrap justify-around items-center'>
       <li> <NavLink className='text-black-600' to='brands'>brands</NavLink></li>
       <li> <NavLink className='text-black-600' to='carts'>carts</NavLink></li>
       <li> <NavLink className='text-black-600' to='login'>login</NavLink></li>
       <li> <NavLink className='text-black-600' to='register'>register</NavLink></li>
       <li> <NavLink className='text-black-600' to='about'>about</NavLink></li>
       <li> <NavLink className='text-black-600' to=''>home</NavLink></li>

        
      </ul>
   </div>



    </>
  
}
