import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Appointment = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const appointmentDateRef = useRef('');
    const descriptionRef = useRef('');

    const {serviceId} = useParams();

    const handleAppointment = event =>{
        event.preventDefault();
        const name = event.target.formBasicName.value;
        const email = event.target.formBasicEmail.value;
        const appointmentDate = event.target.formBasicAppointmentDate.value;
        const description = event.target.formBasicDescription.value;

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Book For Appointment- {serviceId}</h2>
            <Form onSubmit={handleAppointment}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAppointmentDate">
                    <Form.Control ref={appointmentDateRef} type="date" placeholder="Appointment Date" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control as="textarea" rows={3} ref={descriptionRef} type="text" placeholder="Description of Disease" required/>
                </Form.Group>
            </Form>

            <Link to={'/checkout'}>
                <button className='btn btn-primary mx-auto'>Proceed to Checkout</button>
            </Link>
        </div>
    );
};

export default Appointment;