import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ serviceKey: key, service }) => {
    const { id, name, price, description, img } = service;
    
    const navigate = useNavigate();
    const navigateToBookForAppointment = id =>{
        navigate(`/service/${id}`);
    }
    let serviceName, servicePrice, serviceDescription, serviceImg;

    if (key === 'therapy') {
        if (id <= 3) {
            serviceName = name;
            servicePrice = price;
            serviceDescription = description;
            serviceImg = img;

            return (
                <div className='service'>
                    <img className='image' src={serviceImg} alt="" width={300} />
                    <h4>{serviceName}</h4>
                    <p>
                        Cost: ${servicePrice} <br />
                        <small>{serviceDescription}</small>
                    </p>
                    <div>
                        <button onClick={() => navigateToBookForAppointment(id)} className='btn btn-primary w-50 my-0 mx-0'> Book for Appointment</button>
                    </div>
                </div>
            );
        }
    }
    else if (key === 'surgery') {
        if (id >= 4 && id <=6) {
            serviceName = name;
            servicePrice = price;
            serviceDescription = description;
            serviceImg = img;

            return (
                <div className='service'>
                    <img className='image' src={serviceImg} alt="" width={300} />
                    <h4>{serviceName}</h4>
                    <p>
                        Cost: ${servicePrice} <br />
                        <small>{serviceDescription}</small>
                    </p>
                    <div>
                        <button onClick={() => navigateToBookForAppointment(id)} className='btn btn-primary w-50 my-0 mx-0'> Book for Appointment</button>
                    </div>
                </div>
            );
        }
    }
    else if (key === 'valveImplant') {
        if (id >= 7 && id <=9) {
            serviceName = name;
            servicePrice = price;
            serviceDescription = description;
            serviceImg = img;

            return (
                <div className='service'>
                    <img className='image' src={serviceImg} alt="" width={300} />
                    <h4>{serviceName}</h4>
                    <p>
                        Cost: ${servicePrice} <br />
                        <small>{serviceDescription}</small>
                    </p>
                    <div>
                        <button onClick={() => navigateToBookForAppointment(id)} className='btn btn-primary w-50 my-0 mx-0'> Book for Appointment</button>
                    </div>
                </div>
            );
        }
    }
};

export default Service;
