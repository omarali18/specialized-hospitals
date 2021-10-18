import React from 'react';
import { Link } from 'react-router-dom';
import "./Doctor.css"

const Doctor = ({ doctor }) => {
    // console.log(doctor);
    const { img, name, description, id, location, specialist, working } = doctor

    return (
        <div className=" col-lg-4 col-md-6 col-sm-6 col-12 ">
            <div className="card doctor-card-design">
                <img className="card-img" height="300" src={img} alt="" />

                <div className="p-4">
                    <h2>{name}</h2>
                    <p><small><i className="fas fa-briefcase-medical"></i> {specialist}</small></p>
                    <p className="description"><i className="fas fa-user-md"></i> {description}</p>
                    <div className="d-flex justify-content-between">
                        <p><i className="fas fa-map-marker-alt"></i> {location}</p>

                        <p>{working}</p>


                    </div>
                    <div className="card-btn">
                        <Link to={`service/${id}`}><button>Appointment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;