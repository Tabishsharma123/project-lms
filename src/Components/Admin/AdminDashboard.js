import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getUserRole, useAuth } from '../../Contexts/AuthContext';
import ACoursesComponent from './Courses/ACoursesComponent';
import Navbar from './Navbar/index';
// import AProfileComponent from './Profile/AProfileComponent';
import AQuizesComponent from './Quizes/AQuizesComponent';
import './Sidebar/Sidebar.css';
import AStudentsComponent from './Student/AStudentsComponent';
import ATeachersComponent from './Teacher/ATeachersComponent';

function AdminDashboard() {
    const [error, setError] = useState("");
    // const [username, setUsername] = useState("");
    const { currentUser,logout } = useAuth();
    const navigate = useNavigate();

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

    useEffect(() => {
        async function fetchUserName() {
            // let username = await getUserName(currentUser.uid);   // Getting username
            // console.log("User Name: " + username);
            // setUsername(username);
            let role = await getUserRole(currentUser.uid);  // getUserRole defined in AuthContext.js
            if (role === "STUDENT") {
                // console.log(role);
                navigate("/student-dashboard")
            }
            else if (role === "ADMIN") {
                // console.log(role);
                navigate("/admin-dashboard")
            }
            else if (role === "TEACHER") {
                // console.log(role);
                navigate("/teacher-dashboard")
            }
            else {
                navigate("/home")
            }
        }
        fetchUserName();
    }, [currentUser, navigate]);

    return (
        <>
            <Navbar />
            {/*--------------------------(SideBar)-------------------------- */}
            <div className='main-container d-flex'>
                <div className='sidebar' id='side_nav'>
                    <ul className='list-unstyled px-2'>
                        <li className="px-3 mt-4 d-block">
                            <Link to="/admin-profile-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-user-circle-o mx-2"></i>
                                Profile
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/admin-dashboard"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i className='fa fa-home mx-2'></i>
                                Dashboard
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/admin-courses-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i className='fa fa-list-ul mx-2'></i>
                                Courses
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/admin-students-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-users mx-2"></i>
                                View Students
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/admin-teachers-view"
                                style={{ textDecoration: 'none', color: 'white' }} >
                                <i class="fa fa-users mx-2"></i>
                                View Teachers
                            </Link>
                        </li>
                        <hr className='h-color mx-2' />
                        <li className="px-3 py-2 d-block">
                            <Link to="/admin-quizes-view"
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
                <div className='content d-flex'>
                    <section className='text-center justify-content-center '>
                        {/*--------------(Teacher-Profile Component)--------------*/}
                        {/* <AProfileComponent />

                        <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} /> */}

                        {/*--------------(Admin-Courses-View Component)--------------*/}
                        <ACoursesComponent />

                        <div className='py-3'></div>
                        <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />

                        {/*--------------(Admin-Students-View Component)--------------*/}
                        <AStudentsComponent />

                        <div className='py-3'></div>
                        <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />

                        {/*--------------(Admin-Students-View Component)--------------*/}
                        <ATeachersComponent />

                        <div className='py-3'></div>
                        <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />

                        {/*--------------(Admin-Quizes Component)--------------*/}
                        <AQuizesComponent />

                    </section>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;