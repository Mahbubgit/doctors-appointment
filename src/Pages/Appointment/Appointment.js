import React from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>This is Appointment page of Service: {serviceId}</h2>
        </div>
    );
};

export default Appointment;