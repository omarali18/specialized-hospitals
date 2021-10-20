import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("fakeDoctor.json")
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    }, [])
    return (
        <div>
            <div className=" mx-auto docror-description">
                <h1>Types of doctors and what they do</h1>
                <h3>When a person has a medical concern, they may turn to a doctor for help. There are many types of doctor, and a person’s specific concern will usually determine the type of doctor they choose.</h3>
                <p>There are many types of doctors, but there are two main categories: primary care or specialty care. Within these two groups, doctors vary widely in their specialty area and level of training.</p>
                <p>This article looks at the different types of doctor, their roles, the conditions they treat, and the procedures they can perform.</p>
            </div>
            <div className="card-container">
                <h2 className='specialist'><i className="fas fa-hospital-user"></i> Our specialist.</h2><br />
                <div className="row mx-auto card-sizeing">
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