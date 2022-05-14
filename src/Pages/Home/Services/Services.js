import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [key, setKey] = useState('therapy');

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (

        <div>
            <h1 className='services-title'>Our Services or Treatment Facilities</h1>
            <Tabs
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="therapy" title="Therapy">
                    <h3 className='text-center'>Therapy</h3>
                    <div className='services'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                                serviceKey={key}
                            ></Service>)
                        }
                    </div>
                </Tab>
                <Tab eventKey="surgery" title="Surgery">
                    <h3 className='text-center'>Surgery</h3>
                    <div className='services'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                                serviceKey={key}
                            ></Service>)
                        }
                    </div>
                </Tab>
                <Tab eventKey="valveImplant" title="Valve Implant">
                    <h3 className='text-center'>Valve Implant</h3>
                    <div className='services'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                                serviceKey={key}
                            ></Service>)
                        }
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Services;