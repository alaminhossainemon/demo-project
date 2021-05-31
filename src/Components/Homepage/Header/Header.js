import React from 'react';
import './Header.css';
import Navbar from '../../ReUse/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = ({cart}) => {
    return (
        <div className="header-container">
            <Navbar cart ={cart}></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;