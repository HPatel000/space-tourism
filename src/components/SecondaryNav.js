import React from 'react'

const SecondaryNav = ({ id }) => {
  console.log('🚀 ~ file: SecondaryNav.js ~ line 4 ~ SecondaryNav ~ id', id)
  return (
    <nav className='sec__navbar'>
      <ul>
        <li>
          <a
            className={`nav__Link ${id == 0 ? 'navSelected' : ''}`}
            href='/destination?id=0'
          >
            MOON
          </a>
        </li>
        <li>
          <a
            className={`nav__Link ${id == 1 ? 'navSelected' : ''}`}
            href='/destination?id=1'
          >
            MARS
          </a>
        </li>
        <li>
          <a
            className={`nav__Link ${id == 2 ? 'navSelected' : ''}`}
            href='/destination?id=2'
          >
            EUROPA
          </a>
        </li>
        <li>
          <a
            className={`nav__Link ${id == 3 ? 'navSelected' : ''}`}
            href='/destination?id=3'
          >
            TITAN
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
