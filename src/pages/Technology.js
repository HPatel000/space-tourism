import React, { Fragment } from 'react'
import Header from '../components/Header'
import launchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg'

const Technology = () => {
  return (
    <div className='tech__bg'>
      <Header />
      <div className='title'>
        <p className='H5'>
          <span>03 </span> Space Launch 101
        </p>
      </div>
      <div className='tech'>
        <section className='tech__content'>
          <nav className='tech__nav'>
            <ul>
              <li className='tech__navSelected'>
                <a href='#'>1</a>
              </li>
              <li>
                <a href='#'>2</a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
            </ul>
          </nav>
          <div>
            <p className='SH2'>The Terminology...</p>
            <p className='H3'>Launch vehicle</p>
            <p className='normalText'>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </section>
        <section className='tech__img'>
          <img src={launchVehicle} alt='douglas-hurley' />
        </section>
      </div>
    </div>
  )
}

export default Technology
