import React from 'react'
import { Link } from 'react-router-dom';
  import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
      <ul>

      <li> <Link to="/">Home</Link></ li>
      <li><Link to="/">About</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/">Contact Us</Link></li>
      
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
