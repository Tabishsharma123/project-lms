import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAllCourses, useAuth } from '../../../Contexts/AuthContext';


function TQuizesComponent() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [allCourses, setAllCourses] = useState([]);

    // Fetch all student details...
    useEffect(() => {
        async function fetchAllCourses() {
            let every = await getAllCourses();
            setAllCourses(every);
        }
        fetchAllCourses();
    }, [currentUser, navigate]);
    console.log(allCourses)

    return (
        <div>
            <div className='my-2 d-flex text-align-center justify-content-center'>
                <h1>Create <span className='text-primary'>Quizes</span></h1>
            </div>
            <hr className="w-75 m-auto background shadow" style={{ padding: "1px" }} />

            {/* ----------{Render Quizes Details}----------- */}
            {/* {allCourses && allCourses.map((res) => {
                return (
                    <>
                        <h2>{res.title}</h2>
                        <p>{res.duration}</p>
                    </>
                )
            })} */}
        </div>
    )
}

export default TQuizesComponent;