import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='contentSection'>
        <h5 className='H5'>So, you want to travel to</h5>
        <h1 className='H1'>Space</h1>
        <p className='bodyText'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <button>Explore</button>
    </div>
  )
}

export default Home
