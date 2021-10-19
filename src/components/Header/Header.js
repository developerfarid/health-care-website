import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut}=useAuth()
    return (
        <Navbar className="fixed-top bg-white"expand="lg">
            <Container>
                <NavLink className="text-decoration-none fs-1 text-info" to="/home">ipharm</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="ms-auto ">
                        <NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/home">Home</NavLink>
                        <NavLink  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/about">About</NavLink>
                        <NavLink  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/service">Service</NavLink>
                        <NavLink  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/blog">Blog</NavLink>
                        <NavLink  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/shop">Shop</NavLink>
                        {user?.email ?  <button  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link border-0 bg-transparent" onClick={logOut}>Logout</button>: <NavLink   activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/login">Login</NavLink>}
                        {!user.email&&<NavLink  activeStyle={{ color: "#e6d011", textDecoration:"underline", }} className="my-link" to="/register">Register</NavLink>}

                    </Nav>
                    {user.email&& <Navbar.Text className="fw-bold text-info">
                        Signed in as: <span>{user?.displayName }</span>
                    </Navbar.Text>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default Header;