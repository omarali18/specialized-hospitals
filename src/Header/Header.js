import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className="nav-container">
                <Link to="/home">Home</Link>
                <Link to="/doctors">Doctors</Link>
            </nav>
        </div>
    );
};

export default Header;