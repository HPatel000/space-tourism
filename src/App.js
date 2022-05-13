import React, { Fragment } from 'react'
import './App.css'
import Header from './components/Header'
import Crew from './pages/Crew'
import Destinations from './pages/Destinations'
import Home from './pages/Home'

const App = () => {
  return (
    <Fragment>
      {/* <h1>Hello World</h1> */}
      {/* <Home /> */}
      {/* <Destinations /> */}
      <Crew />
    </Fragment>
  )
}

export default App
