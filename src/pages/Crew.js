import React from 'react'
import Header from '../components/Header'
import crewImg from '../assets/crew/image-douglas-hurley.png'

const Crew = () => {
  return (
    <div className='crew__bg'>
      <Header />
      <div className='title'>
        <p className='H5'>
          <span>02 </span> Meet Your Crew
        </p>
      </div>
      <div className='crew'>
        <section className='crew__content'>
          <p className='H4'>commander</p>
          <p className='H3'>Douglas Hurley</p>
          <p className='normalText'>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>

          <nav className='crew__nav'>
            <ul>
              <li className='crew__navSelected'>
                <a href='#'></a>
              </li>
              <li>
                <a href='#'></a>
              </li>
              <li>
                <a href='#'></a>
              </li>
              <li>
                <a href='#'></a>
              </li>
            </ul>
          </nav>
        </section>
        <section className='crew__img'>
          <img src={crewImg} alt='douglas-hurley' />
        </section>
      </div>
    </div>
  )
}

export default Crew
