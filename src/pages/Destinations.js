import React, { useEffect, useState } from 'react'
import data from '../assets/data.json'
import SecondaryNav from '../components/SecondaryNav'
import Header from '../components/Header'
import img1 from '../assets/destination/image-moon.png'
import img2 from '../assets/destination/image-mars.png'
import img3 from '../assets/destination/image-europa.png'
import img4 from '../assets/destination/image-titan.png'

const Destinations = ({ destId }) => {
  const [id, setId] = useState(0)

  useEffect(() => {
    setId(destId)
  }, [destId])

  const imgs = [img1, img2, img3, img4]

  const dataObj = data.destinations[id]

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
          <img src={imgs[id]} />
        </section>
        <section className='dest__content'>
          <SecondaryNav id={id} setId={setId} />
          <p className='H2'>{dataObj.name}</p>
          <p className='normalText'>{dataObj.description}</p>
          <div className='dest__stroke'>.</div>
          <div className='dest__btm'>
            <div className='avg'>
              <p className='SH2'>Avg. distance</p>
              <p className='SH1'>{dataObj.distance}</p>
            </div>
            <div className='est'>
              <p className='SH2'>Est travel time</p>
              <p className='SH1'>{dataObj.travel}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Destinations
