import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="nav-container ">
            <nav className="  " >
                <Link className="" to="/about">About us</Link>
                <Link className="" to="/contact">Contact us</Link>
                <Link className="" to="/doctors">Doctors</Link>
                <Link className="" to="/home">Home</Link>
            </nav>





        </div>
    );
};

export default Header;