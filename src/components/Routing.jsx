import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Contact from "./Contact"
import Skills from "./Skills"
import About from "./About"
import Projects from './Projects'
function Routing() {
  return (
   <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/projects' element={<Projects/>}/>
      <Route  path='/skills' element={<Skills/>}/>
   </Routes>
  )
}

export default Routing