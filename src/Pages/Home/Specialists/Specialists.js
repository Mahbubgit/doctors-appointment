import React from 'react';
import eyeSpecialist1 from '../../../images/specialists/eye/DrTariqRezaAli.jpg';
import eyeSpecialist2 from '../../../images/specialists/eye/ProfDrAnisurRahman.jpg';
import eyeSpecialist3 from '../../../images/specialists/eye/ProfDrDipakKumarNag.jpg';
import Specialist from '../Specialist/Specialist';
import './Specialists.css';

const specialists = [
    {id:1, name: 'Dr Tariq Reza Ali', img: eyeSpecialist1},
    {id:2, name: 'Prof Dr Anisur Rahman', img: eyeSpecialist2},
    {id:3, name: 'Prof Dr Dipak Kumar Nag', img: eyeSpecialist3}
]
const Specialists = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Specialists...</h1>
            <div className='specialist-container'>
                {
                    specialists.map(specialist => <Specialist
                    key={specialist.id}
                    specialist={specialist}
                    ></Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;