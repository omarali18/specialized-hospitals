import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="nav-container ">
            <nav>
                <Link to="/about">About us</Link>
                <Link to="/pharmacy">Pharmacy</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/home">Home</Link>
            </nav>
        </div>
    );
};

export default Header;