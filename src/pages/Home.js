import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='home__bg'>
      <Header />
      <div className='home'>
        <section className='home__content'>
          <p className='H5'>So, you want to travel to</p>
          <p className='H1'>Space</p>
          <p className='normalText'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <button className='explore'>Explore</button>
      </div>
    </div>
  )
}

export default Home
