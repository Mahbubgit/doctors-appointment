import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img className='image' src={img} alt="" width={300} />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Details - {name}</button>
        </div>
    );
};

export default Service;