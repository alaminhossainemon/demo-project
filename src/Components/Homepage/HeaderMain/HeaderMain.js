import React from 'react';
import headerImage from '../../../images/headerImage.png'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1 style={{ color: 'white' }}>Professional Car<br /> Service Provider</h1>
                <p className="text-white">We believe in providing top quality workmanship and are so confident in our level of service that we back it up  with a good quality.</p>
                <button className="btn btn-primary">View All Services</button>
            </div>
            <div className="col-md-2">
                <img src={headerImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;