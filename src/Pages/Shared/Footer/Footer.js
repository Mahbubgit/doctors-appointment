import React from 'react';
import copyright from '../../../images/copyright.png';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='footer-container'>
            <img src={copyright} alt="" />
            <p><small>Copyright</small></p>
            <p className='ms-2'><small>{year} - Doctor's Appointment</small></p>
        </footer>
    );
};

export default Footer;