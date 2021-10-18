import React from 'react';
import { useParams } from 'react-router';
import useService from '../../Hooks/useService';

const ServiceDetails = () => {

    const id = useParams()
    const { services } = useService()

    console.log(services, id);

    return (
        <div>
            <h1>this is service details</h1>
        </div>
    );
};

export default ServiceDetails;