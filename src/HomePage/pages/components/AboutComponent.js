import React from 'react'
import '../Home.css';

function AboutComponent() {
  return (
    <section className='about p-0 m-0'>
      <div className='container'>
        <div className='text-center mt-2'>
          <h1>About <span className='text-primary'>Us</span></h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <h1 className='mt-4 font-design'>Know about <span className='text-primary'>LMS Portal</span></h1>
            <p className='mt-4'>
              Main motive of Learning Management System is to empower education among student's with better connectivity with digital world.
            </p>
            <div>
              It contains different portals for students, staffs, admin with required personal dashboards once logged in.
              <div className='mt-3'>
                <strong>&#8226; Student:</strong>
                <span> Able to enroll in various interested courses, give tests, analyse scores.</span>
              </div>
              <div className='mt-2'>
                <strong>&#8226; Teacher:</strong>
                <span> Able to create quizes, assignments, remark & review student's scores.</span>
              </div>
              <div className='mt-2'>
                <strong>&#8226; Admin:</strong>
                <span> Provide credentials to staffs & whole access to LMS.</span>
              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-12 mt-3 about-card shadow'>
          </div>
        </div>
      </div>

      {/*-------- TEAM PROFILE -------- */}
      <profile className="ourteam">
        <div className="container text-center py-5 mt-2">
        <h1>Our <span className='text-primary'>Team</span></h1>
        <hr className="w-25 m-auto" />
          <div className="row teamsetting py-4">
            <div className="col-lg-3 col-md-2 col-sm-10 col-12 d-block m-auto">
              <figure className="figure">
                <img src="../assets/v.jpeg" alt='something' className="figure-img rounded-circle card" height="250px" width="250px" />
                <figcaption>
                  Vasu Garg
                  <h5><strong className="figure-caption">Team Member</strong></h5>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-3 col-md-2 col-sm-10 col-12 d-block m-auto ">
              <figure className="figure">
                <img src="../assets/h.jpeg" alt='something' className="figure-img rounded-circle card" height="250px" width="250px" />
                <figcaption>
                  Harshit Singh
                  <h5><strong className="figure-caption">Team Member</strong></h5>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-3 col-md-2 col-sm-10 col-12 d-block m-auto">
              <figure className="figure">
                <img src="../assets/n.jpeg" alt='something' className="figure-img rounded-circle card" height="250px" width="250px" />
                <figcaption>
                  Nishant Singh
                  <h5><strong className="figure-caption">Team Member</strong></h5>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-3 col-md-2 col-sm-10 col-12 d-block m-auto">
              <figure className="figure">
                <img src="../assets/t.jpeg" alt='something' className="figure-img rounded-circle card" height="250px" width="250px" />
                <figcaption>
                  Tabish Sharma
                  <h5><strong className="figure-caption">Team Member</strong></h5>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </profile>
    </section>
  )
}

export default AboutComponent