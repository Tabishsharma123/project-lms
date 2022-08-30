import React, { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";


function ResetAdmin() {
  const emailRef = useRef();
  //   const passwordRef = useRef();
  //const passwordConfirmRef = useRef();
  const { resetPassword } = useAuth();
  const [setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();  //preventDefault() method stops the default action of a selected element from happening by a user. 
    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    try {
      setMessage("");
      setError("");
      setLoading(true);
      //   await login(emailRef.current.value, passwordRef.current.value);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }


  return (
    <>
    <Navbar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>

          <Card className="border border-secondary shadow">
            <Card.Body>
              <div className="text-center">
                <i className="fa fa-lock fa-3x center py-" aria-hidden="true"></i>
                <h2 className="mb-4">Admin Password Reset</h2>
              </div>
              {message && <Alert variant="success">{message}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" ref={emailRef} required />
                </Form.Group>

                {/* <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group> */}

                {/* <Form.Group id="password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group> */}

                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Reset Passowrd
                </Button>
              </Form>

              <div className="w-100 text-center mt-3">
                <Link to="/login-admin"><strong>Login</strong></Link>
              </div>
            </Card.Body>
          </Card>
          {/* <div className="w-100 text-center mt-2 p-4">
            Need an account? <Link to="/signup-admin"><strong>Sign Up</strong></Link>
          </div> */}

          <Link to="/home">
            <div className="d-flex text-align-center justify-content-center">
              <button type="submit">
                Back to Home
              </button>
            </div>
          </Link>

        </div>
      </Container >
    </>
  );
}

export default ResetAdmin;