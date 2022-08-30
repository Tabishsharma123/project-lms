import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAllStudents, useAuth } from '../../../Contexts/AuthContext';

function TStudentsComponent() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [allStudents, setAllStudents] = useState([]);

    // Fetch all student details...
    useEffect(() => {
        async function fetchAllStudents() {
            let every = await getAllStudents();
            setAllStudents(every);
        }
        fetchAllStudents();
    }, [currentUser, navigate]);
    // console.log(allStudents)

    return (
        <>
            <div className='my-2 d-flex text-align-center justify-content-center'>
                <h1>Student's <span className='text-primary'>Detail</span></h1>
            </div>
            <hr className="w-75 m-auto background shadow" style={{ padding: "1px" }} />

            <div className='mt-4 pt-3 d-flex text-align-center justify-content-center'>
                <h4>List of Registered <span className='text-primary'>Student's Detail</span></h4>
            </div>

            <div className="d-flex text-align-center justify-content-center pt-2">
                <div className="col-sm-12 col-md-8 col-lg-8 col-12">
                    <table class="table shadow border-dark">
                        <thead class="thead-dark bg-black text-white">
                            <tr>
                                <th scopr="col"><i class="fa fa-arrow-right"></i></th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        {/* ----------{Render Student Details}----------- */}
                        {allStudents && allStudents.map((res) => {
                            return (
                                <>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-arrow-right"></i></td>
                                                <td>{res.username}</td>
                                                <td>{res.email}</td>
                                                <td>{res.role}</td>
                                            </tr>
                                        </tbody>
                                </>
                            )
                        })}

                    </table>
                </div>
            </div>
        </>
    )
}

export default TStudentsComponent;