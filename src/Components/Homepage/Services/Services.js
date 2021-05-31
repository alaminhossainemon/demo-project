import React from 'react';
import performance from '../../../images/performance.jpg';
import engine from '../../../images/engine.jpg';
import brake from '../../../images/break.jpg';
import wheel from '../../../images/wheel.jpg';
import antilock from '../../../images/antilock.jpg';
import crush from '../../../images/crush.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Performance Upgrade',
        img: performance
    },
    {
        name: 'Engine Service & Repair',
        img: engine
    },
    {
        name: 'Break Repair & Service',
        img: brake
    },
    {
        name: 'wheel-alignment',
        img: wheel
    },
    {
        name: 'Anti Lock Break',
        img: antilock
    },
    {
        name: 'Crash Car Repair',
        img: crush
    }
]

const Services = ({addToCart}) => {
    return (
        <section className="services-container mt-5">
            <div className="text-center text-primary">
                <h2>OUR SERVICES</h2>
                <h4>Services We Provide</h4>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2 pt-2">
                    {
                        serviceData.map(service => <ServiceDetail service={service} addToCart={addToCart} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;