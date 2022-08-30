import React from 'react';
import "./index.css";
import {
  Bars, Nav, NavBtn,
  NavBtnLink, NavLink, NavMenu
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>

        <NavLink to='/home'>
          <img className="logo" src={require('../../images/logo.png')} alt='logo' />
          <div className="myLMS navbar-brand mt-3">
            myLMS
          </div>
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to='/home'>
            Home
          </NavLink>
          <NavLink to='/courses'>
            Courses
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/home'>Getting Started</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
