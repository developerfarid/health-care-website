import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const fullElements= <FontAwesomeIcon spin  icon={faStar} />

const ShopCard = ({ item }) => {
    const {img , name, price, rating, tag}= item
    return (
        <Col>
            <div data-aos="fade-up" className="shop-card rounded-3 text-center pb-4 border h-100">
                <img className="img-fluid" src={img} alt="" />
                <p className="pt-2">{tag }</p>
                <h4>{name}</h4>
                <p className="d-flex justify-content-between align-items-center px-4 pt-3"><span className="fw-bold">Price {price}</span><span><Rating  style={{color:"#1b94ac"}} readonly initialRating={rating} emptySymbol='fa fa-star-o spin' fullSymbol={fullElements} /></span></p>
                <button className="btn btn-outline-success fw-bold">Add to Card</button>
            </div>
            
        </Col>
    );
};

export default ShopCard;