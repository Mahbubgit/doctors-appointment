import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageNotFound from '../../images/404.png';
const NotFound = () => {
    const navigate = useNavigate();
    const handleToHomePage = () =>{
        navigate(`/home`);
    }
    return (
        <div className='text-center'>
            <img src={PageNotFound} alt="" />
            <button onClick={()=>handleToHomePage()} className='btn btn-primary'>Back to Doctor's Appointment</button>
        </div>
    );
};

export default NotFound;