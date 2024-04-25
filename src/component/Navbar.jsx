import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false) 
  return (
    <>
      <div>
        <nav>
          <Link to='Home' className='title'><h2>DiegoDev</h2></Link>
          <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)
          }} >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li onClick={() => setMenuOpen(false)}> <NavLink to='/Home'>Home</NavLink> </li>
            <li onClick={() => setMenuOpen(false)}> <NavLink to='/About'>About</NavLink> </li>
            <li onClick={() => setMenuOpen(false)}> <NavLink to='/Contact'>Contact</NavLink> </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  )
}
export default Navbar;

