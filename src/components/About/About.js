import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"

const About = () => {
    return (
        <div >
            <div className="about-title">
                <h1>About Us</h1>
                <p><small><Link className="about-to-home" to="/home">Home</Link> <span className="dot">.</span> About Us</small></p>
            </div>
            <div className="about-details mx-auto">
                <h4> <span><i className="fas fa-user-md"></i></span> ABOUT SPECIALIZED HOSPITAL</h4>
                <p>SH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
                <p>We understand how hard it can get for some people to find a certain type of doctor who will give you promising results but also has a chamber near your locality. It almost seems impossible to find the perfect doctor. So, we teamed up and went on a hunt for to list down the top rated doctors in Dhaka. Our hardworking dedicated team has come up the list of the best doctors in Dhaka. We have made visits to several hospitals and collected the most authentic contact information of the highly rated professional doctors, each specialized in their own respective fields. Our best doctors list is concentrated of the right doctors who would do you justice with all the money you spent.</p>
                <p>Our main goals is to make differences in the Bangladeshi healthcare industry. We would like to Bangladesh and it’s people to have a whole new view on how improvised health sector could be if we could just team up and create more rooms for development. We are currently working within Dhaka. Unfortunately, due to lack of resources we don’t have enough funds to cover the whole country. We are looking forward to cover not only Dhaka but Bangladesh. We don’t have any funds running on so all of our work is what break our blood, sweat and tears onto. We would be very glad if we could receive a little help with the resource and funding process.</p>
            </div>
        </div>
    );
};

export default About;