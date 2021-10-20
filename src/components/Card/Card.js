import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ item }) => {
    const { img, title, id, titleDes } = item

    return (
        <Col data-aos="fade-up" className="py-3 align-items-center">
            <div className="card-design h-100">
                <div className="img-design">
                    <img className="img-fluid h-100" src={img} alt="" />
                </div>
                <div className="service-card">
                    <h3>{title}</h3>
                    <p>{titleDes.slice(0, 200) + "..."}</p>
                    <Link to={`/servic/${id}`}>
                        <button className="submit">Read More</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Card;