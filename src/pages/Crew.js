import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import data from '../assets/data.json'
import img1 from '../assets/crew/image-douglas-hurley.png'
import img2 from '../assets/crew/image-mark-shuttleworth.png'
import img3 from '../assets/crew/image-victor-glover.png'
import img4 from '../assets/crew/image-anousheh-ansari.png'

const Crew = ({ crewId }) => {
  const [id, setId] = useState(0)

  useEffect(() => {
    setId(crewId)
  }, [crewId])

  const imgs = [img1, img2, img3, img4]

  const dataObj = data.crew[id]

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
          <p className='H4'>{dataObj.role}</p>
          <p className='H3'>{dataObj.name}</p>
          <p className='normalText'>{dataObj.bio}</p>

          <nav className='crew__nav'>
            <ul>
              <li>
                <a
                  className={`crew__navLink ${
                    id == 0 ? 'crew__navSelected' : ''
                  }`}
                  onClick={() => setId(0)}
                >
                  .
                </a>
              </li>
              <li>
                <a
                  className={`crew__navLink ${
                    id == 1 ? 'crew__navSelected' : ''
                  }`}
                  onClick={() => setId(1)}
                >
                  .
                </a>
              </li>
              <li>
                <a
                  className={`crew__navLink ${
                    id == 2 ? 'crew__navSelected' : ''
                  }`}
                  onClick={() => setId(2)}
                >
                  .
                </a>
              </li>
              <li>
                <a
                  className={`crew__navLink ${
                    id == 3 ? 'crew__navSelected' : ''
                  }`}
                  onClick={() => setId(3)}
                >
                  .
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className='crew__img'>
          <img src={imgs[id]} alt={dataObj.name} />
        </section>
      </div>
    </div>
  )
}

export default Crew
