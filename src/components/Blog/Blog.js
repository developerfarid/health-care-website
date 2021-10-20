import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
    const { blog } = useAuth()
    return (
        <Container>
            <h1 className="title-m text-center title-heading">Our Latest Blog Here</h1>
            <Row className='g-4 mb-5' xs={1} md={2} lg={3}>
                {
                    blog.map(item => <BlogCard key={Math.random()} item={item} />)
                }
            </Row>
        </Container>
    );
};

export default Blog;