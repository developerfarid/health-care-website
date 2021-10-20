import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Card from '../Card/Card';

const Service = () => {
    const {service} =useAuth()
    return (
        <Container>
            <h1 className="text-center title-m title-heading">
                Our Services
            </h1>
            <Row className="gx-5 gy-1" xs={1} sm={1} md={2}>
                   
                        {service.map(item => <Card key={Math.random()} item={item} />)}
                
                </Row>
        </Container>
    );
};

export default Service;