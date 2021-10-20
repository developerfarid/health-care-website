import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
    const { user, setUser, message, facebookSign, handleEmail, handlePass, githubSign, sentResetPassByEmail, handleSubmit, googleSign, } = useAuth()
    const location = useLocation()
    const redirectUrl = (location.state?.from) || '/home';
    const history = useHistory()
    const handleG = () => {
        googleSign()
            .then(result => {
                history.push(redirectUrl)
            })
    }
    const handleF = () => {
        facebookSign()
            .then(result => {
                history.push(redirectUrl)
            })
    }
    const handleGit = () => {
        githubSign()
            .then(result => {
                history.push(redirectUrl)
            })
    }



    return (
        <Container className="register py-5 mt-5">
            {/* <h2 className="text-center">Weekly Coding Challenge #1: Sign in/up Form</h2> */}
            <Row data-aos="zoom-in" md={2} sm={1} className="container-form h-100">
                <Col>
                    <div  className="form-container py-5">

                        <form onSubmit={handleSubmit}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <button onClick={handleF} className="social"><FontAwesomeIcon icon={faFacebookF} /></button>
                                <button onClick={handleG} className="social"><FontAwesomeIcon icon={faGoogle} /></button>
                                <button onClick={handleGit} className="social"><FontAwesomeIcon icon={faGithub} /></button>
                            </div>
                            <span>or use your account</span>
                            <input onBlur={handleEmail} type="email" placeholder="Email" required />
                            <input onBlur={handlePass} type="password" placeholder="Password" required />
                            <button className="submit w-100" onClick={sentResetPassByEmail}>Forgot your password?</button>
                            <input className="submit" type="submit" value="Sign In" />

                        </form>
                    </div>
                </Col>
                <Col>
                    <div className="overlay-container py-2">
                        <div className="overlay py-5">
                            <div className="overlay-panel">
                                <h1>Hello, {user.displayName ? user.displayName : "Sir"}</h1>
                                <p className="form-info">Enter your personal details and start journey with us</p>
                                <Link to="/register"><button className="ghost">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>



            </Row>

        </Container>


    );
};

export default Login;