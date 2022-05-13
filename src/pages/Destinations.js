import React, { Fragment } from 'react'
import moon from '../assets/destination/image-moon.png'

import data from '../assets/data.json'
import Navbar from '../components/Navbar'
import SecondaryNav from '../components/SecondaryNav'
import Header from '../components/Header'
console.log(data)

const Destinations = () => {
  return (
    <div className='dest__bg'>
      <Header />
      <div className='title'>
        <p className='H5'>
          <span>01 </span> Pick your destination
        </p>
      </div>
      <div className='dest'>
        <section className='dest__imgSec'>
          <img src={moon} alt='Moon' />
        </section>
        <section className='dest__content'>
          <SecondaryNav />
          <p className='H2'>Moon</p>
          <p className='normalText'>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className='dest__stroke'>.</div>
          <div className='dest__btm'>
            <div className='avg'>
              <p className='SH2'>Avg. distance</p>
              <p className='SH1'>384,400 km</p>
            </div>
            <div className='est'>
              <p className='SH2'>Est travel time</p>
              <p className='SH1'>3 days</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Destinations
