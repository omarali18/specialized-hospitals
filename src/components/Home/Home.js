import React from 'react';
import Covid from '../../components/Covid/Covid';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import "./Home.css"
import useService from '../../Hooks/useService';
import InfornmationHealth from '../InfornmationHealth/InfornmationHealth';

const Home = () => {

    const { services } = useService()

    return (
        <div>
            <Banner />
            <Covid />
            <div className="card-container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mx-auto card-sizeing">
                    {
                        services.map(service => <Services
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
            <InfornmationHealth />

            <Footer />
        </div>
    );
};

export default Home;