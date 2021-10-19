import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Card from '../Card/Card';

const Service = () => {
    const {service} =useAuth()
    return (
        <Container>
            <h1 className="mt-5 text-center py-5 title-heading">
                Our Services
            </h1>
            <Row sm={1}>
                    <Col>
                        {service.map(item => <Card key={Math.random()} item={item} />)}
                    </Col>
                </Row>
        </Container>
    );
};

export default Service;