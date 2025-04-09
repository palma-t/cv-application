import { useState } from 'react'
import './App.css'
import Intro from './components/intro.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'

function App() {

  return (
    <div className='container'>
      <Intro />
      <Education />
      <Experience />
    </div>
  )
}

export default App
