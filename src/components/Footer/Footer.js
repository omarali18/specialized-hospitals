import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className=" pt-2 footer-container">
            <div className="p-4  m-5 row  mx-auto footer-qsn">
                <div className="col-lg-6 col-md-6 col-12 col-sm-12 qsn">
                    <h3 className="fst-normal">QUESTIONS? REQUESTS? </h3>
                </div>
                <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
                    <h2 className="float-md-end float-sm-start"><button className="contact-btn job-offers">Contact us <i className="fas fa-arrow-right"></i></button></h2>
                </div>
            </div>
            <div className="row p-3 mx-auto footer-deatel">
                <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-7 col-12 col-sm-12">
                    <h3 className="fw-light">THE HOSPITAL WELCOMES YOU 24/7</h3>
                    <p><small className="visits">Visits to hospitalized patients are authorized
                        under conditions and by appointment</small></p>
                    <p><a className="visitor-information" href="#">Patient & visitor information <i className="fas fa-arrow-right"></i></a></p>
                    <h6>Find a physician</h6>
                    <button className="job-offers">Our job offers</button>
                </div>
                <div className="  p-3 col-lg-2 col-md-5 col-12 col-sm-12">
                    <h3>CONDITIONS</h3>
                    <small><a className="ancor" href="#">Endometriosis</a></small><br />
                    <small><a className="ancor" href="#">The Female Heart</a></small><br />
                    <small><a className="ancor" href="#">Palpitations</a></small><br />
                    <small><a className="ancor" href="#">Pelvic varicose veins</a></small><br />
                    <small><a className="ancor" href="#">in women</a></small><br /><br />
                    <h5><a className="display" href="#">Display all</a></h5>
                </div>
                <div className=" p-3  col-lg-2 col-md-6 col-12 col-sm-12">
                    <h3>EXAMS</h3>
                    <small><a className="ancor" href="#">3D Mammography</a></small><br />
                    <small><a className="ancor" href="#">Amniocentesis</a></small><br />
                    <small><a className="ancor" href="#">Calcium Score</a></small><br />
                    <small><a className="ancor" href="#">Cardiac MRI</a></small><br /><br />
                    <h5><a className="display" href="#">Display all</a></h5>
                </div>
                <div className="social-media p-3 col-lg-3 col-md-6 col-12 col-sm-12">
                    <h3>OUR SOCIAL MEDIA</h3>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;