import React from 'react';
import "./InfornmationHealth.css"

const InfornmationHealth = () => {
    return (
        <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1 w-75 mx-auto py-5">
            <div className="col  information-title">
                <p className="fs-1">INFORMATION - HEALTH SITUATION</p>
            </div>
            <div className="col information-detail">
                <p>All our services are open and all appointments and surgical interventions are kept on the day and at the time scheduled with your doctor. We regret that we cannot accommodate accompanying persons who are invited to wait outside (with some exceptions).</p>
                <h5>Inpatient Visits</h5>
                <p>Due to the current health situation, inpatients visits are authorized under conditions and by appointment. The procedures are explained to each patient upon arrival. We thank you for your understanding.</p>
                <p className="p-ancor">Mandatory health pass: <a href="">new rules in effect starting August 9th</a></p>
            </div>
        </div>
    );
};

export default InfornmationHealth;