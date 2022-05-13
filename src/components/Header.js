import React from 'react'
import HeaderLogo from './HeaderLogo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header'>
      <HeaderLogo />
      <div className='stroke'>.</div>
      <Navbar isHeader={true} />
    </div>
  )
}

export default Header
