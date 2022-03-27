import React from 'react'
import HeaderLogo from './HeaderLogo'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <HeaderLogo />
      <div className='stroke'>.</div>
      <ul>
        <li className='navSelected'>
          <a href='#'>
            <b>00</b> Home
          </a>
        </li>
        <li>
          <a href='#'>
            <b>01</b> Destination
          </a>
        </li>
        <li>
          <a href='#'>
            <b>02</b> Crew
          </a>
        </li>
        <li>
          <a href='#'>
            <b>03</b> Technology
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
