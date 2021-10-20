import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = ({ item }) => {
    const {img, name, des, id, title, comments, date}= item
    console.log(item);
    return (
        <Col  data-aos="fade-left">
            <div className="blog-con h-100">
                <div className="blog-img">
                    <img className="img-fluid" src={img} alt="" />
                    <span className="blog-btn">Read More</span>
                </div>
                <div className="blog-text">
                    <span className="date">{date}</span>
                    <h3>{title}</h3>
                    <p><span>By {name} </span> { comments} Comments</p>
                </div>
            </div>
        </Col>
    );
};

export default BlogCard;