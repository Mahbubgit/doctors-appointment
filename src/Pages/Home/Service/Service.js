import React from 'react';

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div>
            <img src={img} alt="" width={300} />
            <h2>{name}</h2>
            <p>Price: $ {price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;