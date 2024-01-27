import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import './Navbar.css'


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav >

        <Link to='/' className='title'><h2>DiegoDev</h2></Link>
        <div className='menu' onClick={() => {
          setMenuOpen(!menuOpen)

        }} >
          <span  ></span>
          <span  ></span>
          <span  ></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li> <NavLink to='/'>Home</NavLink> </li>
          <li> <NavLink to='/about'>About</NavLink> </li>
          <li> <NavLink to='contact'>Contact</NavLink> </li>
        </ul>
      </nav>
{/* 
      <h2 className='welcometxt'> A warm Welcom!</h2>
      <div className='textsection'>
        <p className='txtnavbar'>This is my protfolio that i am creating with react, there are still some bugs that i want to fix.
          everything step by step. </p>
        <div className='iconsection'>
          <a href='https://github.com/diego-monfort-landolt'>
            <AiFillGithub color='red' size='40px' />
          </a>
          <a href='https://www.linkedin.com/in/diego-monfort-landolt/'>
            <AiFillLinkedin size='40px' color='red' />
          </a>
        </div>
        <div className='link-home'>
          <NavLink to='/'>Home</NavLink>
        </div>

      </div> */}

    </>
  )
}

