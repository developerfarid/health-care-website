import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="py-5">
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col>
                        <div className="footer-item">
                            <Link style={{fontFamily: "Oswald"}} className="fs-1 text-decoration-none text-info" to='/home'>
                                ipharm
                            </Link>
                            <p>If you’re in need of medicines – we’re here by your side.Stay safe and buy online!</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>Useful Link</h3>
                            <ul>
                                <li><NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/home">Home</NavLink></li>
                                <li><NavLink  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/about">About</NavLink></li>
                                <li><NavLink  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/service">Service</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="footetr-item">
                            <h3>Contacts</h3>
                            <p>176 W Street Name, New York, NY 1001</p>
                            <p>(123) 456-78-90 <br /> (123) 456-78-91</p>
                            <p>sales@example.com</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;