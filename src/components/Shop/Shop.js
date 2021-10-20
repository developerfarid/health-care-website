import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import ShopCard from '../ShopCard/ShopCard';

const Shop = () => {
   const {shop} =useAuth()
    return (
        <Container>
            <h1 className=" title-m text-center title-heading">
                Our Product
            </h1>
            <Row  data-aos="fade-up" className="g-3 mb-5"  xs={1} sm={2} md={3} lg={4}>
                {
                    shop.map(item => <ShopCard key={Math.random()} item={ item}/>)
                }
            </Row>
        </Container>
    );
};

export default Shop;