import React from 'react';

const ServiceDetail = ({service,addToCart}) => {
    console.log(addToCart);

    const { name, img } = service;

    return (
        <div className="col-md-4 text-center py-3">
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" style={{ height: '200px' }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat</p>
                <button onClick={addToCart} type="button" className="btn btn-info">Take Service</button>
            </div>
        </div>
    </div>
    );
};

export default ServiceDetail;