import React from 'react';
import Header from '../../components/Header/Header';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Header />
            <div className="banner-container">
                <div className="banner-header">
                    <h1>GIVE PROPER <br /> <span className="mark-write">TREATMENT</span> <br /> SAVE LIVES</h1>
                </div>

            </div>
        </div>
    );
};

export default Banner;