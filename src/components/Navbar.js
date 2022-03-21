import React from 'react'
import HeaderLogo from './HeaderLogo'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <HeaderLogo />
      <div className='stroke'>.</div>
      <ul>
        <li className='navSelected'>
          <b>00</b> Home
        </li>
        <li>
          <b>01</b> Destination
        </li>
        <li>
          <b>02</b> Crew
        </li>
        <li>
          <b>03</b> Technology
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
