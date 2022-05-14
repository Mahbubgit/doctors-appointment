import React from 'react';
import './Service.css';

const Service = ({ keyTherapy: key, service }) => {
    const { id, name, price, description, img } = service;
    let therapyName, therapyPrice, therapyDescription, therapyImg;

    if (key === 'therapy') {
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
    }
    else if (key === 'surgery') {
        if (id >= 4 && id <=6) {
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
    }
    else if (key === 'valveImplant') {
        if (id >= 7 && id <=9) {
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
    }


    //-----------------------------------------------------------
    // const { name, price, description, img } = service;
    // return (
    //     <div className='service'>
    //         <img className='image' src={img} alt="" width={300} />
    //         <h4>{name}</h4>
    //         <p>
    //             Price: ${price} <br />
    //             <small>{description}</small>
    //         </p>
    //         <div>
    //             <button className='btn btn-primary w-25 my-0 mx-0'>Details</button>
    //         </div>
    //     </div>
    // );
};

export default Service;
