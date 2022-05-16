import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    // create user and email verification
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if(loading){
        return <Loading></Loading>
    }
    const navigateLogin = () => {
        navigate('/login');
    }
    
    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.formBasicName.value;
        const email = event.target.formBasicEmail.value;
        const password = event.target.formBasicPassword.value;
        const confirmPassword = event.target.formBasicConfirmPassword.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            navigate('/home');
        }
        else {
            errorElement = <p className='text-danger'>Error: Password and Confirm Password must be same.</p>
            errorElement = errorElement.props.children;
        }
        
        // console.log(errorElement);
        // console.error(errorElement);
    }
    return (
        <div className='register-container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button variant="primary mx-auto w-50 fs-5 d-block mb-2" type="submit">
                    Register
                </Button>
            </Form>
            {errorElement}
            <p className='mt-3 text-center'>
                Already have an account?
                <Link to={'/login'} className='text-primary pe-auto text-decoration-none ms-2' onClick={navigateLogin}>Please Login</Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;