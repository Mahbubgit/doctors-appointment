import React from 'react';
import './Therapy.css';

const Therapy = (service) => {
    const {id, name, price, description, img } = service;
    let therapyName, therapyPrice, therapyDescription, therapyImg;

    if (id <= 3) {
        therapyName = name;
        therapyPrice = price;
        therapyDescription = description;
        therapyImg = img;

        return (
            <div className='service'>
                <img className='image' src={therapyImg} alt="" width={300} />
                <h4>{therapyName}</h4>
                <p>
                    Cost: ${therapyPrice} <br />
                    <small>{therapyDescription}</small>
                </p>
                <div>
                    <button className='btn btn-primary w-25 my-0 mx-0'>Details</button>
                </div>
            </div>
        );
    }
};

export default Therapy;