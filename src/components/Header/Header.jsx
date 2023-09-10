import React from 'react';
import "./Header.css";
import Logo from "./../../images/Logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/invertory">Invertory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;