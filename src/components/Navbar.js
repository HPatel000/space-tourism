import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const navClicked = () => {
    setToggle(!toggle)
  }

  return (
    <div
      className={`navWrapper ${toggle ? 'navShow navActive' : 'navHide'}`}
      onClick={navClicked}
    >
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink
              exact
              className={({ isActive }) =>
                isActive ? 'nav__Link navSelected' : 'nav__Link'
              }
              to='/'
            >
              <b>00</b> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className={({ isActive }) =>
                isActive ? 'nav__Link navSelected' : 'nav__Link'
              }
              to='/destination?id=0'
            >
              <b>01</b> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className={({ isActive }) =>
                isActive ? 'nav__Link navSelected' : 'nav__Link'
              }
              to='/crew?id=0'
            >
              <b>02</b> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className={({ isActive }) =>
                isActive ? 'nav__Link navSelected' : 'nav__Link'
              }
              to='/technology?id=0'
            >
              <b>03</b> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
