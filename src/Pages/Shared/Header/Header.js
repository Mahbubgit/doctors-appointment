import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Doctor's Appointment</h2>
            <nav className='navMenu'>
                <CustomLink to={'/home'} active >Home</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/blog'}>Blog</CustomLink>
                <CustomLink to={'/services'}>Services</CustomLink>
                <CustomLink to={'/faq'}>FAQ</CustomLink>
                <CustomLink to={'/article'}>E-Article</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
                <CustomLink to={'/appointment'}>Appointment</CustomLink>
            </nav>
        </div>
    );
};

export default Header;