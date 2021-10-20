import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import BlogCard from '../BlogCard/BlogCard';
import Card from '../Card/Card';
import HomeCard from '../HomeCard/HomeCard';
import './Home.css'

const Home = () => {
    const { service, blog } = useAuth()
    return (
        <div>

            <Carousel className="my-carousel" fade>
                <Carousel.Item >
                    <div className="overlay-car">
                        <img
                            className="d-block w-100"
                            src={"http://ipharm.axiomthemes.com/wp-content/uploads/2019/02/image-13-copyright-min.jpg"} alt=""
                        />
                        <Carousel.Caption className="my-carousel-info">
                            <h3 className="overly-heading d-inline-block">Flu Season <br /> <span>Is Coming</span></h3>
                            <p>And We Can Help You Prepare </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item  >
                    <div className="overlay-car">
                        <img
                            className="d-block w-100"
                            src={"http://ipharm.axiomthemes.com/wp-content/uploads/2019/02/image-37-copyright-min.jpg"}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="my-carousel-info">
                            <h3 className="overly-heading d-inline-block">Natural <br /> <span>Supplements</span></h3>
                            <p>For Immune System</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>


                <Carousel.Item >
                    <div className="overlay-car">
                        <img
                            className="d-block w-100"
                            src={"http://ipharm.axiomthemes.com/wp-content/uploads/2019/02/image-17-copyright-min.jpg"}
                            alt="Third slide"
                        />

                        <Carousel.Caption className=" my-carousel-info">
                            <h3 className="overly-heading d-inline-block">9 Herbs <br /> <span>Thats Fight Colds</span> </h3>
                            <p>We will help You</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            </Carousel>
            <Container>
                <Row className="py-5" xs={1} md={2} lg={3}>
                    <Col data-aos="slide-left">
                        <HomeCard text="Our Pharmacists Are Here To Help" img='http://ipharm.axiomthemes.com/wp-content/uploads/2020/05/image-107-copyright.jpg'></HomeCard>
                    </Col>
                    <Col data-aos="slide-up">
                        <HomeCard text="Our Pharmacists Are Here To Help" img='http://ipharm.axiomthemes.com/wp-content/uploads/2020/05/image-108-copyright.jpg' text="Up to 20% off" des="For all products"></HomeCard>
                    </Col>
                    <Col data-aos="slide-right">
                        <HomeCard text="Our Pharmacists Are Here To Help" img='http://ipharm.axiomthemes.com/wp-content/uploads/2020/05/image-106-copyright.jpg' text="25% off" des=" your purchase*"></HomeCard>
                    </Col>

                </Row>
                <h2 className="text-center title-heading my-5">Pharmacy Services</h2>
                <Row className="gx-5 gy-1" xs={1} sm={1} md={2}>

                    {service.map(item => <Card key={Math.random()} item={item} />)}

                </Row>
                <h1 className="text-center title-heading my-5">Our Blog</h1>
                <Row data-aos="fade-up" className="h-100 mb-5 g-3" xs={1} md={2} lg={3} >

                    {
                        blog.slice(0, 3).map(item => <BlogCard key={Math.random()} item={item} />)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Home;