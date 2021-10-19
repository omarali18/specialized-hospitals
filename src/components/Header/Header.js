import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import "./Header.css"

const Header = () => {
    const { user, handleLogOut } = useAuth()
    console.log(user.displayName, "omar");
    return (
        <div className="nav-container ">
            <nav>
                {/* {
                    user.email ? <Link onClick={handleLogOut} to="/activeUser">Log out</Link> : <Link to="/activeUser">Log in</Link>
                } */}
                {
                    !user.email ? <Link to="/login">Sign In</Link> : <span>

                        <Link onClick={handleLogOut} to="/home"><small className="userName">{user.displayName} <i className="fas fa-user"></i></small>   Sign Out</Link>
                    </span>
                }
                <Link to="/about">About us</Link>
                <Link to="/pharmacy">Pharmacy</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/home">Home</Link>
            </nav>
        </div>
    );
};

export default Header;