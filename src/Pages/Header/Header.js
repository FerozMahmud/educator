import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <div>
            <Navbar className='header'>
                <Container>
                    <img height='50px' src="./logo.png" alt="" />
                    <Nav>
                        <NavLink className='nav' activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className='nav' activeStyle={activeStyle} to="/services">Services</NavLink>
                        <NavLink className='nav' activeStyle={activeStyle} to="/about">About Us</NavLink>
                        <NavLink className='nav' activeStyle={activeStyle} to="/team">Our Team</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;