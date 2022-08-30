import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";


function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }
        const promises = [];
        setLoading(true);
        setError("");
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }


        Promise.all(promises)  // It can execute a code block until a non-block async request is complete.
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                setError("Failed to update account");
            })
            .finally(() => {
                setLoading(false);
            });

        // try {
        //   setError("");
        //   setLoading(true);
        //   //   await signup(emailRef.current.value, passwordRef.current.value);
        //   navigate("/");
        // } catch {
        //   setError("Failed to create an account");
        // }
        // setLoading(false);
    }


    return (
        <>
            <div className='container col-sm-12 col-md-6 col-lg-6 col-12'>
                <div className='container'>
                    <div className='m-80'>
                        <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{ minHeight: "100vh" }}>
                            <div className="w-100" style={{ maxWidth: "400px" }}>
                                <Card>
                                    <Card.Body>
                                        <h2 className="text-center mb-4">Update Profile</h2>
                                        {error && <Alert variant="danger">{error}</Alert>}
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group id="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    ref={emailRef}
                                                    defaultValue={currentUser.email}
                                                />
                                            </Form.Group>

                                            <Form.Group id="password">
                                                <Form.Label className="mt-3">Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    ref={passwordRef}
                                                    placeholder="Leave blank to keep the same"
                                                />
                                            </Form.Group>

                                            <Form.Group id="password-confirm">
                                                <Form.Label className="mt-3">Confirm Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    ref={passwordConfirmRef}
                                                    placeholder="Leave blank to keep the same"
                                                />
                                            </Form.Group>

                                            <Button disabled={loading} className="w-100 mt-3" type="submit">
                                                Update
                                            </Button>

                                        </Form>
                                    </Card.Body>
                                </Card>
                                <div className="w-100 text-center mt-2">
                                    <Link to="/">Cancel</Link>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateProfile;