import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar  collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <div className='header-logo'>
                        <h2>Doctor's Appointment</h2>
                        <img src={logo} alt="" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navMenu">
                        <CustomLink to={'/home'} active >Home</CustomLink>
                        <CustomLink to={'/about'}>About</CustomLink>
                        <CustomLink to={'/blogs'}>Blogs</CustomLink>
                        <CustomLink to={'/services'}>Services</CustomLink>
                        <CustomLink to={'/faq'}>FAQ</CustomLink>
                        <CustomLink to={'/article'}>E-Article</CustomLink>
                        <CustomLink to={'/login'}>Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;