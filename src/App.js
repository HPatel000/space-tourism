import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crew from './pages/Crew'
import Destinations from './pages/Destinations'
import Home from './pages/Home'
import Technology from './pages/Technology'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/destination'
            element={<Destinations destId={0} />}
          />
          <Route exact path='/crew' element={<Crew crewId={0} />} />
          <Route exact path='/technology' element={<Technology techId={0} />} />
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
