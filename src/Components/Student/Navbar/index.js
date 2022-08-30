import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { getUserName, useAuth } from '../../../Contexts/AuthContext';
import "./index.css";
import {
  Bars, Nav, NavLink, NavMenu, NavProfile
} from './NavbarElements';

const Navbar = () => {
  const [username, setUsername] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Getting username from getUserName() function...
  useEffect(() => {
    async function fetchUserName() {
      let username = await getUserName(currentUser.uid);
      // console.log("User Name: " + username);
      setUsername(username);
    }
    fetchUserName();
  }, [currentUser, navigate]);


  return (
    <>
      <Nav>

        <NavLink to='/student-dashboard'>
          <img className="logo" src={require('./images/logo.png')} alt='logo' />
          <div className="myLMS navbar-brand mx-2 mt-3">
            myLMS
          </div>
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to='/student-dashboard'>
            <div className="dashboard-color student-dashboard">Student Dashboard</div>
          </NavLink>
        </NavMenu>
        <NavProfile>
          <div className='profile-text'>Hello {username}</div>
          <Link to="/student-profile-view">
            <div className='profile-logo mt-4 px-3'>
              <figure className="figure">
                <img src={require('./images/profile.png')} alt='banner'
                  className="figure-img rounded-circle card" height="35px" width="35px" />
              </figure>
            </div>
          </Link>

        </NavProfile>
      </Nav>
    </>
  );
};

export default Navbar;
