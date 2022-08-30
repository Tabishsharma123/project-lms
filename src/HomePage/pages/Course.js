import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getSingleCourses } from '../../Contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify'; // Using Toast
import 'react-toastify/dist/ReactToastify.css';         // Using Toast

function Course() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleCourse, setSingleCourse] = useState('');

  // Using Toast: https://fkhadra.github.io/react-toastify/introduction/
  const notify = () => toast("Login as a Student to enroll this course!");

  useEffect(() => {
    async function fetchSingleCourses() {
      let res = await getSingleCourses(id);
      setSingleCourse(res);
      console.log('Getting: ', res);
    }
    fetchSingleCourses();
  }, [id]);

  return (
    <>
      <div>
        <Navbar />

        <section className=''>
          <div className='justify-content-center'>
            {/*--------------(Single-Course Component)--------------*/}
            {singleCourse && singleCourse.map((res) => {
              return (
                <>
                  <div key={res.id} className="col d-flex justify-content-center">
                    <div className="card h-100 p-1">
                      <img className="card-img-top"
                        src={res.image}
                        alt={res.title}
                        height="350px"
                        width="200px"
                      />
                      <div className="card-body">
                        <h3 className='title text-center'>{res.title}</h3>
                        <div className='py-1 pb-3'>
                          <p className="card-description mb-0 text-dark text-center">
                            <span>{res.description}</span>
                          </p>
                        </div>
                        <div className="card-text fw-bold pb-2 ">
                          <span>Category: </span>
                          <span className='text-primary'>{res.category}</span>
                        </div>
                        <div className="card-rating fw-bold pb-2">
                          Ratings: {res.ratings}
                        </div>
                        <div className="card-text fw-bold pb-2 ">
                          <span>Duration: </span>
                          <span className='text-danger'>{res.duration}</span>
                        </div>
                        <Link to="">
                          <div className='col d-flex justify-content-center'>
                            <Button varient="primary" onClick={notify}>
                              Enroll Course
                            </Button>
                            <ToastContainer
                              position="top-center"
                              autoClose={8000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <Link to="/courses">
            <div className='col d-flex justify-content-center'>
              <button>
                Back to Courses
              </button>
            </div>
          </Link>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Course;
