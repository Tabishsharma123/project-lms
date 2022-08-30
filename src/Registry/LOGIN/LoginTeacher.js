import React, { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import Navbar from "../../HomePage/components/Navbar";


function LoginTeacher() {
    const emailRef = useRef();
    const passwordRef = useRef();
    //const passwordConfirmRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault(); //preventDefault() method stops the default action of a selected element from happening by a user. 
        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //   return setError("Passwords do not match");
        // }
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Failed to sign in");
        }
        setLoading(false);
    }

    // Sign in with Google Account...
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await googleSignIn();
            navigate("/");
        } catch {
            setError("Failed to sign in");
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
                                <i className="fa fa-sign-in fa-3x center py-" aria-hidden="true"></i>
                                <h2 className="mb-4">Teacher Login</h2>
                            </div>
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" ref={emailRef} required />
                                </Form.Group>

                                <Form.Group id="password" className="mt-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" ref={passwordRef} required />
                                </Form.Group>

                                {/* <Form.Group id="password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group> */}

                                <Button disabled={loading} className="w-100 mt-4" type="submit">
                                    Log In
                                </Button>
                            </Form>
                            <hr />
                            <div>
                                <GoogleButton
                                    disabled={loading}
                                    className="w-100 mt-4"
                                    type="dark"
                                    onClick={handleGoogleSignIn}
                                />
                            </div>

                            {/* <Link to="/phone-signup">
                        <div className="d-grid gap-2 mt-3">
                            <Button variant="success" type="submit">
                                Sign in with Number
                            </Button>
                        </div>
                    </Link> */}

                            <div className="w-100 text-center mt-3">
                                <Link to="/reset-teacher"><strong>Forgot Password ?</strong></Link>
                            </div>

                        </Card.Body>
                    </Card>


                    <div className="p-3 text-center">
                        Don't have teacher credentials? <Link to="/signup-teacher"><strong>Click Here</strong></Link>
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

export default LoginTeacher;