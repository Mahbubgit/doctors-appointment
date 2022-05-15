import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.formBasicName.value;
        const email = event.target.formBasicEmail.value;
        const password = event.target.formBasicPassword.value;
        const corfirmPassword = event.target.formBasicConfirmPassword.value;

        createUserWithEmailAndPassword(email, password);
        
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='ms-auto w-50 fs-5' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3 fs-5'>
                Already have an account? 
                <Link to={'/login'} className='text-primary pe-auto text-decoration-none ms-2' onClick={navigateLogin}>Please Login</Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;