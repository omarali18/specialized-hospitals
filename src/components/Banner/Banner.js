import React from 'react';
import MenueBar from '../MenueBar/MenueBar';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <MenueBar />
            <div className="banner-container">
                <div className="banner-header">
                    <h1>GIVE PROPER <br /> <span className="mark-write">TREATMENT</span> <br /> SAVE LIVES</h1>
                </div>

            </div>
        </div>
    );
};

export default Banner;