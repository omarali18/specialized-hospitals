import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./MenueBar.css"

const MenueBar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const { user, handleLogOut } = useAuth()
    return (
        <nav className="navbar">
            {
                user.email ? <h3>{user.displayName} <i className="fas fa-user"></i></h3> : <h3 className="logo">WELCOME</h3>
            }
            <ul className={isMobile ? "nav-links-mobile" : "nav-link-container"}
                onClick={() => setIsMobile(false)}
            >
                <Link to="/home" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/doctors" className="doctors">
                    <li>Doctors</li>
                </Link>
                <Link to="/pharmacy" className="pharmacys">
                    <li>Pharmacy</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About us</li>
                </Link>
                {
                    !user.email ? <Link to="/login" className="sign-up">
                        <li>Sing In</li>
                    </Link> : <Link to="/home" onClick={handleLogOut} className="sign-up">
                        <li>Sing Out</li>
                    </Link>
                }

            </ul>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {
                    isMobile ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>
                }
            </button>
        </nav>
    );
};

export default MenueBar;