import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getUserRole, useAuth } from '../../Contexts/AuthContext';
import TCoursesComponent from './Courses/TCoursesComponent';
import Navbar from './Navbar/index';
import TProfileComponent from './Profile/TProfileComponent';
import TQuizesComponent from './Quizes/TQuizesComponent';
import './Sidebar/Sidebar.css';
import TStudentsComponent from './Student/TStudentsComponent';

function TeacherDashboard() {
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
                <div className='content d-flex'>
                    <section className='text-center justify-content-center '>
                        {/*--------------(Teacher-Profile Component)--------------*/}
                        {/* <TProfileComponent />

                        <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} /> */}

                        {/*--------------(Teacher-Courses Component)--------------*/}
                        <TCoursesComponent />

                        <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />

                        {/*--------------(Teacher-Students Component)--------------*/}
                        <TStudentsComponent />

                        <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />

                        {/*--------------(Teacher-Quizes Component)--------------*/}
                        <TQuizesComponent />

                    </section>
                </div>
            </div>
        </>
    )
}

export default TeacherDashboard;