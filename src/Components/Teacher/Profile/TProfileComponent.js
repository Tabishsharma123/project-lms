import React, { useState, useEffect } from 'react';
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getUserName, getUserRole, useAuth } from '../../../Contexts/AuthContext';

function TProfileComponent() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const { currentUser, logout } = useAuth();
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

  // Getting username from getUserName() function...
  useEffect(() => {
    async function fetchUserName_Role() {
      let username = await getUserName(currentUser.uid); // Get 'username'
      setUsername(username);

      let role = await getUserRole(currentUser.uid);  // Get user 'role'
      setUserRole(role);
    }
    fetchUserName_Role();
  }, [currentUser, navigate]);

  return (
    <>
      <div className='my-2 d-flex text-align-center justify-content-center'>
        <h1>Your <span className='text-primary'>Profile</span></h1>
      </div>
      <hr className="w-75 m-auto background shadow" style={{ padding: "1px" }} />

      <div className="profile">
        <div className="container text-center py-4">
          <div className="row teamsetting">
            <div className="col-lg-auto col-md-auto col-sm-auto col-auto d-block m-auto">
              <figure className="figure">
                <img src={require('./profile.jpg')} alt='banner'
                  className="figure-img rounded-circle card" height="200px" width="200px" />
              </figure>
            </div>
            <card>
              <h3><strong>{username}</strong></h3>
              {error && <Alert variant="danger">{error}</Alert>}
              <p>
                <strong>Email: </strong>
                {currentUser.email}
              </p>
              <p>
                <strong>Role: </strong>
                {userRole}
              </p>
              <p>
                <strong>Last Login: </strong>
                {currentUser.metadata.lastSignInTime}
              </p>
              <Link to="/update-profile" className="btn btn-primary w-50 mt-3">
                Update Profile
              </Link>
            </card>
          </div>
          <div className='Logout py-3'>
            <Button varaint="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
     </>
  )
}

export default TProfileComponent