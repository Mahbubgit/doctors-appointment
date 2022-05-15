import React from 'react';

const CheckOut = () => {
    return (
        <div className='container text-center'>
            <h2>Please checkout your appointment</h2>
            <table>
                <thead>
                    <tr>
                        <td>
                            Date
                        </td>
                        <td>
                            Time
                        </td>
                        <td>
                            Service
                        </td>
                        <td>
                            Appointment Type
                        </td>
                        <td>
                            Checkout/Cancel
                        </td>
                    </tr>
                </thead>
                <tr>
                    <td>
                        10/04/2022
                    </td>
                    <td>
                        10.00 AM
                    </td>
                    <td>
                    Therapy: Electrotherapy or Electric Stimulation
                    </td>
                    <td>
                        <button className='btn btn-primary'>Offline</button>
                        <button className='btn btn-primary'>Online</button>
                    </td>
                    <td>
                        <button className='btn btn-primary'>Check Out Appointment</button>
                        <button className='btn btn-primary'>Cancel</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default CheckOut;