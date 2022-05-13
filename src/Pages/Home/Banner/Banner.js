import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner/banner1.webp';
import banner2 from '../../../images/banner/banner2.webp';
import banner3 from '../../../images/banner/banner3.webp';
import banner4 from '../../../images/banner/banner4.webp';
import banner5 from '../../../images/banner/banner5.webp';
import banner6 from '../../../images/banner/banner6.webp';

const Banner = () => {
    const [banner, setBanner] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setBanner(selectedIndex);
    }
    return (
        <Carousel variant="dark" activeIndex={banner} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 className='carousel-title'>Doctor's Appointment</h5>
                    <p className='carousel-description-yellow'>Choose Your Required Specialist From Our Site</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5 className='carousel-title'>Doctor's Appointment</h5>
                    <p className='carousel-description'>Take A Treatment For Better Life</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5 className='carousel-title'>Doctor's Appointment</h5>
                    <p className='carousel-description'>Visit To Your Specialist, Take Care Of Your Health</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={banner4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h5 className='carousel-title'>Doctor's Appointment</h5>
                    <p className='carousel-description-yellow'>Choose Your Specialist By Mobile</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={banner5}
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h5 className='carousel-title'>Doctor's Appointment</h5>
                    <p className='carousel-description'>Take An Appointment, Be Safe</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={banner6}
                    alt="Sixth slide"
                />
                <Carousel.Caption>
                    <h5 className='carousel-title'>Doctor's Appointment</h5>
                    <p className='carousel-description-yellow'>Take An Appointment, We'll Care Of Your Health</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;