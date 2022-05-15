import React from 'react';
import photo from '../../../images/Picture.jpg';

const About = () => {
    return (
        <div className='w-75 mx-auto'>
            <table>
                <thead>
                    <tr>
                        <td>
                            I'm S.M. Mahbubur Rahman.
                        </td>
                        <td>
                            <img className='w-50 h-50 mx-auto' src={photo} alt="" />
                        </td>
                    </tr>
                </thead>
                <tr>
                    <td colSpan={2}>
                        I am doing this course to develop my skill as a web developer. After completion my course I want to finish 10-15 more websites for better practice. Next I want to search for online based part time job or work as a freelancer besides doing my job.
                        Now I've 3 to 5 hours in a day to invest for part time job or work as a freelancer. When I experienced in this field, I'll do full time online based job or work as a freelancer.
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        Though it's very hard for me to achieve my goal, but I know and also believe that 'Nothing is Impossible if you try and do hard work'.
                    </td>
                </tr>
            </table>

        </div>
    );
};

export default About;