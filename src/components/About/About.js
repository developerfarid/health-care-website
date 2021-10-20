import { useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBoxes, faComments, faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container>
            <h1 className="title-heading title-m ">
                Who We Are ?
            </h1>
            <img className="img-fluid" src={"http://ipharm.axiomthemes.com/wp-content/uploads/2020/05/image-114-copyright.jpg"} alt="" />

            <Row>
                <Col xs={12} sm={8} md={6}>
                    <h1 className="title-heading mt-5">
                        Who We Do ?
                    </h1>
                    <p className='text-black-50 fw-bold mt-4'>Find the right care right when you need it. Start by choosing your reason for visit, and we’ll help you find the right care.</p>
                </Col>
            </Row>
            <Row data-aos="zoom-in" className="g-4 my-5" xs={1} sm={2} md={3} lg={4}>
                <Col>
                    <div className="about-item ">
                        <FontAwesomeIcon className="zoom" icon={faBox} size="3x" />
                        <h4>Free Shipping Orders Over $150</h4>
                        <button className="about-btn" >Shop Now</button>
                    </div>
                </Col>
                <Col>
                    <div className="about-item ">
                        <FontAwesomeIcon className="zoom" icon={faBoxes} size="3x" />
                        <h4>Discreet Packaging</h4>
                        <button className="about-btn" >Read More</button>
                    </div>
                </Col>
                <Col>
                    <div className="about-item ">
                        <FontAwesomeIcon className="zoom" icon={faComments} size="3x" />
                        <h4>Doctors Prescription</h4>
                        <button className="about-btn" >Read More</button>
                    </div>
                </Col>
                <Col>
                    <div className="about-item ">
                        <FontAwesomeIcon className="zoom" icon={faLaptopMedical} size="3x" />
                        <h4>
                            Trusted Online Pharmacy</h4>
                        <button className="about-btn" >Read More</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;