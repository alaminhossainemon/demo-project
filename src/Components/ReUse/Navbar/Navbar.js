import React from 'react';
import logo from '../../../images/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({cart}) => {
    console.log(cart);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <a className = "navbar-brand" href="#"> <img className="logo" src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Login</a>
                        </li>
                        <li className="nav-item">
                            <h3 className="nav-link"style={{color: '#fff'}} ><FontAwesomeIcon icon={faCartPlus} style={{color: '#fff'}}> </FontAwesomeIcon>-{cart} </h3>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;