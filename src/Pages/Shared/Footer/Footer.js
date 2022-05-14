import React from 'react';
import copyright from '../../../images/copyright.png';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='footer-container'>
            <p><small>Copyright</small></p>
            <img src={copyright} alt="" />
            <p><small>{year}</small></p>
        </footer>
    );
};

export default Footer;