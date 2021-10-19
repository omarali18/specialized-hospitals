import React, { useEffect, useState } from 'react';
import "./ServiceDetails.css"

const ServiceDetails = () => {

    return (
        <div className=" w-75 mx-auto mb-5 mt-5">
            <h1 className="text-center">Top Categories</h1>
            <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4">
                <div className="col card-size">
                    <div className="card bg-dark text-white ">
                        <img src="https://www.wanderglobe.org/wp-content/uploads/2020/02/ent-doctor.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text d-inline">ENT</h5>

                        </div>
                    </div>
                </div>
                <div className="col card-size">
                    <div className="card bg-dark text-white ">
                        <img src="http://med.stanford.edu/content/dam/sm-news/images/2014/06/kidney-stock.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text ">Kidney & Medicine</h5>

                        </div>
                    </div>
                </div>
                <div className="col card-size">
                    <div className="card bg-dark text-white ">
                        <img src="https://i2.wp.com/www.finddoctor24.com/wp-content/uploads/2017/09/Neuromedicine.png?fit=1364%2C766&ssl=1" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text">Neuromedicine</h5>

                        </div>
                    </div>
                </div>
                <div className="col card-size">
                    <div className="card bg-dark text-white">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4UWe3dN_kPrZiQTVhTxNx9aKJisB5cCRLA&usqp=CAU" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text ">Orthopaedic Surgeon</h5>
                        </div>
                    </div>
                </div>
                <div className="col card-size">
                    <div className="card bg-dark text-white ">
                        <img src="https://ekbalpurnursinghome.org/wp-content/uploads/2020/10/gastroenterology.png" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text ">Gastroenterology</h5>
                        </div>
                    </div>
                </div>
                <div className="col card-size">
                    <div className="card bg-dark text-white">
                        <img src="https://i1.wp.com/www.finddoctor24.com/wp-content/uploads/2017/11/find-doctor-24.jpg?fit=616%2C346&ssl=1" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text ">Medicine</h5>
                        </div>
                    </div>
                </div>
                <div className="col card-size">
                    <div className="card bg-dark text-white ">
                        <img src="http://www.northshore.org/globalassets/healthy-you/blog/2012-2014/pediatric-appointments.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text ">Pediatrics</h5>
                        </div>
                    </div>
                </div>
                <div className="col card-size">
                    <div className="card bg-dark text-white ">
                        <img src="http://aarogyadhamhospital.com/wp-content/uploads/2018/05/5a3a43452cc09e078496e8ca.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay img-text-contgainer">
                            <h5 className="card-title img-text ">Chest & Medicine</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;