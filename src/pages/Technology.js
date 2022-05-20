import React, { Fragment, useState, useEffect } from 'react'
import Header from '../components/Header'
import data from '../assets/data.json'
import { useLocation } from 'react-router-dom'
import img1 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import img2 from '../assets/technology/image-spaceport-portrait.jpg'
import img3 from '../assets/technology/image-space-capsule-portrait.jpg'

import img4 from '../assets/technology/image-launch-vehicle-landscape.jpg'
import img5 from '../assets/technology/image-spaceport-landscape.jpg'
import img6 from '../assets/technology/image-space-capsule-landscape.jpg'

const Technology = () => {
  const search = useLocation().search

  let id = new URLSearchParams(search).get('id')
  if (!id || id < 0 || id > 2) id = 0
  const dataObj = data.technology[id]

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    )

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
  }

  const { height, width } = useWindowDimensions()

  let imgs = [img1, img2, img3]

  if (width < 1200) {
    imgs = [img4, img5, img6]
  }

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
              <li>
                <a
                  className={`tech__navLink ${
                    id == 0 ? 'tech__navSelected' : ''
                  }`}
                  href='/technology?id=0'
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className={`tech__navLink ${
                    id == 1 ? 'tech__navSelected' : ''
                  }`}
                  href='/technology?id=1'
                >
                  2
                </a>
              </li>
              <li>
                <a
                  className={`tech__navLink ${
                    id == 2 ? 'tech__navSelected' : ''
                  }`}
                  href='/technology?id=2'
                >
                  3
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className='SH2'>The Terminology...</p>
            <p className='H3'>{dataObj.name}</p>
            <p className='normalText'>{dataObj.description}</p>
          </div>
        </section>
        <section className='tech__img'>
          <img src={imgs[id]} alt={dataObj.name} />
        </section>
      </div>
    </div>
  )
}

export default Technology
