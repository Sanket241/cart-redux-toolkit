import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <div style={{display:'flex', alignItems:'center',justifyContent:"space-between"}}>
  <span className='logo'>Redux Store</span>
  <div>
    <NavLink className="navLink" to="/">Home</NavLink>
    <NavLink className="navLink" to="/cart">Cart</NavLink>
    <span className='cartCount'>


    </span>
  </div>
  
  </div>
  )
}

export default Navbar