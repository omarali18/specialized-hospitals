import React, { useEffect, useState } from 'react';
import Covid from '../../components/Covid/Covid';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import "./Home.css"
import useService from '../../Hooks/useService';

const Home = () => {

    const { services } = useService()

    return (
        <div>
            <Banner />
            <Covid />
            <div className="card-container">
                <div className="row w-75 mx-auto">
                    {
                        services.map(service => <Services
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;