import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';


const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    // const id = useParams()

    useEffect(() => {
        // fetch("fakeServices.json")
        fetch("fakeServices.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <div>
            <h1>this is doctors</h1>
        </div>
    );
};

export default ServiceDetails;