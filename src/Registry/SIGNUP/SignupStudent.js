import React, { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";

function SignupStudent() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signupStudent } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault(); //preventDefault() method stops the default action of a selected element from happening by a user.
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signupStudent(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      navigate("/");
    } catch {
      setError("Failed to create an account");
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
                <i className="fa fa-user-plus fa-3x center py-" aria-hidden="true"></i>
                <h2 className="mb-4">Student Signup</h2>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter your username" ref={nameRef} required />
                </Form.Group>

                <Form.Group id="email"
                  className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password"
                  className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password"
                  className="mt-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm your password" ref={passwordConfirmRef} required />
                </Form.Group>

                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Sign Up
                </Button>
                <div className="mt-3"></div>
              </Form>
            </Card.Body>
          </Card>
          <div className="p-4 text-center">
            Already have any account ? <Link to="/login-student"><strong>Log In</strong></Link>
          </div>

          <Link to="/home">
            <div className="d-flex text-align-center justify-content-center">
              <button type="submit">
                Back to Home
              </button>
            </div>
          </Link>

        </div>
      </Container>
    </>
  );
}

export default SignupStudent;