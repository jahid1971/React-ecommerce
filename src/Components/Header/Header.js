import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header text-white '>

                <img src={logo} alt="" />
            
            <div className='flex gap-[32px]'>
                <a href="">Order</a>
                <a href="">Order review</a>
                <a href="">Manage Inventory</a>
                <a href="">Log in</a>
            </div>
        </nav>
    );
};

export default Header;