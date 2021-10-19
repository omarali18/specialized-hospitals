import React from 'react';
import { useParams } from 'react-router';
import "./Appointment.css"

const Appointment = () => {
    const drName = useParams()
    return (
        <div className=" mx-auto mt-5 doctor-Form-container">
            <div className="">
                <h1>Docrot : {drName.name}</h1>
                <form>
                    <div className="row mb-3">
                        <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="name"
                                placeholder="Enter Name" className="form-control" id="inputName3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email"
                                placeholder="Enter Email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputNumber3" className="col-sm-2 col-form-label">Number</label>
                        <div className="col-sm-10">
                            <input type="number" placeholder="Enter Number" className="form-control" id="inputNumber3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputDate3" className="col-sm-2 col-form-label">Date</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="inputDate3" />
                        </div>
                    </div>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    10 Am to 01 Pm
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    06 Pm to 10 Pm
                                </label>
                            </div>

                        </div>
                    </fieldset>

                    <div className="submit-btn">
                        <button type="submit" className="btn btn-primary">Submit here</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;