import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const ServiceDetails = () => {
    const { service } = useAuth()
    const { id } = useParams()
    const findItem = service.find(item => item?.id === Number(id))
    return (
        <Container className="mt-5 pt-5">
            <Row  data-aos="fade-up" className="card-design">
                <Col md={4}>
                    <div className="border border-gray p-3">
                        <h3 className="border-bottom">About</h3>
                        <p>Our company offers all customers proper prescription drugs at the best prices that meets all requirements. No special doctor’s permissions are needed. We stick to the only standard of the quality for many years, and it helps us to have a good reputation and thousand positive reviews of customers all over the world. Therefore, we are the best, and people trust Us.</p>
                    </div>
                </Col>
                <Col md={8}>
                    <div>
                        <img className="img-fluid" src={findItem?.img} alt="" />
                        <p className="py-4">{findItem?.des}</p>
                        <img className="img-fluid" src={findItem?.extraImg} alt="" />
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default ServiceDetails;