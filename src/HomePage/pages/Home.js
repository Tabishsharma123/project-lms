import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import CoursesComponent from './components/CoursesComponent'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      {/* -----------Navbar Section------------ */}
      <Navbar />

      {/* -----------Header Section------------ */}
      <header className='main p-0 m-0'>
        <div className='mt-3 d-flex text-align-center justify-content-center'>
          <h1>Welcome to <span className='text-primary'>myLMS</span></h1>
        </div>
        <hr className="w-50 m-auto" />

        <section>
          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <Link to="/login-student" id='card-title'>
                  <div className="card card-01">
                    <img className="card-img-top" src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?h=350&auto=compress&cs=tinysrgb" alt="something" />

                    <div className="card-body">
                      <span className="badge-box"><i className="fa fa-graduation-cap"></i></span>
                      <h4 className="card-title d-flex text-align-center justify-content-center">
                        Student Login
                      </h4>
                      <div className="btn btn-outline-primary text-uppercase my-3 d-flex text-align-center justify-content-center">Log In</div>
                    </div>
                  </div>
                </Link>
              </div>


              <div className="col-md-4">
                <Link to="/login-teacher" id='card-title'>
                  <div className="card card-01">
                    <img className="card-img-top" src="https://images.pexels.com/photos/6256075/pexels-photo-6256075.jpeg?h=350&auto=compress&cs=tinysrgb" alt="something" />
                    <div className="card-body">
                      <span className="badge-box"><i className="fa fa-group"></i></span>
                      <h4 className="card-title d-flex text-align-center justify-content-center">
                        Teacher Login
                      </h4>
                      <div className="btn btn-outline-primary text-uppercase my-3 d-flex text-align-center justify-content-center">Log In</div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to="/login-admin" id='card-title'>
                  <div className="card card-01">
                    <img className="card-img-top" src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg??h=350&auto=compress&cs=tinysrgb" alt="something" />
                    <div className="card-body">
                      <span className="badge-box"><i className="fa fa-cogs"></i></span>
                      <h4 className="card-title d-flex text-align-center justify-content-center">Admin Login</h4>
                      <div className="btn btn-outline-primary text-uppercase my-3 d-flex text-align-center justify-content-center">Log In</div>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </header>
      
      <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />
      
      <CoursesComponent />

      <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />
      
      <AboutComponent />
      
      <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />
      
      <ContactComponent />
      
      <Footer />
    </>
  )
}

export default Home