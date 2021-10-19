import React from 'react';
import { Col } from 'react-bootstrap';

const ShopCard = ({ item }) => {
    const {img, id , name, price, rating, tag}= item
    return (
        <Col>
            <div className="shop-card text-center pb-4 border h-100">
                <img className="img-fluid" src={img} alt="" />
                <p>{tag }</p>
                <h4>{name}</h4>
                <p>Price {price}</p>
                <button className="btn btn-outline-success fw-bold">Add to Card</button>
            </div>
            
        </Col>
    );
};

export default ShopCard;