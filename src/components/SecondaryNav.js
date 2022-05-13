import React from 'react'

const SecondaryNav = () => {
  return (
    <nav className='navbar sec__navbar'>
      <ul>
        <li className='navSelected'>
          <a href='#'>MOON</a>
        </li>
        <li>
          <a href='#'>MARS</a>
        </li>
        <li>
          <a href='#'>EUROPA</a>
        </li>
        <li>
          <a href='#'>TITAN</a>
        </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
