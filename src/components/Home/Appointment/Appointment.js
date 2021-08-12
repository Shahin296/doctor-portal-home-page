import React from 'react';
import "./Appointment.css";
import appointmentDoctor from "../../../images/appointment-doctor.png"
const Appointment = () => {
    return (
        <section className="appointment mt-5">
            <div className="row d-flex  text-white justify-content-center">
                <div style={{padding:"0 5px"}} className="col-md-5">
                      <img className="appointDocImg" src={appointmentDoctor} alt="" />
                </div>
                <div style={{padding:"0 5px"}} className="col-md-7 ">
                   <h6 className="mt-5 mb-3" style={{color:"#11c1ce"}}>APPOINTMENT</h6>
                    <h1 className="mt-4 mb-4">Make an appointment <br></br>Today</h1>
                    <p className="mt-4 mb-3 w-75">It is a long established fact that a reader will be distractedly the readable content of a page when. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <button className="btn btn-primary mt-3 mb-3">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Appointment;