import React from 'react';
import './Specialist.css';

const Specialist = ({ specialist }) => {
    const { name, img } = specialist;
    return (
        <div className='specialist'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
        </div>
    );
};

export default Specialist;