import React from 'react'
// import style from '../template/layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
export default function Layout() {

    
  return <>
<Navbar/>
<div className="container pt-16 pb-16 mx-auto"> 
  <Outlet></Outlet>
</div>
<Footer/>

  </>
}
