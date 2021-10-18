import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("fakeDoctor.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDoctors(data)
            })
    }, [])
    return (
        <div>
            <div className="card-container">
                <div className="row w-75 mx-auto">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;