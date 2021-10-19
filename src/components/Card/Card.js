import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ item }) => {
    const {img, title, des,id, titleDes,extraImg} = item
    console.log(item);
    return (
        <Row xs={1} md={2} className="py-3 align-items-center">
            <Col>
                <div className="img-design">
                <img className="img-fluid" src={img} alt="" />
                </div>
            </Col>
            <Col>
                <div className="service-card">
                    <h3>{title}</h3>
                    <p>{titleDes.slice(0, 200) + "..."}</p>
                    <Link to={`/servic/${id}`}>
                        <button className="submit">Read More</button>
                    </Link>
                </div>
            </Col>
        </Row>
    );
};

export default Card;