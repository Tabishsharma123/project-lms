import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

export default function Footer() {
    return (
        <div className="footer">
            <footer className="py-3" id="footer-text">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item"><strong>
                        <Link to="/home" style={{color: "#FFFDD0"}}><div className="py-2 px-2">
                            Home
                        </div></Link></strong></li>

                    <li className="nav-item"><strong>
                        <Link to="/courses" style={{color: "#FFFDD0"}}><div className="py-2 px-2">
                            Courses
                        </div></Link></strong></li>

                    <li className="nav-item"><strong>
                        <Link to="/about" style={{color: "#FFFDD0"}}><div className="py-2 px-2">
                            About
                        </div></Link></strong></li>

                    <li className="nav-item"><strong>
                        <Link to="/contact-us"style={{color: "#FFFDD0"}}><div className="py-2 px-2">
                            Contacts
                        </div></Link></strong></li>
                        
                    <li className="nav-item"><strong>
                        <Link to="/home" style={{color: "#FFFDD0"}}><div className="py-2 px-2">
                            LogIn / SignUp
                        </div></Link></strong></li>
                </ul>
                <p className="text-center" id="footer-text">©Copyright 2022, Made by NVHT Team</p>
            </footer>
        </div>
    );
}