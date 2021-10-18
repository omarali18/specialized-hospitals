import React from 'react';
import Covid from '../../Covid/Covid';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Covid />
            <Footer />
        </div>
    );
};

export default Home;