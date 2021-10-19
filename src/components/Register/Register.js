import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'


const Register = () => {
    const {error,message, facebookSign, handleEmail, handlePass, githubSign, createUser, handleName, googleSign, } = useAuth()
    return (
        <Container className="register pt-5 my-5">
            <Row md={2} sm={1} className="container-form h-100">
                <Col>
                    <div className="form-container py-5">

                        <form onSubmit={createUser}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                            <button onClick={ facebookSign} className="social"><FontAwesomeIcon icon={faFacebookF} /></button>
                        <button onClick={googleSign } className="social"><FontAwesomeIcon icon={faGoogle} /></button>
                        <button onClick={githubSign} className="social"><FontAwesomeIcon icon={faGithub} /></button>
                            </div>
                            <span>or use your email for registration</span>
                            <input onBlur={handleName} type="text" placeholder="Name" />
                            <input onBlur={handleEmail} type="email" placeholder="Email" />
                            <input onBlur={handlePass} type="password" placeholder="Password" />
                            <input type="submit" className="submit" value="Sign Up" />
                            <p>{message}</p>
                            <p>{error }</p>
                        </form>
                    </div>
                </Col>
                <Col>
                    <div className="overlay-container py-2">
                        <div className="overlay py-5">
                            <div className="overlay-panel">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <Link to='/login'>
                                <button className="ghost">Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>




            </Row>
        </Container>
    );
};

export default Register;