import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {

    return (
        <div className='main-container d-flex'>
            <div className='sidebar' id='side_nav'>
                <div className="header-box b-block d-md-none px-3 pt-3 pb-4">
                </div>
                <ul className='list-unstyled px-2'>
                    <li className="px-3 mt-4 d-block">
                        <Link to=""
                            style={{ textDecoration: 'none', color: 'white' }} >
                            <i className='fa fa-home mx-2'></i>
                            Dashbord
                        </Link>
                    </li>
                    <hr className='h-color mx-2' />
                    <li className="px-3 py-2 d-block">
                        <Link to=""
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
                        <Link to=""
                            style={{ textDecoration: 'none', color: 'white' }} >
                            <i class="fa fa-question-circle-o mx-2" />
                            Quizes
                        </Link>
                    </li>
                    <hr className='h-color mx-2' />
                    <li className="px-3 py-2 d-block">
                        <Link to=""
                            style={{ textDecoration: 'none', color: 'white' }} >
                            <i class="fa fa-user-circle-o mx-2"></i>
                            Profile
                        </Link>
                    </li>
                </ul>
                <hr className='h-color mx-2' />
            </div>
        </div>
    )
}

export default Sidebar