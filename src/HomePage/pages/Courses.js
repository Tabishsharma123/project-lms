import React from 'react'
import Navbar from '../components/Navbar'
import CoursesComponent from './components/CoursesComponent'
import Footer from './Footer'

function Courses() {
  return (
    <div>
      <Navbar />
      <CoursesComponent />
      <div className='py-4'></div>
      <Footer />
    </div>
  )
}

export default Courses