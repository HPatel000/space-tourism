import React from 'react'

const SecondaryNav = ({ id, setId }) => {
  return (
    <nav className='sec__navbar'>
      <ul>
        <li>
          <a
            className={`nav__Link ${id == 0 ? 'navSelected' : ''}`}
            onClick={() => setId(0)}
          >
            MOON
          </a>
        </li>
        <li>
          <a
            className={`nav__Link ${id == 1 ? 'navSelected' : ''}`}
            onClick={() => setId(1)}
          >
            MARS
          </a>
        </li>
        <li>
          <a
            className={`nav__Link ${id == 2 ? 'navSelected' : ''}`}
            onClick={() => setId(2)}
          >
            EUROPA
          </a>
        </li>
        <li>
          <a
            className={`nav__Link ${id == 3 ? 'navSelected' : ''}`}
            onClick={() => setId(3)}
          >
            TITAN
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
