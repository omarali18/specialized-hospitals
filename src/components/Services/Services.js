import React from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"

const Services = ({ service }) => {
    const { img, name, description, id } = service
    return (
        <div className="col-md-4 ">
            <div className="card card-design">
                <img className="card-img" src={img} alt="" />

                <div className="p-4">
                    <h2>{name}</h2>
                    <p className="description">{description}</p>
                    <div className="card-btn">
                        <Link to={`service/${id}`}><button>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;