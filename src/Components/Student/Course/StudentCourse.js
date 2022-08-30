import { collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllDocs, getSingleCourses, getUserName, getUserRole, useAuth } from '../../../Contexts/AuthContext';
import { db } from '../../../Contexts/firebase';
import Navbar from '../Navbar';


function StudentCourse() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleCourse, setSingleCourse] = useState('');
    const [allDocs, setAllDocs] = useState([]);
    const [username, setUsername] = useState("");
    const [userRole, setUserRole] = useState("");


    useEffect(() => {
        async function fetchData() {
            let res = await getSingleCourses(id);
            setSingleCourse(res);

            let allDocs = await getAllDocs();
            setAllDocs(allDocs);

            let username = await getUserName(currentUser.uid); // Get 'username'
            setUsername(username);

            let role = await getUserRole(currentUser.uid);  // Get user 'role'
            setUserRole(role);
        }
        fetchData();
    }, [currentUser, navigate, id]);


    const enrolled = async () => {
        let length = allDocs[0].length;
        console.log("Enrolled Successfully")
        let i = 0;
        while (i < length) {
            if (allDocs[0][i].email === currentUser.email) {  // fetch the authenticated user document id
                let docID = allDocs[0][i].id
                // console.log(docID)   
                const citiesRef = collection(db, "users");
                setDoc(doc(citiesRef, docID), {
                    email: currentUser.email,
                    role: userRole,
                    userId: currentUser.uid,
                    courseEnrolled: singleCourse[0].id,
                    username: username,
                    courseEnrolledCat: singleCourse[0].title
                });
            }
            i += 1;
        }
    }

    const handleLogout = async () => {
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
                            <Link to="/student-profile-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-user-circle-o mx-2"></i>
                                Profile
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/student-dashboard"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i className='fa fa-home mx-2'></i>
                                Dashboard
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/student-courses-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i className='fa fa-list-ul mx-2'></i>
                                Courses
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/student-enrolled-courses"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-users mx-2"></i>
                                Enrolled
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/student-quizes-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-question-circle-o mx-2" />
                                View Quizes
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
                        {/*--------------(Student-Single-Courses Component)--------------*/}
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
                                            </div>
                                            <div className='col d-flex justify-content-center py-2'>
                                                <Button varient="primary" onClick={enrolled}>
                                                    Enroll Course
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>


                    <Link to="/student-courses-view">
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

export default StudentCourse