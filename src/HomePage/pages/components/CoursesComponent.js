import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAllCourses, useAuth } from '../../../Contexts/AuthContext';

function CoursesComponent() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    // Fetch all courses details...
    useEffect(() => {
        async function fetchAllCourses() {
            let response = await getAllCourses();
            setData(response);
            setFilter(response);
        }
        fetchAllCourses();
    }, [currentUser, navigate]);
    console.log()

    // filter courses...
    const filterCourses = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    return (
        <div>
            <div className='my-2 d-flex text-align-center justify-content-center mt-4'>
                <h1>View all <span className='text-primary'>Courses</span></h1>
            </div>
            <hr className="w-75 m-auto background shadow" style={{ padding: "1px" }} />

            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">

                        <div>
                            <div className='product-button'>
                                <div className="buttons d-flex justify-content-center mb-4 mt-3">
                                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                                    <button className="btn btn-outline-dark me-2" onClick={() => filterCourses("FrontEnd")}>FrontEnd</button>
                                    <button className="btn btn-outline-dark me-2" onClick={() => filterCourses("BackEnd")}>BackEnd</button>
                                    <button className="btn btn-outline-dark me-2" onClick={() => filterCourses("Programming")}>Programming</button>
                                    <button className="btn btn-outline-dark me-2" onClick={() => filterCourses("SoftwareEngineering")}>Software Engineering</button>
                                </div>
                            </div>
                        </div>

                        {/* --------{Render Courses Detail}------ */}
                        {/* {allCourses && allCourses.map((res) => { */}
                        {filter.map((res) => {
                            return (
                                <>
                                    <div key={res.id} className="col-xs-12 col-sm-6 col-md-4 rounded-5 py-3">
                                        <div className="card h-100 text-center p-1 ">
                                            <img className="card-img-top"
                                                src={res.image}
                                                alt={res.title}
                                                height="230px"
                                                width="200px"
                                            />
                                            <div className="card-body">
                                                <h3 className='title'>{res.title}</h3>
                                                <p className="card-description mb-0">{res.description.substring(0, 100)}...</p>
                                                <p className="card-rating fw-bold pt-1">
                                                    Ratings: {res.ratings}
                                                </p>
                                                <p className="card-text text-primary fw-bold">
                                                    Duration: {res.duration}
                                                </p>

                                                <Link to={`/courses/${res.id}`}>
                                                    <button className='btn btn-outline-dark'>View Course</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        {/* --------------------------- */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesComponent;