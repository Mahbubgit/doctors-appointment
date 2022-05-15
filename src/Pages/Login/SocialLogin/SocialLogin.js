import React from 'react';
import googleImg from '../../../images/social/google.png';
import githubImg from '../../../images/social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-3 px-1'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className='d-flex gap-3'>
                <button className='btn btn-secondary w-50 d-flex mx-auto my-auto'>
                    <div className='mx-auto d-flex'>
                        <img className='ms-auto' style={{ width: "30px", height: "30px" }} src={googleImg} alt="" />
                        <span className='mx-1'>Google Sign In</span>
                    </div>
                </button>
                <button className='btn btn-secondary w-50 d-flex mx-auto my-auto'>
                    <div className='mx-auto d-flex'>
                    <img className='ms-auto' style={{ width: "30px", height: "30px" }} src={githubImg} alt="" />
                    <span className='mx-1'>GitHub Sign In</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;