import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleCourses, useAuth } from '../../../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'; // Using Toast
import 'react-toastify/dist/ReactToastify.css';         // Using Toast


function TeacherCourse() {
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleCourse, setSingleCourse] = useState('');

    // Using Toast: https://fkhadra.github.io/react-toastify/introduction/
    const notify = () => toast("Sorry, only Student can enroll this course!!");

    useEffect(() => {
        async function fetchSingleCourses() {
            let res = await getSingleCourses(id);
            setSingleCourse(res);
            console.log('Getting: ', res);
        }
        fetchSingleCourses();
    }, [id]);


    const handleLogout = async () => {
        // Logout functionality...
        setError("");
        try {
            await logout();
            navigate("/home");
        } catch {
            setError("Failed to logout");
        }
    };


    return (
        <>
            <Navbar />
            {/*--------------------------(SideBar)-------------------------- */}
            <div className='main-container d-flex'>
                <div className='sidebar' id='side_nav'>
                    <ul className='list-unstyled px-2'>
                        <li className="px-3 mt-4 d-block">
                            <Link to="/teacher-profile-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-user-circle-o mx-2"></i>
                                Profile
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/teacher-dashboard"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i className='fa fa-home mx-2'></i>
                                Dashboard
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/teacher-courses-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i className='fa fa-list-ul mx-2'></i>
                                Courses
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/teacher-students-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-users mx-2"></i>
                                Students
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/teacher-quizes-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-question-circle-o mx-2" />
                                Create Quiz
                            </Link>
                        </li>
                    </ul>
                    <hr className='h-color mx-2' />

                    <div className='px-4 mx-1 my-3 d-block py-xl-4'>
                        <button type="button" className="btn btn-dark px-3 mx-4"
                            onClick={handleLogout}>
                            <i className="fa fa-sign-out mx-2 my-2"></i>
                            <span className='mx-2'>Log Out</span>
                        </button>
                    </div>
                </div>
                {/*--------------------------(SideBar End)-------------------------- */}

                <section className='content'>
                    <div className='justify-content-center'>
                        {/*--------------(Teacher-Single-Courses Component)--------------*/}
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
                    <Link to="/teacher-courses-view">
                        <div className='col d-flex justify-content-center'>
                            <button>
                                Back to Courses
                            </button>
                        </div>
                    </Link>
                </section>
            </div>
        </>
    )
}

export default TeacherCourse